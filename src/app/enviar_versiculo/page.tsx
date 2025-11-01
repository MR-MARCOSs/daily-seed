'use client';
import { useState } from 'react';
import { submitVerse } from '@/src/services/verseService';
import { Card } from '@/src/components/ui/card';

export default function EnviarVersiculoPage() {
  const [formData, setFormData] = useState({
    text: '',
    reference: '',
    lesson: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await submitVerse(formData);
      setSuccess(true);
      setFormData({ text: '', reference: '', lesson: '' });
    } catch (err) {
      setError('Erro ao enviar versículo. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main>
        <Card className="text-center p-8">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-600 mb-4">Versículo Enviado!</h2>
          <p className="text-gray-600 mb-6">Seu versículo foi enviado para aprovação. Obrigado por contribuir!</p>
          <div className="space-y-3">
            <button
              onClick={() => setSuccess(false)}
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Enviar Outro Versículo
            </button>
            <a
              href="/"
              className="block w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-center"
            >
              Voltar ao Início
            </a>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main>
      <Card>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">✍️ Enviar Versículo</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Versículo *
              </label>
              <textarea
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={4}
                placeholder="Digite o texto do versículo..."
                required
                minLength={10}
                maxLength={500}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.text.length}/500 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Referência *
              </label>
              <input
                type="text"
                value={formData.reference}
                onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: João 3:16"
                required
                minLength={3}
                maxLength={40}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.reference.length}/40 caracteres
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lição/Reflexão *
              </label>
              <textarea
                value={formData.lesson}
                onChange={(e) => setFormData({ ...formData, lesson: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={6}
                placeholder="Compartilhe sua reflexão sobre este versículo..."
                required
                minLength={20}
                maxLength={1500}
              />
              <div className="text-right text-sm text-gray-500 mt-1">
                {formData.lesson.length}/1500 caracteres
              </div>
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? 'Enviando...' : 'Enviar Versículo'}
              </button>
              <a
                href="/"
                className="flex-1 px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-center"
              >
                Cancelar
              </a>
            </div>
          </form>
        </div>
      </Card>
    </main>
  );
}