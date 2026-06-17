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

    // List kunci dokumen wajib & opsional
    const dokumenWajib = ['surat_lamaran', 'cv', 'ktp', 'pas_foto', 'ijazah', 'transkrip', 'kk'];
    const dokumenOpsional = ['sertifikat_opsional', 'surat_pengalaman', 'npwp'];
    
    const fileUrls: { [key: string]: string | null } = {};

    // 1. Proses Dokumen Wajib
    for (const key of dokumenWajib) {
      const file = formData.get(key) as File | null;
      
      if (!file || file.size === 0) {
        return NextResponse.json({ error: `Dokumen ${key.replace('_', ' ')} wajib diunggah.` }, { status: 400 });
      }

      // Validasi Ekstensi & Ukuran
      const fileExt = file.name.split('.').pop()?.toLowerCase();
      if (!fileExt || !['pdf', 'jpg', 'jpeg', 'png'].includes(fileExt)) {
        return NextResponse.json({ error: `Format file ${file.name} tidak valid (Harus PDF/JPG/PNG).` }, { status: 400 });
      }
      if (file.size > 2 * 1024 * 1024) {
        return NextResponse.json({ error: `Ukuran file ${file.name} melebihi batas 2MB.` }, { status: 400 });
      }

      // Simpan File
      const uniqueName = `${Date.now()}-${key}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      const filePath = path.join(uploadDir, uniqueName);
      const bytes = await file.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(bytes));

      fileUrls[`file_${key}`] = `/uploads/${uniqueName}`;
    }

    // 2. Proses Dokumen Opsional
    for (const key of dokumenOpsional) {
      const file = formData.get(key) as File | null;
      
      if (file && file.size > 0) {
        const fileExt = file.name.split('.').pop()?.toLowerCase();
        if (!fileExt || !['pdf', 'jpg', 'jpeg', 'png'].includes(fileExt)) {
          return NextResponse.json({ error: `Format file opsional ${file.name} harus PDF/JPG/PNG.` }, { status: 400 });
        }
        if (file.size > 2 * 1024 * 1024) {
          return NextResponse.json({ error: `Ukuran file opsional ${file.name} melebihi batas 2MB.` }, { status: 400 });
        }

        const uniqueName = `${Date.now()}-${key}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
        const filePath = path.join(uploadDir, uniqueName);
        const bytes = await file.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(bytes));

        fileUrls[`file_${key}`] = `/uploads/${uniqueName}`;
      } else {
        fileUrls[`file_${key}`] = null;
      }
    }

    // 3. Ambil data teks pendaftaran dengan mapping nama key yang aman dari typo
    const dataInput = {
      nik: formData.get('nik') as string,
      nama_lengkap: formData.get('namaLengkap') as string,
      tempat_lahir: formData.get('tempatLahir') as string || formData.get('tempatLair') as string, // Cek kedua kemungkinan typo
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
      posisi_dilamar: formData.get('posisiDilamar') || 'Staf Keuangan',
    };

    // 4. Masukkan ke database Supabase
    const { error: insertError } = await supabase
      .from('pelamar')
      .insert([{ ...dataInput, ...fileUrls }]);

    if (insertError) throw insertError;

    return NextResponse.json({ success: true, message: 'Pendaftaran berhasil disimpan!' });
  } catch (error: any) {
    console.error('Error detail backend:', error);
    return NextResponse.json({ error: error.message || 'Terjadi kesalahan sistem internal.' }, { status: 500 });
  }
}