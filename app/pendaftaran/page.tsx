'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { FileText, AlertCircle, CheckCircle2, Loader2, Upload, Paperclip } from 'lucide-react';

// ==========================================
// 1. PINDAHKAN INTERFACE KE LUAR KOMPONEN
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
}

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [sukses, setSukses] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [setuju, setSetuju] = useState(false);

  // State Form Data
  const [form, setForm] = useState<FormState>({
    nik: '', namaLengkap: '', tempatLahir: '', tanggalLahir: '', jenisKelamin: '', agama: '',
    statusPernikahan: '', alamatKtp: '', alamatDomisili: '', whatsapp: '', email: '',
    pendidikanTerakhir: '', namaInstitusi: '', jurusan: '', tahunLulus: '', ipk: '',
    posisiDilamar: 'Staf Keuangan', // Default value sesuai checkbox yang tercentang
    punyaPengalaman: 'Tidak', perusahaanTerakhir: '', jabatanTerakhir: '', lamaBekerja: '', deskripsiTugas: '',
    keahlianDimiliki: '', penguasaanKomputer: '', sertifikasiPelatihan: ''
  });

  // State Dokumen Fisik
  const [files, setFiles] = useState<{ [key: string]: File | null }>({
    surat_lamaran: null, cv: null, ktp: null, pas_foto: null, ijazah: null, transkrip: null, kk: null,
    sertifikat_opsional: null, surat_pengalaman: null, npwp: null
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
      if (file.size > 2 * 1024 * 1024) { 
        return alert('Ukuran berkas maksimal 2MB.'); 
      }
      setFiles((prev) => ({ ...prev, [key]: file }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!setuju) return alert('Anda harus menyetujui pernyataan pelamar.');
    if (!form.posisiDilamar) return alert('Anda harus memilih posisi yang dilamar.');
    setLoading(true);
    setErrorMsg('');

    try {
      const dataForm = new FormData();
      Object.entries(form).forEach(([k, v]) => dataForm.append(k, v));
      Object.entries(files).forEach(([k, v]) => { if (v) dataForm.append(k, v); });

      const response = await fetch('/api/upload', { method: 'POST', body: dataForm });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Gagal mengirim formulir.');
      
      // Langsung arahkan ke UI pendaftaran berhasil tanpa memicu jendela cetak dokumen
      setSukses(true);

    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  if (sukses) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 text-slate-800">
        <div className="bg-white p-8 rounded-3xl shadow-sm max-w-md w-full text-center border border-slate-200/60">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-slate-950">Pendaftaran Berhasil!</h2>
          <p className="text-slate-500 text-sm mt-2">Data formulir rekrutmen Staf Keuangan Anda telah terekam di sistem RS Arun Lhokseumawe.</p>
          <button onClick={() => window.location.reload()} className="mt-6 bg-slate-900 text-white text-xs font-semibold py-2 px-4 rounded-xl hover:bg-slate-800 transition">Kirim Lamaran Baru</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 flex justify-center text-slate-800">
      <div className="max-w-3xl w-full bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 sm:p-8 text-white text-center">
          <h1 className="text-lg sm:text-xl font-extrabold tracking-wide uppercase">Formulir Pendaftaran Rekrutmen Staf Keuangan</h1>
          <p className="text-emerald-100 text-xs mt-1">Rumah Sakit Arun Lhokseumawe</p>
          <p className="text-[11px] text-emerald-100/80 mt-3 max-w-xl mx-auto leading-relaxed">
            Silakan lengkapi seluruh data dengan benar dan unggah dokumen yang dipersyaratkan. Data yang diberikan harus sesuai dengan dokumen asli dan dapat dipertanggungjawabkan.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {errorMsg && (
            <div className="bg-rose-50 text-rose-600 p-3 rounded-xl flex items-center gap-2 text-xs border border-rose-100"><AlertCircle className="w-4 h-4 shrink-0" /><span>{errorMsg}</span></div>
          )}

          {/* SEKSI A */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">A. DATA PRIBADI</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Nomor Induk Kependudukan (NIK)" name="nik" placeholder="16 Digit NIK" formValue={form.nik} onChange={handleInputChange} />
              <InputField label="Nama Lengkap (Sesuai KTP)" name="namaLengkap" formValue={form.namaLengkap} onChange={handleInputChange} />
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
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">B. DATA PENDIDIKAN</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Pendidikan Terakhir" name="pendidikanTerakhir" placeholder="D3 / S1 Keuangan, dll" formValue={form.pendidikanTerakhir} onChange={handleInputChange} />
              <InputField label="Nama Perguruan Tinggi / Institusi" name="namaInstitusi" formValue={form.namaInstitusi} onChange={handleInputChange} />
              <InputField label="Program Studi / Jurusan" name="jurusan" formValue={form.jurusan} onChange={handleInputChange} />
              <div className="grid grid-cols-2 gap-3">
                <InputField label="Tahun Lulus" name="tahunLulus" placeholder="2024" formValue={form.tahunLulus} onChange={handleInputChange} />
                <InputField label="IPK" name="ipk" placeholder="3.50" formValue={form.ipk} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SEKSI C */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">C. POSISI YANG DILAMAR</h2>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Pilih Posisi Jabatan <span className="text-rose-500">*</span></label>
              <select 
                name="posisiDilamar" 
                required 
                value={form.posisiDilamar} 
                onChange={handleInputChange} 
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm"
              >
                <option value="Staf Keuangan">Staf Keuangan</option>
              </select>
              <p className="text-[11px] text-slate-400 mt-1">Sistem otomatis mengunci opsi pada formasi Staf Keuangan di gelombang rekrutmen ini.</p>
            </div>
          </div>

          {/* SEKSI D */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">D. PENGALAMAN KERJA</h2>
            <div>
              <label className="block text-xs font-semibold text-slate-600 uppercase mb-2">Apakah memiliki pengalaman kerja?</label>
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
                  <InputField label="Nama Perusahaan/Instansi Terakhir" name="perusahaanTerakhir" required={form.punyaPengalaman === 'Ya'} formValue={form.perusahaanTerakhir} onChange={handleInputChange} />
                  <InputField label="Jabatan Terakhir" name="jabatanTerakhir" required={form.punyaPengalaman === 'Ya'} formValue={form.jabatanTerakhir} onChange={handleInputChange} />
                  <InputField label="Lama Bekerja" name="lamaBekerja" placeholder="Misal: 2 Tahun" required={form.punyaPengalaman === 'Ya'} formValue={form.lamaBekerja} onChange={handleInputChange} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Deskripsi Singkat Tugas & Tanggung Jawab</label>
                  <textarea name="deskripsiTugas" rows={3} value={form.deskripsiTugas} onChange={handleInputChange} className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 text-slate-800 transition shadow-sm" />
                </div>
              </div>
            )}
          </div>

          {/* SEKSI E */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">E. KEAHLIAN DAN KOMPETENSI</h2>
            <InputField label="Keahlian yang Dimiliki" name="keahlianDimiliki" required={false} placeholder="Akuntansi Biaya, Pajak, dll" formValue={form.keahlianDimiliki} onChange={handleInputChange} />
            <InputField label="Penguasaan Aplikasi Komputer" name="penguasaanKomputer" required={false} placeholder="Excel, Word, MYOB, Zahir, dll" formValue={form.penguasaanKomputer} onChange={handleInputChange} />
            <InputField label="Sertifikasi atau Pelatihan Relevan" name="sertifikasiPelatihan" required={false} formValue={form.sertifikasiPelatihan} onChange={handleInputChange} />
          </div>

          {/* SEKSI F */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-emerald-700 border-b border-emerald-100 pb-1">F. DOKUMEN YANG WAJIB DIUNGGAH</h2>
            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dokumen Wajib</p>
              <FileUploadField label="Surat Lamaran Kerja" formKey="surat_lamaran" file={files.surat_lamaran} onChange={handleFileChange} />
              <FileUploadField label="Curriculum Vitae (CV)" formKey="cv" file={files.cv} onChange={handleFileChange} />
              <FileUploadField label="Kartu Tanda Penduduk (KTP)" formKey="ktp" file={files.ktp} onChange={handleFileChange} />
              <FileUploadField label="Pas Foto Berwarna Terbaru" formKey="pas_foto" file={files.pas_foto} onChange={handleFileChange} />
              <FileUploadField label="Ijazah Pendidikan Terakhir" formKey="ijazah" file={files.ijazah} onChange={handleFileChange} />
              <FileUploadField label="Transkrip Nilai" formKey="transkrip" file={files.transkrip} onChange={handleFileChange} />
              <FileUploadField label="Kartu Keluarga (KK)" formKey="kk" file={files.kk} onChange={handleFileChange} />

              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider pt-2">Dokumen Opsional</p>
              <FileUploadField label="Sertifikat Pelatihan yang Relevan" formKey="sertifikat_opsional" required={false} file={files.sertifikat_opsional} onChange={handleFileChange} />
              <FileUploadField label="Surat Keterangan/Pengalaman Kerja" formKey="surat_pengalaman" required={false} file={files.surat_pengalaman} onChange={handleFileChange} />
              <FileUploadField label="Nomor Pokok Wajib Pajak (NPWP)" formKey="npwp" required={false} file={files.npwp} onChange={handleFileChange} />
            </div>
          </div>

          {/* SEKSI G */}
          <div className="space-y-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-inner">
            <h2 className="text-xs font-bold text-slate-700 uppercase">G. PERNYATAAN PELAMAR</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Saya menyatakan bahwa seluruh data dan dokumen yang saya sampaikan dalam formulir ini adalah benar, lengkap, dan dapat dipertanggungjawabkan. Apabila di kemudian hari ditemukan ketidaksesuaian data atau dokumen, saya bersedia menerima konsekuensi sesuai ketentuan yang berlaku.
            </p>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-900 cursor-pointer pt-1">
              <input type="checkbox" checked={setuju} onChange={(e) => setSetuju(e.target.checked)} className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4" />
              <span>Saya menyetujui pernyataan di atas.</span>
            </label>
          </div>

          {/* Button Submit */}
          <button type="submit" disabled={loading || !setuju} className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-bold py-3 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm text-sm">
            {loading ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Memproses Seluruh Dokumen...</span></> : <span>Kirim Seluruh Data Lamaran</span>}
          </button>
        </form>
      </div>
    </div>
  );
}

// ========================================================
// 2. SUB-KOMPONEN DI LUAR AREA UTAMA
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

function FileUploadField({ label, formKey, file, onChange, required = true }: FileUploadFieldProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl gap-2 shadow-sm">
      <div>
        <p className="text-xs font-semibold text-slate-700">{label} {required && <span className="text-rose-500">*</span>}</p>
        <p className="text-[10px] text-slate-400">PDF/JPG/PNG (Maks. 2MB)</p>
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