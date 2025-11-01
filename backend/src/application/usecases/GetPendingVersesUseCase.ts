import { IVerseRepository } from '@/domain/repositories/IVerseRepository';
import { Verse } from '@/domain/entities/Verse';

export class GetPendingVersesUseCase {
  constructor(private verseRepository: IVerseRepository) {}

  async execute(): Promise<Verse[]> {
    return await this.verseRepository.findPending();
  }
}