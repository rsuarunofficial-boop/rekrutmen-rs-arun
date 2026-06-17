'use client';

import { useState, FormEvent } from 'react';
import { Search, Loader2, CheckCircle2, XCircle, AlertCircle, Calendar, MapPin, ArrowLeft, Building2, Printer, Scissors } from 'lucide-react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';

interface HasilSeleksi {
  nama_lengkap: string;
  nik: string;
  status_seleksi: string;
}

export default function CekStatus() {
  const [nikInput, setNikInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasil, setHasil] = useState<HasilSeleksi | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCekStatus = async (e: FormEvent) => {
    e.preventDefault();
    if (nikInput.length !== 16) {
      return alert('NIK harus berjumlah 16 digit angka.');
    }

    setLoading(true);
    setErrorMsg('');
    setHasil(null);

    try {
      // Kita panggil API internal Next.js
      const response = await fetch('/api/cek-kelulusan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nik: nikInput }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Gagal memuat data.');
      }

      setHasil(result.data);
    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  // Fungsi memicu cetak bawaan browser
  const handlePrint = () => {
    window.print();
  };

  // Generator Nomor Peserta Otomatis (Mengambil 6 digit terakhir NIK secara aman)
  const getNomorPeserta = (nik: string | undefined | null) => {
    // Jika nik tidak ada, kosong, atau undefined, berikan fallback string agar tidak memicu crash runtime
    if (!nik) return '02-FA/RSA/2026-000000';

    // Ambil 6 digit terakhir dengan proteksi panjang karakter string
    const ekor = nik.length >= 6 ? nik.slice(-6) : nik.padStart(6, '0');
    return `02-FA/RSA/2026-${ekor}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col justify-between print:bg-white print:p-0">
      
      {/* Header / Navbar Kecil - SEMBUNYI SAAT CETAK */}
      <header className="bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm print:hidden">
        <Link href="/" className="inline-flex items-center gap-1 text-xs font-bold text-slate-600 hover:text-emerald-600 transition">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-emerald-600" />
          <span className="font-bold text-xs tracking-wider text-slate-900 uppercase">E-Rekrutmen RS Arun</span>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8 print:p-0 print:block">
        <div className="max-w-xl w-full space-y-6 print:max-w-none print:w-full print:space-y-0">
          
          {/* Box Form Pencarian - SEMBUNYI SAAT CETAK */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-5 print:hidden">
            <div className="text-center space-y-1">
              <h1 className="text-xl font-black text-slate-950 tracking-tight uppercase">Cek Hasil Seleksi</h1>
              <p className="text-xs text-slate-400">Masukkan 16 Digit Nomor Induk Kependudukan (KTP) Anda</p>
            </div>

            <form onSubmit={handleCekStatus} className="space-y-3">
              <div className="relative">
                <input 
                    type="text" 
                    maxLength={16}
                    required
                    placeholder="Contoh: 1101xxxxxxxxxxxx"
                    value={nikInput}
                    onChange={(e) => setNikInput(e.target.value.replace(/\D/g, ''))} 
                    className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-semibold tracking-wider focus:outline-none focus:border-emerald-500 text-slate-900 transition shadow-inner"
                    />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition disabled:bg-slate-300"
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                </button>
              </div>
            </form>

            {errorMsg && (
              <div className="bg-rose-50 text-rose-600 p-4 rounded-2xl flex items-center gap-2.5 text-xs border border-rose-100 animate-in fade-in duration-200">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}
          </div>

          {/* Box Hasil Seleksi Dinamis */}
          {hasil && (
            <div className="space-y-6 print:space-y-0 animate-in slide-in-from-bottom-4 duration-300">
              
              {/* KONDISI TAHAP 1: LOLOS ADMINISTRASI */}
              {hasil.status_seleksi === 'STAGE_1_LOLOS' && (
                <>
                  {/* Komponen Tampilan Web Anda yang Lama - SEMBUNYI SAAT CETAK */}
                  <div className="bg-white border-2 border-emerald-500 rounded-3xl shadow-md overflow-hidden print:hidden">
                    <div className="bg-emerald-600 p-4 text-white flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 shrink-0" />
                      <div>
                        <p className="text-[10px] text-emerald-100 font-bold uppercase tracking-wider">Hasil Seleksi Administrasi</p>
                        <h3 className="font-extrabold text-sm sm:text-base uppercase leading-none mt-0.5">Selamat, Anda Lulus!</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-slate-400 font-medium">Nama Pelamar:</p>
                        <p className="font-bold text-slate-900 text-sm">{hasil.nama_lengkap}</p>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Berkas pendaftaran Anda telah <b>Memenuhi Syarat</b>. Anda diwajibkan untuk mengikuti tahapan <b>Ujian Tulis</b> yang akan diselenggarakan secara luring pada:
                      </p>
                      <div className="space-y-2.5 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50 text-xs text-slate-700">
                        <div className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><b>Hari/Tanggal:</b> Jumat, 19 Juni 2026<br /><span className="text-[11px] text-slate-400">(Pukul 09:00 WIB s.d Selesai)</span></span>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span><b>Lokasi:</b> Universitas Malikussaleh (UNIMAL), Gedung Informatika:
Jalan Batam Kampus Bukit Indah, Muara Satu, Kota Lhokseumawe, Aceh.</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-amber-600 font-medium bg-amber-50 p-2.5 rounded-xl border border-amber-100">
                        *Catatan: Harap membawa KTP asli dan berpakaian kemeja putih rapi saat menghadiri ujian.
                      </p>

                      {/* Tombol Cetak - Diletakkan di dalam card respon web agar rapi */}
                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={handlePrint}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-2xl text-xs transition active:scale-95 shadow-sm"
                        >
                          <Printer className="w-4 h-4" /> Unduh Kartu Ujian (A4)
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* AREA STRUKTUR KARTU CETAKAN - TERSEMBUNYI DI WEB, MUNCUL UTAL KETIKA DI-PRINT */}
                  <div className="hidden print:flex bg-white w-[210mm] min-h-[297mm] mx-auto flex-col justify-between p-0 text-slate-900">
                    
                    {/* BAGIAN 1: KARTU PESERTA (ATAS) */}
                    <div className="border-2 border-slate-900 p-6 rounded-2xl relative flex flex-col justify-between min-h-[135mm]">
                      {/* Logo Transparan Background (Watermark) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        <img src="/logo-rsarun.svg" alt="watermark" className="w-72 h-72 object-contain" />
                      </div>

                      {/* Header Kartu */}
                      <div className="flex items-center gap-4 border-b-2 border-slate-900 pb-3">
                        <img src="/logo-rsarun.svg" alt="Logo RS Arun" className="h-12 w-auto object-contain" />
                        <div>
                          <h4 className="font-black text-xs tracking-wider uppercase">PANITIA SELEKSI REKRUTMEN PEGAWAI</h4>
                          <h3 className="font-black text-sm text-emerald-700 uppercase leading-none mt-0.5">RS ARUN LHOKSEUMAWE</h3>
                          <p className="text-[10px] text-slate-500 font-bold tracking-tight mt-1 uppercase">KARTU TANDA PESERTA UJIAN TULIS (LEMBAR PESERTA)</p>
                        </div>
                      </div>

                      {/* Baris Identitas & QR */}
                      <div className="grid grid-cols-3 gap-4 my-4 items-center">
                        <div className="col-span-2 space-y-2 text-xs">
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">No. Ujian</span>
                            <span className="col-span-2 font-black text-sm text-slate-900 tracking-wide">: {getNomorPeserta(hasil?.nik || nikInput)}</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">NIK</span>
                            <span className="col-span-2 font-bold">: {hasil?.nik || nikInput}</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">Nama Lengkap</span>
                            <span className="col-span-2 font-black uppercase text-slate-900">: {hasil?.nama_lengkap}</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">Formasi Jabatan</span>
                            <span className="col-span-2 font-bold text-emerald-700">: Staf Keuangan</span>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="border-2 border-slate-900 p-1.5 bg-white rounded-lg">
                            <QRCodeSVG value={`KARTU-PESERTA|${hasil?.nik || nikInput}|${getNomorPeserta(hasil?.nik || nikInput)}`} size={85} />
                          </div>
                        </div>
                      </div>

                      {/* Detail Pelaksanaan */}
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                        <div><b>Hari / Tanggal:</b> Jumat, 19 Juni 2026</div>
                        <div><b>Waktu / Pukul:</b> 09:00 WIB s.d Selesai</div>
                        <div><b>Lokasi Ujian:</b> Universitas Malikussaleh (UNIMAL), Gedung Informatika: Jalan Batam Kampus Bukit Indah, Muara Satu, Kota Lhokseumawe, Aceh.</div>
                      </div>

                      {/* Instruksi Tata Tertib */}
                      <div className="mt-4 pt-2 border-t border-slate-200 text-[10px] text-slate-600 leading-normal">
                        <p className="font-bold text-slate-900 mb-1 uppercase text-[10px]">Tata Tertib Peserta Ujian Tulis:</p>
                        <ol className="list-decimal pl-4 space-y-0.5">
                          <li>Wajib hadir di lokasi ujian paling lambat 30 menit sebelum jadwal dimulai.</li>
                          <li>Wajib membawa <b>KTP Asli</b> dan Lembar Kartu Ujian ini secara utuh (tidak dipotong mandiri).</li>
                          <li>Berpakaian Rapi, Sopan, dan bersepatu.</li>
                          <li>Dilarang keras membawa alat bantu hitung (kalkulator), buku catatan, maupun benda tajam.</li>
                        </ol>
                      </div>
                    </div>

                    {/* GARIS PEMBATAS POTONG TENGAH A4 */}
                    <div className="my-4 border-b-2 border-dashed border-slate-400 relative text-center">
                      <div className="absolute left-6 -top-2.5 bg-white px-2 text-slate-400 text-[10px] font-bold flex items-center gap-1">
                        <Scissors className="w-3 h-3" /> POTONG DI SINI SAAT REGISTRASI MEJA PANITIA
                      </div>
                    </div>

                    {/* BAGIAN 2: LEMBAR PANITIA (BAWAH) */}
                    <div className="border-2 border-slate-900 p-6 rounded-2xl relative flex flex-col justify-between min-h-[115mm]">
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                        <img src="/logo-rsarun.svg" alt="watermark" className="w-72 h-72 object-contain" />
                      </div>

                      {/* Header Lembar Panitia */}
                      <div className="flex items-center gap-4 border-b-2 border-slate-900 pb-3">
                        <img src="/logo-rsarun.svg" alt="Logo RS Arun" className="h-10 w-auto object-contain" />
                        <div>
                          <h4 className="font-black text-[11px] tracking-wider uppercase">PANITIA SELEKSI REKRUTMEN PEGAWAI</h4>
                          <h3 className="font-bold text-xs text-slate-800 uppercase leading-none mt-0.5">RS ARUN LHOKSEUMAWE</h3>
                          <p className="text-[9px] text-rose-700 font-bold tracking-tight mt-1 uppercase bg-rose-50 px-2 py-0.5 rounded border border-rose-100 inline-block">LEMBAR REKONSILIASI / MEJA ABSENSI PANITIA</p>
                        </div>
                      </div>

                      {/* Baris Identitas & QR */}
                      <div className="grid grid-cols-3 gap-4 my-4 items-center">
                        <div className="col-span-2 space-y-2 text-xs">
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">No. Ujian</span>
                            <span className="col-span-2 font-black text-slate-900">: {getNomorPeserta(hasil?.nik || nikInput)}</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">NIK</span>
                            <span className="col-span-2 font-semibold">: {hasil?.nik || nikInput}</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-bold uppercase text-slate-900">Nama Lengkap</span>
                            <span className="col-span-2 font-bold uppercase text-slate-900">: {hasil?.nama_lengkap}</span>
                          </div>
                          <div className="grid grid-cols-3">
                            <span className="text-slate-500 font-medium">Jabatan</span>
                            <span className="col-span-2 font-semibold text-slate-700">Staf Keuangan</span>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="border-2 border-slate-900 p-1.5 bg-white rounded-lg">
                            <QRCodeSVG value={`PANITIA-ABSEN|${hasil?.nik || nikInput}`} size={75} />
                          </div>
                        </div>
                      </div>

                      {/* Kotak Validasi Tanda Tangan Fisik */}
                      <div className="grid grid-cols-2 gap-8 mt-4 pt-6 border-t border-slate-200 text-xs text-center">
                        <div className="space-y-14">
                          <p className="text-slate-500 font-medium text-[10px]">Tanda Tangan Pelamar<br /><span className="text-[9px] text-slate-400">(Diteken di depan panitia registrasi)</span></p>
                          <div className="w-36 border-b border-slate-900 mx-auto"></div>
                        </div>
                        <div className="space-y-14">
                          <p className="text-slate-500 font-medium text-[10px]">Pengawas Meja Registrasi<br /><span className="text-[9px] text-slate-400">(Nama Lengkap & Paraf)</span></p>
                          <div className="w-36 border-b border-slate-900 mx-auto"></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              )}

              {/* KONDISI TAHAP 1: GUGUR ADMINISTRASI */}
              {hasil.status_seleksi === 'STAGE_1_GUGUR' && (
                <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden print:hidden">
                  <div className="bg-slate-900 p-4 text-white flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hasil Seleksi Administrasi</p>
                      <h3 className="font-extrabold text-sm sm:text-base uppercase leading-none mt-0.5">Pendaftaran Belum Lulus</h3>
                    </div>
                  </div>
                  <div className="p-6 text-center space-y-3">
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                      Terima kasih atas partisipasi Saudara/i <b>{hasil.nama_lengkap}</b>. Setelah dilakukan verifikasi berkas, dokumen Anda dinyatakan belum memenuhi kualifikasi formasi Staf Keuangan RS Arun Lhokseumawe pada gelombang seleksi kali ini.
                    </p>
                    <p className="text-[11px] text-slate-400 italic">Tetap semangat dan sukses untuk karir Anda di kesempatan lain.</p>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </main>

      {/* Footer - SEMBUNYI SAAT CETAK */}
      <footer className="bg-slate-950 text-slate-500 py-4 px-4 text-center text-[10px] font-medium border-t border-slate-900 print:hidden">
        &copy; 2026 Rumah Sakit Arun Lhokseumawe. Portal Kelulusan Terintegrasi.
      </footer>

      {/* INJEKSI STYLE CSS KHUSUS HALAMAN PRINT */}
      <style jsx global>{`
        @media print {
          body, html {
            background: #fff !important;
            color: #000 !important;
            width: 210mm;
            height: 297mm;
            margin: 0 !important;
            padding: 0 !important;
          }
          @page {
            size: A4 portrait;
            margin: 0mm !important;
          }
          header, footer, form, button, .print\\:hidden {
            display: none !important;
          }
          main {
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
          }
        }
      `}</style>

    </div>
  );
}