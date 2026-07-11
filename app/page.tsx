'use client';

import Link from 'next/link';
import { Briefcase, CheckCircle, Users, ShieldCheck, ArrowRight, Building2, UserCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col justify-between">

      {/* Header / Navbar */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-rsarun.svg" 
            alt="Logo RS Arun" 
            className="h-10 sm:h-12 w-auto object-contain" 
          />
          
          <div className="w-[1px] h-8 bg-slate-200 mx-1 hidden sm:block"></div>

          <div>
            <span className="font-extrabold text-sm sm:text-lg tracking-tight text-slate-900 block uppercase leading-none">RS ARUN</span>
            <span className="text-[10px] sm:text-[11px] text-emerald-600 block font-bold tracking-widest uppercase">LHOKSEUMAWE</span>
          </div>
        </div>

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
            <button
              type="button"
              disabled
              className="w-full sm:w-auto bg-slate-300 text-slate-600 font-bold py-3.5 px-8 rounded-2xl text-sm transition cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
            >
              Formulir Pendaftaran <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              disabled
              className="w-full sm:w-auto bg-slate-300 text-slate-600 font-bold py-3.5 px-8 rounded-2xl text-sm transition cursor-not-allowed disabled:shadow-none flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Cek Kelulusan
            </button>
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

        {/* Formasi Aktif - SELEKSI TERBUKA DIREKSI */}
        <section id="formasi" className="max-w-5xl mx-auto px-4 py-16 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 uppercase tracking-wide">Formasi Jabatan Tersedia</h2>
            <p className="text-xs text-slate-400">Pilih posisi aktif di bawah ini untuk melihat detail persyaratan dan tata cara pendaftaran</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CARD 1: DIREKTUR UTAMA PT. RS ARUN MEDICA */}
            <Link 
              href="/persyaratan/direktur-utama" 
              className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between gap-6 hover:border-emerald-500/60 hover:shadow-md transition group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Direksi PT (Holding)
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">Kuota: 1 Orang</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base group-hover:text-emerald-600 transition-colors">
                    Direktur Utama PT. Rumah Sakit Arun Medica
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Mewujudkan tata kelola perusahaan yang baik (Good Corporate Governance) serta meningkatkan kinerja dan daya saing perusahaan secara berkelanjutan.
                  </p>
                </div>
              </div>
              
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">Lihat Detail Persyaratan</span>
                <span className="w-8 h-8 bg-slate-950 text-white rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>

            {/* CARD 2: DIREKTUR RUMAH SAKIT ARUN LHOKSEUMAWE */}
            <Link 
              href="/persyaratan/direktur-rs" 
              className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex flex-col justify-between gap-6 hover:border-emerald-500/60 hover:shadow-md transition group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-teal-50 text-teal-700 border border-teal-100 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Direksi Rumah Sakit
                  </span>
                  <span className="text-[11px] font-bold text-slate-400">Kuota: 1 Orang</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base group-hover:text-emerald-600 transition-colors">
                    Direktur Rumah Sakit Arun Lhokseumawe
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Memimpin operasional pelayanan medis, manajemen rumah sakit, serta mutu pelayanan kesehatan prima dan profesional bagi masyarakat.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">Lihat Detail Persyaratan</span>
                <span className="w-8 h-8 bg-slate-950 text-white rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
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