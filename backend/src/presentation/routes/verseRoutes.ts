import { Router } from 'express';
import { VerseController } from '@/presentation/controllers/VerseController';
import { GetRandomVerseUseCase } from '@/application/usecases/GetRandomVerseUseCase';
import { CreateVerseUseCase } from '@/application/usecases/CreateVerseUseCase';
import { PostgresVerseRepository } from '@/infrastructure/repositories/PostgresVerseRepository';

const router = Router();

// Dependency injection
const verseRepository = new PostgresVerseRepository();
const getRandomVerseUseCase = new GetRandomVerseUseCase(verseRepository);
const createVerseUseCase = new CreateVerseUseCase(verseRepository);
const verseController = new VerseController(getRandomVerseUseCase, createVerseUseCase);

router.get('/random', (req, res) => verseController.getRandomVerse(req, res));
router.post('/', (req, res) => verseController.createVerse(req, res));

export { router as verseRoutes };