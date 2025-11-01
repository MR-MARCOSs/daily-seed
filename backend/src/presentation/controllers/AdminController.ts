import { Request, Response } from 'express';
import { GetPendingVersesUseCase } from '@/application/usecases/GetPendingVersesUseCase';
import { ApproveVerseUseCase } from '@/application/usecases/ApproveVerseUseCase';
import { RejectVerseUseCase } from '@/application/usecases/RejectVerseUseCase';

export class AdminController {
  constructor(
    private getPendingVersesUseCase: GetPendingVersesUseCase,
    private approveVerseUseCase: ApproveVerseUseCase,
    private rejectVerseUseCase: RejectVerseUseCase
  ) {}

  async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      res.json({ success: true, token: 'admin-token' });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  }

  async getPendingVerses(req: Request, res: Response): Promise<void> {
    try {
      const verses = await this.getPendingVersesUseCase.execute();
      res.json(verses);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async approveVerse(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const verse = await this.approveVerseUseCase.execute(id);
      
      if (!verse) {
        res.status(404).json({ error: 'Versículo não encontrado' });
        return;
      }
      
      res.json(verse);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async rejectVerse(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleted = await this.rejectVerseUseCase.execute(id);
      
      if (!deleted) {
        res.status(404).json({ error: 'Versículo não encontrado' });
        return;
      }
      
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}