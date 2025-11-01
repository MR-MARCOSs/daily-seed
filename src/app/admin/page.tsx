'use client';
import { useState, useEffect } from 'react';
import { Card } from '@/src/components/ui/card';

interface Verse {
  id: string;
  text: string;
  reference: string;
  lesson: string;
  isApproved: boolean;
  createdAt: string;
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [pendingVerses, setPendingVerses] = useState<Verse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        fetchPendingVerses();
      } else {
        setError('Credenciais inválidas');
      }
    } catch (err) {
      setError('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const fetchPendingVerses = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/verses/pending');
      const verses = await response.json();
      setPendingVerses(verses);
    } catch (err) {
      setError('Erro ao carregar versículos');
    }
  };

  const approveVerse = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/api/admin/verses/${id}/approve`, {
        method: 'PATCH',
      });
      fetchPendingVerses();
    } catch (err) {
      setError('Erro ao aprovar versículo');
    }
  };

  const rejectVerse = async (id: string) => {
    try {
      await fetch(`http://localhost:3001/api/admin/verses/${id}/reject`, {
        method: 'DELETE',
      });
      fetchPendingVerses();
    } catch (err) {
      setError('Erro ao rejeitar versículo');
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-5">
        <div className="max-w-md mx-auto pt-20">
          <Card>
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">🔐 Admin Login</h1>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Usuário
                  </label>
                  <input
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Senha
                  </label>
                  <input
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Entrando...' : 'Entrar'}
                </button>
              </form>
            </div>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-5">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-gray-800 text-3xl font-bold mb-2">⚙️ Painel Admin</h1>
          <p className="text-gray-500">Versículos aguardando aprovação</p>
        </header>

        <div className="space-y-4">
          {pendingVerses.length === 0 ? (
            <Card className="text-center p-8">
              <p className="text-gray-500">Nenhum versículo aguardando aprovação</p>
            </Card>
          ) : (
            pendingVerses.map((verse) => (
              <Card key={verse.id}>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Versículo:</h3>
                    <p className="text-gray-700 mb-2">"{verse.text}"</p>
                    <p className="text-sm text-gray-500 italic">- {verse.reference}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-bold text-lg mb-2">Lição:</h3>
                    <p className="text-gray-700">{verse.lesson}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Enviado em: {new Date(verse.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => approveVerse(verse.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        ✅ Aprovar
                      </button>
                      <button
                        onClick={() => rejectVerse(verse.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        ❌ Rejeitar
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
}