'use client';

import Link from 'next/link';
import { 
  ArrowLeft, Building2, Briefcase, FileText, CheckCircle2, 
  MapPin, Calendar, AlertCircle, ShieldCheck, UserCheck, 
  FolderCheck, BookOpen, Clock, Layers, HelpCircle, Stethoscope 
} from 'lucide-react';

export default function PersyaratanDirekturRS() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">
      
      {/* Header / Navbar */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-teal-600 transition">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-teal-600" />
          <span className="font-bold text-xs tracking-wider text-slate-900 uppercase">E-Rekrutmen Direksi</span>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="flex-grow max-w-4xl w-full mx-auto px-4 py-8 sm:py-12 space-y-8">
        
        {/* Banner Judul Formasi */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
              Seleksi Terbuka Jabatan Direksi
            </span>
            <span className="text-xs font-bold text-slate-400">• Kuota: 1 (satu) Orang</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
            Direktur Rumah Sakit Arun Lhokseumawe
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            Pengumuman Persyaratan, Ketentuan Makalah, dan Jadwal Resmi Seleksi Terbuka Jabatan Direktur Rumah Sakit Arun Lhokseumawe.
          </p>
        </div>

        {/* Kotak Informasi Penyerahan Berkas Fisik */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-3xl p-6 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Alamat Penyerahan Berkas Pendaftaran (Manual)</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950/80 leading-relaxed">
            Seluruh dokumen persyaratan diantar secara langsung (fisik) ke alamat Sekretariat Panitia Seleksi berikut:
          </p>
          <div className="bg-white/80 p-4 rounded-2xl border border-amber-200/60 text-xs sm:text-sm font-semibold text-slate-800 space-y-1">
            <p className="text-amber-900 font-extrabold uppercase">Sekretariat / Bagian HRD Rumah Sakit Arun Lhokseumawe</p>
            <p className="text-slate-600 font-normal">
              Jl. Plaju, Kompleks Perumahan PT. PAG, Batuphat, Kota Lhokseumawe, Aceh.
            </p>
          </div>
        </div>

        {/* Persyaratan Umum & Khusus */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-900">
            <UserCheck className="w-5 h-5 text-teal-600 shrink-0" />
            <h2 className="font-extrabold text-base uppercase tracking-wide">Persyaratan Kualifikasi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Persyaratan Umum */}
            <div className="space-y-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-lg inline-block">
                1. Persyaratan Umum
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Warga Negara Indonesia.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Bertakwa kepada Tuhan Yang Maha Esa.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Sehat jasmani dan rohani.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Memiliki integritas, kepemimpinan, dan moral yang baik.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Tidak pernah dipidana berdasarkan putusan pengadilan yang telah berkekuatan hukum tetap.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Tidak sedang menjadi pengurus partai politik.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Bersedia menandatangani Pakta Integritas.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Memiliki kemampuan komunikasi, kepemimpinan, pengambilan keputusan, dan manajemen perubahan.</li>
              </ul>
            </div>

            {/* Persyaratan Khusus Direktur RS */}
            <div className="space-y-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-lg inline-block">
                2. Persyaratan Khusus Direktur RS
              </h3>
              <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Dokter Umum atau Dokter Gigi yang memiliki <b>STR Aktif</b>.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Memenuhi persyaratan Direktur RS sesuai perundang-undangan berlaku.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Diutamakan memiliki gelar MMRS, MARS, atau MKM khusus Rumah Sakit.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Pengalaman manajerial RS / Pelayanan Kesehatan minimal 3 (tiga) tahun.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Memahami tata kelola RS, mutu pelayanan, keselamatan pasien, akreditasi, & regulasi kesehatan.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Memimpin transformasi pelayanan kesehatan dan pengembangan rumah sakit.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Bersedia bekerja full time & tidak merangkap jabatan lain.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Bersedia berkedudukan & aktif bertugas setiap hari kerja di RS Arun Lhokseumawe.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Bersedia menandatangani Surat Pernyataan Komitmen Kehadiran dan Kinerja.</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" /> Komitmen kepemimpinan operasional langsung, mutu, keselamatan pasien, & target kinerja.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dokumen Persyaratan Pendaftaran */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-900">
            <FolderCheck className="w-5 h-5 text-teal-600 shrink-0" />
            <h2 className="font-extrabold text-base uppercase tracking-wide">Dokumen Kelengkapan Berkas</h2>
          </div>
          <p className="text-xs text-slate-500">Pelamar wajib menyampaikan berkas cetak fisik secara rapi dan tersusun:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Surat Lamaran
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Curriculum Vitae (CV)
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Fotokopi KTP & Kartu Keluarga (KK)
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Pasfoto Terbaru
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Fotokopi Ijazah & Transkrip Nilai (Legalisasi)
            </div>
            <div className="bg-teal-50/60 p-3 rounded-xl border border-teal-100 flex items-center gap-2 font-bold text-teal-900">
              <Stethoscope className="w-4 h-4 text-teal-600 shrink-0" /> Fotokopi STR Aktif (Dokter)
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Surat Pengalaman Kerja (Min. 3 Tahun RS)
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> SKCK Aktif (Kepolisian)
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Surat Keterangan Sehat & Bebas Narkoba
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Sertifikat Pelatihan Relevan
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2 col-span-1 sm:col-span-2">
              <FileText className="w-4 h-4 text-teal-600 shrink-0" /> Pakta Integritas & Dokumen Makalah Resmi
            </div>
          </div>
        </div>

        {/* Ketentuan Makalah */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-5">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-900">
            <BookOpen className="w-5 h-5 text-teal-600 shrink-0" />
            <h2 className="font-extrabold text-base uppercase tracking-wide">Ketentuan & Judul Makalah</h2>
          </div>

          <div className="bg-teal-50/70 border border-teal-100 p-4 rounded-2xl text-xs space-y-1">
            <span className="font-extrabold text-teal-900 uppercase">Materi Judul Makalah Resmi:</span>
            <p className="font-bold text-teal-800 text-sm italic leading-relaxed">
              "Strategi Transformasi Rumah Sakit Arun Medica Menuju Rumah Sakit Unggul, Berdaya Saing, Berkelanjutan, Berorientasi pada Keselamatan Pasien dan Pelayanan Prima Tahun 2026-2031."
            </p>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <p className="font-bold text-slate-900 uppercase">Ketentuan Format Penulisan:</p>
            <ul className="list-disc pl-5 space-y-1 leading-relaxed">
              <li>Makalah disusun secara mandiri dengan panjang <b>15–20 halaman</b> (tidak termasuk lampiran).</li>
              <li>Format dokumen: Kertas A4, Font Times New Roman ukuran 12, Spasi 1.5.</li>
              <li>Presentasi makalah di hadapan Panitia Seleksi dilaksanakan selama <b>paling lama 20 menit</b> dan dilanjutkan sesi tanya jawab.</li>
            </ul>

            <p className="font-bold text-slate-900 uppercase pt-2">Materi Makalah Sekurang-Kurangnya Memuat:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Analisis kondisi eksisting Rumah Sakit Arun Medica</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Identifikasi tantangan & peluang pengembangan</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Visi & misi kepemimpinan sebagai Direktur RS</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Peningkatan mutu pelayanan & keselamatan pasien</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Peningkatan kinerja operasional & keuangan</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Strategi pengembangan SDM Rumah Sakit</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Transformasi digital & inovasi pelayanan</div>
              <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">• Tata kelola klinis, manajemen risiko, & KPI 5 Tahun</div>
            </div>
          </div>
        </div>

        {/* Tahapan & Tabel Jadwal Seleksi */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/60 shadow-sm space-y-6">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-900">
            <Calendar className="w-5 h-5 text-teal-600 shrink-0" />
            <h2 className="font-extrabold text-base uppercase tracking-wide">Tahapan & Jadwal Seleksi</h2>
          </div>

          {/* 6 Tahapan Ringkas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-center font-bold">
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-slate-700">1. Seleksi Administrasi</div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-slate-700">2. Penilaian Makalah</div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-slate-700">3. Psikotes & Assessment</div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-slate-700">4. Uji Kompetensi & Presentasi</div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-slate-700">5. Wawancara Akhir</div>
            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-slate-700">6. Penetapan & Pengangkatan</div>
          </div>

          {/* Tabel Jadwal Rapi */}
          <div className="overflow-x-auto border border-slate-200/80 rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-bold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">No</th>
                  <th className="py-3 px-4">Tahapan Seleksi</th>
                  <th className="py-3 px-4 text-right">Tanggal Pelaksanaan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">1</td><td className="py-2.5 px-4">Pengumuman Seleksi</td><td className="py-2.5 px-4 text-right font-bold text-slate-900">13 Juli 2026</td></tr>
                <tr className="bg-teal-50/40 hover:bg-teal-50/80"><td className="py-2.5 px-4 text-center font-bold text-teal-800">2</td><td className="py-2.5 px-4 font-bold text-teal-900">Pendaftaran dan Penyampaian Berkas</td><td className="py-2.5 px-4 text-right font-black text-teal-700">13 – 17 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">3</td><td className="py-2.5 px-4">Seleksi Administrasi</td><td className="py-2.5 px-4 text-right">18 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">4</td><td className="py-2.5 px-4">Pengumuman Hasil Seleksi Administrasi</td><td className="py-2.5 px-4 text-right font-bold text-slate-900">19 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">5</td><td className="py-2.5 px-4">Penilaian Makalah</td><td className="py-2.5 px-4 text-right">20 – 22 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">6</td><td className="py-2.5 px-4">Psikotes dan Assessment Kompetensi</td><td className="py-2.5 px-4 text-right font-bold text-slate-900">23 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">7</td><td className="py-2.5 px-4">Presentasi Makalah dan Uji Kompetensi</td><td className="py-2.5 px-4 text-right font-bold text-slate-900">24 – 25 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">8</td><td className="py-2.5 px-4">Wawancara Akhir oleh Panitia Seleksi</td><td className="py-2.5 px-4 text-right font-bold text-slate-900">27 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">9</td><td className="py-2.5 px-4">Penetapan Tiga Calon Terbaik</td><td className="py-2.5 px-4 text-right">28 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">10</td><td className="py-2.5 px-4">Fit and Proper Test oleh Komisaris dan Pemegang Saham</td><td className="py-2.5 px-4 text-right">29 Juli 2026</td></tr>
                <tr className="hover:bg-slate-50/80"><td className="py-2.5 px-4 text-center">11</td><td className="py-2.5 px-4">Rapat Penetapan Calon Terpilih</td><td className="py-2.5 px-4 text-right">30 Juli 2026</td></tr>
                <tr className="bg-slate-900 text-white font-bold"><td className="py-2.5 px-4 text-center">12</td><td className="py-2.5 px-4">Pengumuman Hasil Akhir</td><td className="py-2.5 px-4 text-right text-teal-400">31 Juli 2026</td></tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-2xl border border-amber-200/70 bg-amber-50/70 p-4 text-xs text-slate-700 space-y-2">
            <p className="font-extrabold uppercase tracking-wide text-amber-900"><strong>Catatan:</strong></p>
            <ol className="list-decimal pl-5 space-y-1 leading-relaxed">
              <li>Jadwal dapat berubah sesuai kebutuhan Panitia Seleksi dan akan diumumkan melalui media resmi PT Rumah Sakit Arun Medica.</li>
              <li>Peserta yang tidak hadir pada setiap tahapan seleksi tanpa alasan yang sah dinyatakan mengundurkan diri.</li>
              <li>Seluruh tahapan seleksi dilaksanakan di PT. Rumah Sakit Arun Medica atau tempat lain yang ditetapkan oleh Panitia Seleksi.</li>
            </ol>
          </div>
        </div>

        {/* Ketentuan Lain-lain */}
        <div className="bg-slate-900 text-slate-300 p-6 sm:p-8 rounded-3xl space-y-3 text-xs leading-relaxed">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
            <span>Ketentuan Lain Panitia Seleksi</span>
          </div>
          <ol className="list-decimal pl-5 space-y-1 text-slate-400">
            <li>Seluruh proses seleksi tidak dipungut biaya apa pun (Gratis).</li>
            <li>Panitia tidak melayani korespondensi terkait hasil seleksi.</li>
            <li>Keputusan Panitia Seleksi bersifat final dan tidak dapat diganggu gugat.</li>
            <li>Dokumen yang disampaikan menjadi milik Panitia Seleksi dan tidak dikembalikan.</li>
            <li>Apabila di kemudian hari ditemukan data yang tidak benar, peserta dinyatakan gugur atau pengangkatannya dapat dibatalkan.</li>
          </ol>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 px-4 border-t border-slate-900 text-center text-[11px] font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Rumah Sakit Arun Lhokseumawe. All Rights Reserved. <br />
        <span className="text-slate-600 block mt-1">Managed by IT Support RS Arun</span>
      </footer>

    </div>
  );
}