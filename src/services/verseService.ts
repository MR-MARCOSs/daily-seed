import { Verse } from '@/src/types/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export const getApprovedVerse = async (): Promise<Verse> => {
  const response = await fetch(`${API_BASE_URL}/verses/random`);
  if (!response.ok) {
    throw new Error('Erro ao buscar versículo');
  }
  return response.json();
};

export const submitVerse = async (data: Omit<Verse, 'id' | 'isApproved'>): Promise<Verse> => {
  const response = await fetch(`${API_BASE_URL}/verses`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error('Erro ao enviar versículo');
  }
  
  return response.json();
};