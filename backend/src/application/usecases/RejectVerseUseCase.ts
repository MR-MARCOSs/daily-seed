import { IVerseRepository } from '@/domain/repositories/IVerseRepository';

export class RejectVerseUseCase {
  constructor(private verseRepository: IVerseRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.verseRepository.delete(id);
  }
}