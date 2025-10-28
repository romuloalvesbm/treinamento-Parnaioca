import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import userRepository from '../module/user/user.repository';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    res.status(400).json({
      error: 'É necessário ter um token para esta requisição',
    });
    return
  }

  try {
    const userId = jwt.verify(req.headers.authorization, process.env.JWT_SECRET || '')

    if (!userId) {
      res.status(401).json({
        error: 'Usuário não tem permissão',
      });
      return
    }

    const user = await userRepository.getById(userId as string)

    if (!user) {
      res.status(401).json({
        error: 'Usuário não tem permissão',
      });
      return
    }

    res.locals.user = user

    // TODO verificar algo sobre a regra de negócio
    next()
  } catch (error: any) {
    res.status(400).json({
      error: error.message,
    });
    return
  }
}