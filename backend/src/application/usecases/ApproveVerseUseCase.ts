import { IVerseRepository } from '@/domain/repositories/IVerseRepository';
import { Verse } from '@/domain/entities/Verse';

export class ApproveVerseUseCase {
  constructor(private verseRepository: IVerseRepository) {}

  async execute(id: string): Promise<Verse | null> {
    return await this.verseRepository.approve(id);
  }
}