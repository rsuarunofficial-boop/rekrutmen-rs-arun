'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Upload, Paperclip, MapPin, Building2 } from 'lucide-react';

// ==========================================
// 1. INTERFACE KHUSUS
// ==========================================
interface FormState {
  [key: string]: string;
}

interface InputFieldProps {
  label: string;
  name: string;
  formValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

interface FileUploadFieldProps {
  label: string;
  formKey: string;
  file: File | null;
  onChange: (e: ChangeEvent<HTMLInputElement>, key: string) => void;
  required?: boolean;
  keterangan?: string;
}

export default function PendaftaranDireksi() {
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [setuju, setSetuju] = useState(false);

  // State Form Data
  const [form, setForm] = useState<FormState>({
    nik: '', namaLengkap: '', tempatLahir: '', tanggalLahir: '', jenisKelamin: '', agama: '',
    statusPernikahan: '', alamatKtp: '', alamatDomisili: '', whatsapp: '', email: '',
    pendidikanTerakhir: '', namaInstitusi: '', jurusan: '', tahunLulus: '', ipk: '',
    posisiDilamar: 'Direktur Utama PT. Rumah Sakit Arun Medica', // Default pilihan direksi
    punyaPengalaman: 'Ya', perusahaanTerakhir: '', jabatanTerakhir: '', lamaBekerja: '', deskripsiTugas: '',
    keahlianDimiliki: '', penguasaanKomputer: '', sertifikasiPelatihan: ''
  });

  // State Dokumen Fisik (Termasuk 6 Kolom Baru)
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    surat_lamaran: null, cv: null, ktp: null, pas_foto: null, ijazah: null, transkrip: null, kk: null,
    sertifikat_opsional: null, surat_pengalaman: null, npwp: null,
    // 6 Dokumen Khusus Direksi Baru
    str: null, skck: null, surat_sehat: null, bebas_narkoba: null, pakta_integritas: null, makalah: null
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, key: string) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const maxSize = key === 'makalah' ? null : 5 * 1024 * 1024;

      if (maxSize !== null && file.size > maxSize) {
        return alert('Ukuran berkas maksimal 5MB.');
      }

