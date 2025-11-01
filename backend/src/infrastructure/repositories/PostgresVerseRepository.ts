import { IVerseRepository } from '@/domain/repositories/IVerseRepository';
import { Verse, CreateVerseData } from '@/domain/entities/Verse';
import { db } from '@/infrastructure/database/connection';
import { verses } from '@/infrastructure/database/schema';
import { eq } from 'drizzle-orm';

export class PostgresVerseRepository implements IVerseRepository {
  async findApproved(): Promise<Verse[]> {
    return await db.select().from(verses).where(eq(verses.isApproved, true));
  }

  async findById(id: string): Promise<Verse | null> {
    const result = await db.select().from(verses).where(eq(verses.id, id));
    return result[0] || null;
  }

  async create(data: CreateVerseData): Promise<Verse> {
    const result = await db.insert(verses).values(data).returning();
    if (!result[0]) throw new Error('Falha ao criar versículo');
    return result[0];
  }

  async approve(id: string): Promise<Verse | null> {
    const result = await db
      .update(verses)
      .set({ isApproved: true, updatedAt: new Date() })
      .where(eq(verses.id, id))
      .returning();
    return result[0] || null;
  }

  async findPending(): Promise<Verse[]> {
    return await db.select().from(verses).where(eq(verses.isApproved, false));
  }

  async delete(id: string): Promise<boolean> {
    const result = await db.delete(verses).where(eq(verses.id, id));
    return (result.rowCount || 0) > 0;
  }
}