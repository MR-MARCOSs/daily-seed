import { IVerseRepository } from '@/domain/repositories/IVerseRepository';
import { Verse, CreateVerseData } from '@/domain/entities/Verse';
import { v4 as uuidv4 } from 'uuid';

export class InMemoryVerseRepository implements IVerseRepository {
  private verses: Verse[] = [
    {
      id: '1',
      text: 'Tu contas as minhas aflições; põe as minhas lágrimas no teu odre; não estão elas no teu livro?',
      reference: 'Salmos 56:8',
      lesson: 'Quantas lágrimas caem em segredo, absorvidas pelo travesseiro ou pelo chão da solidão? Este versículo nos apresenta uma imagem divina profundamente comovente: Deus não apenas vê, mas coleciona cada lágrima.',
      isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '2',
      text: 'Entrega o teu caminho ao Senhor; confia nele, e ele o fará.',
      reference: 'Salmos 37:5',
      lesson: 'Muitas vezes tentamos resolver tudo sozinhos, mas este versículo nos ensina sobre a importância de confiar em Deus.',
      isApproved: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  async findApproved(): Promise<Verse[]> {
    return this.verses.filter(v => v.isApproved);
  }

  async findById(id: string): Promise<Verse | null> {
    return this.verses.find(v => v.id === id) || null;
  }

  async create(data: CreateVerseData): Promise<Verse> {
    const verse: Verse = {
      id: uuidv4(),
      ...data,
      isApproved: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.verses.push(verse);
    return verse;
  }

  async approve(id: string): Promise<Verse | null> {
    const verse = this.verses.find(v => v.id === id);
    if (!verse) return null;
    
    verse.isApproved = true;
    verse.updatedAt = new Date();
    return verse;
  }

  async findPending(): Promise<Verse[]> {
    return this.verses.filter(v => !v.isApproved);
  }

  async delete(id: string): Promise<boolean> {
    const index = this.verses.findIndex(v => v.id === id);
    if (index === -1) return false;
    
    this.verses.splice(index, 1);
    return true;
  }
}