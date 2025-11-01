import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from './connection';
import dotenv from 'dotenv';

dotenv.config();

async function main() {
  console.log('🔄 Executando migrações...');
  await migrate(db, { migrationsFolder: './drizzle' });
  console.log('✅ Migrações concluídas!');
  process.exit(0);
}

main().catch((err) => {
  console.error('❌ Erro nas migrações:', err);
  process.exit(1);
});