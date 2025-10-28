import { Router, Request, Response } from 'express'
import bedroomRepository from './bedroom.repository'
import { validateMiddleware } from '../../middleware/validate.middleware';
import { bedroomCreateSchema, bedroomUpdateSchema } from './bedroom.schema';

export const router = Router()

router.get('/', async (req: Request, res: Response) => {
  const result = await bedroomRepository.getAll()

  res.json({
    data: result,
  });
});

router.get('/:id', async (req: Request, res: Response) => {
  const result = await bedroomRepository.getById(req.params.id)

  res.json({
    data: result,
  });
});

router.post('/', validateMiddleware(bedroomCreateSchema), async (req: Request, res: Response) => {
  const result = await bedroomRepository.save(res.locals.validated)

  res.json({
    msg: 'Quarto criado com sucesso',
  });
});

router.put('/:id', validateMiddleware(bedroomUpdateSchema), async (req: Request, res: Response) => {
  const result = await bedroomRepository.update(req.params.id, res.locals.validated)

  if (result === null) {
    res.json({
      msg: 'Nenhum quarto atualizado',
    });
    return
  }

  res.json({
    msg: 'Quarto atualizado com sucesso',
  });
});

router.delete('/:id', async (req: Request, res: Response) => {
  const result = await bedroomRepository.destroy(req.params.id)
  if (result.deletedCount === 0) {
    res.json({
      msg: 'Nenhum quarto foi removido',
    });
    return
  }

  res.json({
    msg: 'Quarto removido com sucesso',
  });
});

export default router