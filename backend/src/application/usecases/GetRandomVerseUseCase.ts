import { IVerseRepository } from '@/domain/repositories/IVerseRepository';
import { Verse } from '@/domain/entities/Verse';

export class GetRandomVerseUseCase {
  constructor(private verseRepository: IVerseRepository) {}

  async execute(): Promise<Verse | null> {
    const verses = await this.verseRepository.findApproved();
    if (verses.length === 0) return null;
    
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  }
}