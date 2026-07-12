import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Buat folder public/uploads jika belum ada otomatis
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const posisiDilamar = (formData.get('posisiDilamar') as string) || 'Direktur Utama PT. Rumah Sakit Arun Medica';

    // 1. Kategori Dokumen Wajib Umum (7 Dokumen)
    const dokumenWajib = [
      'surat_lamaran', 
      'cv', 
      'ktp', 
      'pas_foto', 
      'ijazah', 
      'transkrip', 
      'kk'
    ];

    // 2. Dokumen Khusus & Direksi Wajib (5 Dokumen)
    const dokumenKhususWajib = [
      'makalah',
      'skck',
      'surat_sehat',
      'bebas_narkoba',
      'pakta_integritas'
    ];

    // 3. Dokumen Opsional / Kondisional (4 Dokumen)
    const dokumenOpsional = [
      'sertifikat_opsional', 
      'surat_pengalaman', 
      'npwp',
      'str' // Khusus STR diperiksa kondisional di bawah
    ];

    const fileUrls: { [key: string]: string | null } = {};

    // Helper Function untuk menyimpan file ke disk
    const saveFileToDisk = async (file: File, key: string) => {
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      
      // Validasi Ekstensi File
      if (!fileExt || !['pdf', 'jpg', 'jpeg', 'png'].includes(fileExt)) {
        throw new Error(`Format file ${file.name} tidak valid (Harus PDF/JPG/PNG).`);
      }
      
      // Validasi Ukuran (Maksimal 5MB untuk mengakomodasi dokumen tebal/makalah)
      if (file.size > 5 * 1024 * 1024) {
        throw new Error(`Ukuran file ${file.name} melebihi batas 5MB.`);
      }

      // Simpan File ke /public/uploads/
      const uniqueName = `${Date.now()}-${key}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      const filePath = path.join(uploadDir, uniqueName);
      const bytes = await file.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(bytes));

      return `/uploads/${uniqueName}`;
    };

    // --- PROSES DOKUMEN WAJIB UMUM ---
    for (const key of dokumenWajib) {
      const file = formData.get(key) as File | null;
      if (!file || file.size === 0) {
        return NextResponse.json({ error: `Dokumen ${key.replace(/_/g, ' ')} wajib diunggah.` }, { status: 400 });
      }
      fileUrls[`file_${key}`] = await saveFileToDisk(file, key);
    }

    // --- PROSES DOKUMEN KHUSUS WAJIB DIREKSI ---
    for (const key of dokumenKhususWajib) {
      const file = formData.get(key) as File | null;
      if (!file || file.size === 0) {
        return NextResponse.json({ error: `Dokumen ${key.replace(/_/g, ' ')} wajib diunggah.` }, { status: 400 });
      }
      fileUrls[`file_${key}`] = await saveFileToDisk(file, key);
    }

    // --- VALIDASI KHUSUS STR (Wajib jika melamar Direktur RS) ---
    const fileSTR = formData.get('str') as File | null;
    if (posisiDilamar === 'Direktur Rumah Sakit Arun Lhokseumawe') {
      if (!fileSTR || fileSTR.size === 0) {
        return NextResponse.json({ error: 'Fotokopi STR Aktif wajib diunggah untuk posisi Direktur Rumah Sakit.' }, { status: 400 });
      }
    }

    // --- PROSES DOKUMEN OPSIONAL & KONDISIONAL ---
    for (const key of dokumenOpsional) {
      const file = formData.get(key) as File | null;
      if (file && file.size > 0) {
        fileUrls[`file_${key}`] = await saveFileToDisk(file, key);
      } else {
        fileUrls[`file_${key}`] = null;
      }
    }

    // --- MAPPING DATA TEKS PENDAFTARAN ---
    const dataInput = {
      nik: formData.get('nik') as string,
      nama_lengkap: formData.get('namaLengkap') as string,
      tempat_lahir: (formData.get('tempatLahir') as string) || (formData.get('tempatLair') as string),
      tanggal_lahir: formData.get('tanggalLahir') as string,
      jenis_kelamin: formData.get('jenisKelamin') as string,
      agama: formData.get('agama') as string,
      status_pernikahan: formData.get('statusPernikahan') as string,
      alamat_ktp: formData.get('alamatKtp') as string,
      alamat_domisili: formData.get('alamatDomisili') as string,
      whatsapp: formData.get('whatsapp') as string,
      email: formData.get('email') as string,
      pendidikan_terakhir: formData.get('pendidikanTerakhir') as string,
      nama_institusi: formData.get('namaInstitusi') as string,
      jurusan: formData.get('jurusan') as string,
      tahun_lulus: formData.get('tahunLulus') as string,
      ipk: formData.get('ipk') as string,
      punya_pengalaman: formData.get('punyaPengalaman') as string,
      perusahaan_terakhir: formData.get('perusahaanTerakhir') as string,
      jabatan_terakhir: formData.get('jabatanTerakhir') as string,
      lama_bekerja: formData.get('lamaBekerja') as string,
      deskripsi_tugas: formData.get('deskripsiTugas') as string,
      keahlian_dimiliki: formData.get('keahlianDimiliki') as string,
      penguasaan_komputer: formData.get('penguasaanKomputer') as string,
      sertifikasi_pelatihan: formData.get('sertifikasiPelatihan') as string,
      posisi_dilamar: posisiDilamar,
      status: 'PROSES',
      status_seleksi: 'STAGE_1_PROSES'
    };

    // --- INSERT KE DATABASE SUPABASE ---
    const { error: insertError } = await supabase
      .from('pelamar')
      .insert([{ ...dataInput, ...fileUrls }]);

    if (insertError) {
      console.error('Database Insert Error:', insertError);
      throw insertError;
    }

    return NextResponse.json({ success: true, message: 'Pendaftaran dan seluruh berkas berhasil disimpan!' });
  } catch (error: any) {
    console.error('Error detail backend:', error);
    return NextResponse.json({ error: error.message || 'Terjadi kesalahan sistem internal.' }, { status: 500 });
  }
}