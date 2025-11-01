import { Verse, CreateVerseData } from '@/domain/entities/Verse';

export interface IVerseRepository {
  findApproved(): Promise<Verse[]>;
  findById(id: string): Promise<Verse | null>;
  create(data: CreateVerseData): Promise<Verse>;
  approve(id: string): Promise<Verse | null>;
  findPending(): Promise<Verse[]>;
  delete(id: string): Promise<boolean>;
}