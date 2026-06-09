'use client';

import { useState, FormEvent } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg('Email atau password salah, khusus akses internal Admin.');
      setLoading(false);
    } else {
      // Jika berhasil login, lempar ke halaman dashboard admin
      router.push('/admin');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 text-slate-800">
      <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md w-full border border-slate-200/60">
        <div className="text-center mb-6">
          <div className="bg-emerald-50 text-emerald-600 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 border border-emerald-100">
            <Lock className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-slate-950">Login Admin E-Recruitment</h2>
          <p className="text-slate-400 text-xs mt-1">RS Arun Lhokseumawe</p>
        </div>

        {errorMsg && (
          <div className="bg-rose-50 text-rose-600 p-3 rounded-xl flex items-start gap-2 text-xs border border-rose-100 mb-4">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Email Admin</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rsarun.com"
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition duration-150"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 transition duration-150"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-150 flex items-center justify-center gap-2 shadow-sm text-sm mt-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Memverifikasi...</span>
              </>
            ) : (
              <span>Masuk Ke Dashboard</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}