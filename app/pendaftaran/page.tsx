'use client';

import Link from 'next/link';
import { AlertCircle, Building2 } from 'lucide-react';

export default function PendaftaranDitutup() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 text-slate-800 font-sans">
      <div className="bg-white p-8 rounded-3xl shadow-sm max-w-md w-full text-center border border-slate-200/60 flex flex-col items-center">
        
        {/* Logo RS */}
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl mb-4 flex items-center justify-center shadow-inner">
          <img 
            src="/logo-rsarun.svg" 
            alt="Logo RS Arun" 
            className="h-12 w-auto object-contain" 
            onError={(e) => {
              // Fallback jika logo gambar belum siap
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        {/* Ikon Peringatan */}
        <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4 border border-rose-100">
          <AlertCircle className="w-6 h-6" />
        </div>

        <h2 className="text-xl font-bold text-slate-950 uppercase tracking-wide">Pendaftaran Resmi Ditutup</h2>
        
        <p className="text-slate-500 text-sm mt-3 leading-relaxed">
          Mohon maaf, batas pendaftaran rekrutmen formasi <b>Staf Keuangan</b> Rumah Sakit Arun Lhokseumawe telah berakhir. 
        </p>
        
        <p className="text-slate-400 text-[11px] mt-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 w-full">
          Terima kasih atas antusiasme dan partisipasi seluruh calon pelamar.
        </p>

        <Link 
          href="/" 
          className="mt-6 w-full bg-slate-950 text-white text-xs font-semibold py-3 px-4 rounded-xl hover:bg-slate-800 transition shadow-sm text-center"
        >
          Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  );
}