      setFiles((prev) => ({ ...prev, [key]: file }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!setuju) return alert('Anda harus menyetujui pernyataan pelamar.');
    if (!form.posisiDilamar) return alert('Anda harus memilih posisi yang dilamar.');
    
    // Validasi Khusus STR jika memilih Direktur RS
    if (form.posisiDilamar === 'Direktur Rumah Sakit Arun Lhokseumawe' && !files.str) {
      return alert('Khusus posisi Direktur Rumah Sakit, Wajib melampirkan/mengunggah Fotokopi STR Aktif.');
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const dataForm = new FormData();
      Object.entries(form).forEach(([k, v]) => dataForm.append(k, v));
      Object.entries(files).forEach(([k, v]) => { if (v) dataForm.append(k, v); });

      const response = await fetch('/api/upload', { method: 'POST', body: dataForm });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Gagal mengirim formulir.');
      
      setSukses(true);

    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Terjadi kesalahan sistem.';
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  if (sukses) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 text-slate-800">
        <div className="bg-white p-8 rounded-3xl shadow-sm max-w-lg w-full text-center border border-slate-200/60 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
          <h2 className="text-2xl font-black text-slate-950">Pendaftaran Berhasil!</h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Data pendaftaran online Jabatan Direksi Saudara/i <b>{form.namaLengkap}</b> telah berhasil terekam di sistem E-Rekrutmen RS Arun.
          </p>
          
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl text-left text-xs text-amber-900 space-y-2">
            <p className="font-extrabold uppercase text-amber-950 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" /> Langkah Selanjutnya (Verifikasi Berkas Fisik):
            </p>
            <p className="leading-relaxed">
              Silakan serahkan berkas cetak fisik beserta dokumen asli ke Sekretariat Panitia Seleksi:
            </p>
            <div className="font-bold text-slate-800 border-l-2 border-amber-500 pl-2">
              Bagian HRD RS Arun Lhokseumawe<br />
              Jl. Plaju, Kompleks Perumahan PT. PAG, Batuphat, Kota Lhokseumawe, Aceh.
            </div>
          </div>

          <button 
            onClick={() => window.location.href = '/'} 
            className="w-full bg-slate-950 text-white text-xs font-bold py-3 px-4 rounded-xl hover:bg-slate-800 transition"
          >
            Kembali ke Halaman Utama
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 flex justify-center text-slate-800">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 sm:p-8 text-white text-center">
          <span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest text-white border border-white/30">
            Seleksi Terbuka Jabatan Direksi
          </span>
          <h1 className="text-lg sm:text-2xl font-black tracking-wide uppercase mt-2">
            Formulir Pendaftaran Pimpinan Eksekutif
          </h1>
          <p className="text-emerald-100 text-xs mt-1">PT. Rumah Sakit Arun Medica & RS Arun Lhokseumawe</p>
        </div>

        {/* Informasi Verifikasi Berkas Fisik */}
        <div className="bg-amber-50 border-b border-amber-200/80 p-4 sm:px-8 text-xs text-amber-900 flex items-start gap-3">
          <Building2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <b>Catatan Penting:</b> Selain melengkapi pendaftaran online ini, Anda diwajibkan menyerahkan berkas cetak fisik serta membawa dokumen asli untuk verifikasi ke <b>Bagian HRD RS Arun Lhokseumawe (Jl. Plaju Komplek Perumahan PT. PAG Batuphat)</b>.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {errorMsg && (
            <div className="bg-rose-50 text-rose-600 p-3 rounded-xl flex items-center gap-2 text-xs border border-rose-100">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* SEKSI A */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">A. DATA PRIBADI PELAMAR</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Nomor Induk Kependudukan (NIK)" name="nik" placeholder="16 Digit NIK KTP" formValue={form.nik} onChange={handleInputChange} />
              <InputField label="Nama Lengkap (Sesuai KTP & Gelar)" name="namaLengkap" formValue={form.namaLengkap} onChange={handleInputChange} />
              <InputField label="Tempat Lahir" name="tempatLahir" formValue={form.tempatLahir} onChange={handleInputChange} />
              <InputField label="Tanggal Lahir" name="tanggalLahir" type="date" formValue={form.tanggalLahir} onChange={handleInputChange} />
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Jenis Kelamin <span className="text-rose-500">*</span></label>
                <select name="jenisKelamin" required value={form.jenisKelamin} onChange={handleInputChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm">
                  <option value="">-- Pilih --</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <InputField label="Agama" name="agama" formValue={form.agama} onChange={handleInputChange} />
              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Status Pernikahan <span className="text-rose-500">*</span></label>
                <select name="statusPernikahan" required value={form.statusPernikahan} onChange={handleInputChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm">
                  <option value="">-- Pilih --</option>
                  <option value="Belum Kawin">Belum Kawin</option>
                  <option value="Kawin">Kawin</option>
                  <option value="Cerai">Cerai</option>
                </select>
              </div>
              <InputField label="Nomor Handphone/WhatsApp" name="whatsapp" placeholder="08xxxx" formValue={form.whatsapp} onChange={handleInputChange} />
            </div>
            <InputField label="Alamat Email Aktif" name="email" type="email" formValue={form.email} onChange={handleInputChange} />
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Alamat Sesuai KTP <span className="text-rose-500">*</span></label>
              <textarea name="alamatKtp" required rows={2} value={form.alamatKtp} onChange={handleInputChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Alamat Domisili <span className="text-slate-400 font-normal">(Kosongkan jika sama dengan KTP)</span></label>
              <textarea name="alamatDomisili" rows={2} value={form.alamatDomisili} onChange={handleInputChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm" />
            </div>
          </div>

          {/* SEKSI B */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">B. DATA PENDIDIKAN TINGGI</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Pendidikan Terakhir" name="pendidikanTerakhir" placeholder="S1 / S2 / MMRS / MARS / Spesialis" formValue={form.pendidikanTerakhir} onChange={handleInputChange} />
              <InputField label="Nama Perguruan Tinggi / Universitas" name="namaInstitusi" formValue={form.namaInstitusi} onChange={handleInputChange} />
              <InputField label="Program Studi / Kedokteran" name="jurusan" formValue={form.jurusan} onChange={handleInputChange} />
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Tahun Lulus" name="tahunLulus" placeholder="2015" formValue={form.tahunLulus} onChange={handleInputChange} />
                <InputField label="IPK / Nilai" name="ipk" placeholder="3.50" formValue={form.ipk} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SEKSI C: POSISI JABATAN DIREKSI */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">C. POSISI JABATAN YANG DILAMAR</h2>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Pilih Jabatan Direksi <span className="text-rose-500">*</span></label>
              <select 
                name="posisiDilamar" 
                required 
                value={form.posisiDilamar} 
                onChange={handleInputChange} 
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-emerald-800 focus:outline-none focus:border-emerald-500 transition shadow-sm"
              >
                <option value="Direktur Utama PT. Rumah Sakit Arun Medica">Direktur Utama PT. Rumah Sakit Arun Medica</option>
                <option value="Direktur Rumah Sakit Arun Lhokseumawe">Direktur Rumah Sakit Arun Lhokseumawe</option>
              </select>
            </div>
          </div>

          {/* SEKSI D */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">D. PENGALAMAN MANAJERIAL & KEPEMIMPINAN</h2>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-2">Memiliki Pengalaman Manajerial Minimal 3-5 Tahun?</label>
              <div className="flex gap-4">
                {['Ya', 'Tidak'].map((opt) => (
                  <label key={opt} className="flex items-center gap-1.5 text-sm font-medium cursor-pointer">
                    <input type="radio" name="punyaPengalaman" value={opt} checked={form.punyaPengalaman === opt} onChange={handleInputChange} className="text-emerald-600 focus:ring-emerald-500" /> {opt}
                  </label>
                ))}
              </div>
            </div>
            {form.punyaPengalaman === 'Ya' && (
              <div className="space-y-4 border-l-2 border-emerald-500 pl-4 animate-in slide-in-from-left-2 duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Instansi / RS / Perusahaan Terakhir" name="perusahaanTerakhir" required={form.punyaPengalaman === 'Ya'} formValue={form.perusahaanTerakhir} onChange={handleInputChange} />
                  <InputField label="Jabatan Pimpinan Terakhir" name="jabatanTerakhir" required={form.punyaPengalaman === 'Ya'} formValue={form.jabatanTerakhir} onChange={handleInputChange} />
                  <InputField label="Lama Bekerja / Menjabat" name="lamaBekerja" placeholder="Misal: 5 Tahun" required={form.punyaPengalaman === 'Ya'} formValue={form.lamaBekerja} onChange={handleInputChange} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Ringkasan Capaian Manajerial / Pengelolaan Organisasi</label>
                  <textarea name="deskripsiTugas" rows={3} value={form.deskripsiTugas} onChange={handleInputChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm" />
                </div>
              </div>
            )}
          </div>

          {/* SEKSI E */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">E. KEAHLIAN TATA KELOLA & STRATEGI BISNIS</h2>
            <InputField label="Keahlian Utama Manajerial / GCG" name="keahlianDimiliki" required={false} placeholder="Manajemen Risiko, Strategi Bisnis, Mutu Pelayanan RS, dll" formValue={form.keahlianDimiliki} onChange={handleInputChange} />
            <InputField label="Penguasaan Sistem & Inovasi Digital" name="penguasaanKomputer" required={false} placeholder="SIMRS, EMR, Aplikasi Manajemen Keuangan, dll" formValue={form.penguasaanKomputer} onChange={handleInputChange} />
            <InputField label="Sertifikasi Executive / Pelatihan Manajerial" name="sertifikasiPelatihan" required={false} formValue={form.sertifikasiPelatihan} onChange={handleInputChange} />
          </div>

          {/* SEKSI F: UNGGAH SELURUH DOKUMEN DIREKSI */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">F. UNGGAH DOKUMEN PERSYARATAN DIREKSI</h2>
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dokumen Administrasi Utama</p>
              <FileUploadField label="Surat Lamaran" formKey="surat_lamaran" file={files.surat_lamaran} onChange={handleFileChange} />
              <FileUploadField label="Curriculum Vitae (CV)" formKey="cv" file={files.cv} onChange={handleFileChange} />
              <FileUploadField label="Fotokopi KTP" formKey="ktp" file={files.ktp} onChange={handleFileChange} />
              <FileUploadField label="Fotokopi Kartu Keluarga (KK)" formKey="kk" file={files.kk} onChange={handleFileChange} />
              <FileUploadField label="Pasfoto Berwarna Terbaru" formKey="pas_foto" file={files.pas_foto} onChange={handleFileChange} />
              <FileUploadField label="Ijazah Terakhir Legalisasi" formKey="ijazah" file={files.ijazah} onChange={handleFileChange} />
              <FileUploadField label="Transkrip Nilai Legalisasi" formKey="transkrip" file={files.transkrip} onChange={handleFileChange} />
              <FileUploadField label="Surat Pengalaman Kerja Manajerial" formKey="surat_pengalaman" file={files.surat_pengalaman} onChange={handleFileChange} />

              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider pt-3">Dokumen Khusus & Makalah Jabatan</p>
              <FileUploadField 
                label="Dokumen Makalah Resmi (15–20 Halaman)" 
                formKey="makalah" 
                file={files.makalah} 
                onChange={handleFileChange} 
                keterangan="Format PDF/JPG/PNG (Tanpa batas ukuran)"
              />
              <FileUploadField 
                label="Fotokopi STR Aktif" 
                formKey="str" 
                required={form.posisiDilamar === 'Direktur Rumah Sakit Arun Lhokseumawe'} 
                file={files.str} 
                onChange={handleFileChange} 
                keterangan="Wajib khusus Jabatan Direktur RS"
              />
              <FileUploadField label="SKCK Aktif Kepolisian" formKey="skck" file={files.skck} onChange={handleFileChange} />
              <FileUploadField label="Surat Keterangan Sehat" formKey="surat_sehat" file={files.surat_sehat} onChange={handleFileChange} />
              <FileUploadField label="Surat Bebas Narkoba" formKey="bebas_narkoba" file={files.bebas_narkoba} onChange={handleFileChange} />
              <FileUploadField label="Pakta Integritas Bermaterai" formKey="pakta_integritas" file={files.pakta_integritas} onChange={handleFileChange} />

              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-2">Dokumen Pendukung Tambahan</p>
              <FileUploadField label="Sertifikat Pelatihan Relevan" formKey="sertifikat_opsional" required={false} file={files.sertifikat_opsional} onChange={handleFileChange} />
              <FileUploadField label="Nomor Pokok Wajib Pajak (NPWP)" formKey="npwp" required={false} file={files.npwp} onChange={handleFileChange} />
            </div>
          </div>

          {/* SEKSI G */}
          <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-inner">
            <h2 className="text-xs font-bold text-slate-700 uppercase">G. PERNYATAAN KOMITMEN PELAMAR</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Saya menyatakan bahwa seluruh data, dokumen, dan makalah yang saya unggah adalah karya sendiri serta benar. Apabila ditemukan ketidaksesuaian atau pemalsuan data, saya bersedia dinyatakan gugur dari Seleksi Terbuka Direksi ini.
            </p>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-900 cursor-pointer pt-1">
              <input type="checkbox" checked={setuju} onChange={(e) => setSetuju(e.target.checked)} className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4" />
              <span>Saya menyetujui seluruh ketentuan seleksi direksi di atas.</span>
            </label>
          </div>

          {/* Button Submit */}
          <button type="submit" disabled={loading || !setuju} className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold py-3.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm text-sm">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Mengunggah Berkas & Data Direksi...</span></> : <span>Kirim Pendaftaran Direksi Online</span>}
          </button>
        </form>
      </div>
    </div>
  );
}

// ========================================================
// SUB-KOMPONEN REUSABLE
// ========================================================
function InputField({ label, name, formValue, onChange, type = 'text', required = true, placeholder = '' }: InputFieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input 
        type={type} 
        name={name} 
        required={required} 
        value={formValue || ''} 
        onChange={onChange} 
        placeholder={placeholder} 
        className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm" 
      />
    </div>
  );
}

function FileUploadField({ label, formKey, file, onChange, required = true, keterangan = 'PDF/JPG/PNG (Maks. 5MB)' }: FileUploadFieldProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl gap-2 shadow-sm">
      <div>
        <p className="text-xs font-semibold text-slate-700">{label} {required && <span className="text-rose-500">*</span>}</p>
        <p className="text-[10px] text-slate-400">{keterangan}</p>
      </div>
      <div className="relative bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-600 flex items-center gap-1.5 cursor-pointer hover:border-emerald-500 transition shadow-sm">
        <input 
          type="file" 
          required={required && !file} 
          accept="application/pdf, image/jpeg, image/png" 
          onChange={(e) => onChange(e, formKey)} 
          className="absolute inset-0 opacity-0 cursor-pointer" 
        />
        {file ? <Paperclip className="w-3.5 h-3.5 text-emerald-600" /> : <Upload className="w-3.5 h-3.5 text-slate-400" />}
        <span className="max-w-[120px] truncate font-medium">{file ? file.name : 'Pilih Berkas'}</span>
      </div>
    </div>
  );
}