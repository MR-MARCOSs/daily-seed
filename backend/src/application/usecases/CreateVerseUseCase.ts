import { IVerseRepository } from '@/domain/repositories/IVerseRepository';
import { CreateVerseData, Verse } from '@/domain/entities/Verse';

export class CreateVerseUseCase {
  constructor(private verseRepository: IVerseRepository) {}

  async execute(data: CreateVerseData): Promise<Verse> {
    return await this.verseRepository.create(data);
  }
}