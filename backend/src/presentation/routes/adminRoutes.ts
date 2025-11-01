import { Router } from 'express';
import { AdminController } from '@/presentation/controllers/AdminController';
import { GetPendingVersesUseCase } from '@/application/usecases/GetPendingVersesUseCase';
import { ApproveVerseUseCase } from '@/application/usecases/ApproveVerseUseCase';
import { RejectVerseUseCase } from '@/application/usecases/RejectVerseUseCase';
import { PostgresVerseRepository } from '@/infrastructure/repositories/PostgresVerseRepository';

const router = Router();

// Dependency injection
const verseRepository = new PostgresVerseRepository();
const getPendingVersesUseCase = new GetPendingVersesUseCase(verseRepository);
const approveVerseUseCase = new ApproveVerseUseCase(verseRepository);
const rejectVerseUseCase = new RejectVerseUseCase(verseRepository);
const adminController = new AdminController(getPendingVersesUseCase, approveVerseUseCase, rejectVerseUseCase);

router.post('/login', (req, res) => adminController.login(req, res));
router.get('/verses/pending', (req, res) => adminController.getPendingVerses(req, res));
router.patch('/verses/:id/approve', (req, res) => adminController.approveVerse(req, res));
router.delete('/verses/:id/reject', (req, res) => adminController.rejectVerse(req, res));

export { router as adminRoutes };