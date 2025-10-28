import { Request, Response, NextFunction } from 'express'

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals.user.isAdmin) {
    res.status(403).json({
      error: 'Usuário precisa ser administrador para concluir esta requisição'
    })
    return
  }
  next()
}