'use client';

import Link from 'next/link';
import { Briefcase, CheckCircle, Users, ShieldCheck, ArrowRight, Building2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">

<header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm">
  <div className="flex items-center gap-3">
    {/* OPSI 1: MENGGUNAKAN LOGO GAMBAR */}
    <img 
      src="/logo-rsarun.svg" 
      alt="Logo RS Arun" 
      className="h-10 sm:h-12 w-auto object-contain" 
    />
    
    {/* Pemisah Garis Halus */}
    <div className="w-[1px] h-8 bg-slate-200 mx-1 hidden sm:block"></div>

    <div>
      <span className="font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 block uppercase leading-none">RS ARUN</span>
      <span className="text-[10px] sm:text-[11px] text-emerald-600 block font-bold tracking-widest uppercase">LHOKSEUMAWE</span>
    </div>
  </div>

  {/* Menu Navigasi Tetap Sama */}
  <div className="hidden sm:flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-wide">
    <a href="#tentang" className="hover:text-emerald-600 transition">Tentang</a>
    <a href="#formasi" className="hover:text-emerald-600 transition">Formasi</a>
  </div>
</header>

      {/* Hero Section */}
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto px-4 pt-12 pb-16 sm:py-24 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border border-emerald-100/60 shadow-sm animate-pulse">
            <Briefcase className="w-3.5 h-3.5" /> Gelombang Pendaftaran Dibuka
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight max-w-3xl mx-auto">
            Bergabunglah Bersama Tim Profesional <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">RS Arun Lhokseumawe</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Kami mengundang talenta terbaik untuk berkontribusi meningkatkan mutu pelayanan kesehatan yang prima, Islami, dan profesional bagi masyarakat.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link 
              href="/pendaftaran" 
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-3.5 px-8 rounded-2xl text-sm transition hover:shadow-lg hover:shadow-emerald-600/20 active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              Isi Formulir Pendaftaran <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Keunggulan / Nilai Utama */}
        <section id="tentang" className="bg-white border-y border-slate-200/60 py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600"><Users className="w-5 h-5" /></div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Proses Transparan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Seluruh tahapan seleksi dilakukan secara terbuka, objektif, dan berasaskan keadilan bagi seluruh kandidat.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600"><ShieldCheck className="w-5 h-5" /></div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Sistem Terintegrasi</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Pemberkasan digital yang aman, memastikan data pribadi Anda tersimpan dengan proteksi penuh.</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600"><CheckCircle className="w-5 h-5" /></div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Karir Berkelanjutan</h3>
              <p className="text-xs text-slate-500 leading-relaxed">Kesempatan berkembang, pelatihan kompetensi medis/non-medis, serta jenjang karir yang terukur.</p>
            </div>
          </div>
        </section>

        {/* Formasi Aktif */}
        <section id="formasi" className="max-w-5xl mx-auto px-4 py-16 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 uppercase tracking-wide">Formasi Jabatan Tersedia</h2>
            <p className="text-xs text-slate-400">Pilih posisi aktif di bawah ini untuk memulai pengisian aplikasi</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-emerald-500/40 transition">
            <div className="space-y-1.5">
              <span className="bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">Non-Medis</span>
              <h4 className="font-bold text-slate-900 text-base">Staf Keuangan</h4>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">Kualifikasi: Minimal Strata Satu (S1) Akuntansi. Menguasai pelaporan keuangan, perpajakan, dan mahir mengoperasikan Aplikasi pengelolaan keuangan.</p>
            </div>
            <Link 
              href="/pendaftaran" 
              className="w-full sm:w-auto bg-slate-950 text-white font-semibold py-2.5 px-5 rounded-xl text-xs hover:bg-slate-800 transition text-center shadow-sm"
            >
              Lamar Posisi
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 px-4 border-t border-slate-900 text-center text-[11px] font-medium tracking-wide">
        &copy; {new Date().getFullYear()} Rumah Sakit Arun Lhokseumawe. All Rights Reserved. <br />
        <span className="text-slate-600 block mt-1">Managed by IT Support RS Arun</span>
      </footer>

    </div>
  );
}