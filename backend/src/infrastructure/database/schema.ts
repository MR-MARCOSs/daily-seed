import { pgTable, uuid, text, boolean, timestamp } from 'drizzle-orm/pg-core';

export const verses = pgTable('verses', {
  id: uuid('id').primaryKey().defaultRandom(),
  text: text('text').notNull(),
  reference: text('reference').notNull(),
  lesson: text('lesson').notNull(),
  isApproved: boolean('is_approved').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});