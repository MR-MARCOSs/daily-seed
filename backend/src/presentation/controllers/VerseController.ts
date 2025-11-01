import { Request, Response } from 'express';
import { GetRandomVerseUseCase } from '@/application/usecases/GetRandomVerseUseCase';
import { CreateVerseUseCase } from '@/application/usecases/CreateVerseUseCase';
import { CreateVerseSchema } from '@/application/dtos/VerseDto';

export class VerseController {
  constructor(
    private getRandomVerseUseCase: GetRandomVerseUseCase,
    private createVerseUseCase: CreateVerseUseCase
  ) {}

  async getRandomVerse(req: Request, res: Response): Promise<void> {
    try {
      const verse = await this.getRandomVerseUseCase.execute();
      if (!verse) {
        res.status(404).json({ error: 'Nenhum versículo encontrado' });
        return;
      }
      res.json(verse);
    } catch (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }

  async createVerse(req: Request, res: Response): Promise<void> {
    try {
      const validatedData = CreateVerseSchema.parse(req.body);
      const verse = await this.createVerseUseCase.execute(validatedData);
      res.status(201).json(verse);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        res.status(400).json({ error: 'Dados inválidos', details: error.errors });
        return;
      }
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}