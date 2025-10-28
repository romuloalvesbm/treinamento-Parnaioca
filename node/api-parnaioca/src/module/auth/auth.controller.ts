import { Router, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import userRepository from '../user/user.repository'
import { authMiddleware } from '../../middleware/auth.middleware'
import { validateMiddleware } from '../../middleware/validate.middleware'
import { userCreateSchema } from '../user/user.schema'

const router = Router()

router.post('/login', async (req: Request, res: Response) => {
  if (!req.body.email) {
    res.status(422).json({
      error: 'O campo e-mail é obrigatório'
    })
    return
  }

  if (!req.body.password) {
    res.status(422).json({
      error: 'O campo senha é obrigatório'
    })
    return
  }

  const user = await userRepository.getByEmail(req.body.email)
  if (!user) {
    res.status(404).json({
      error: 'Usuário não encontrado'
    })
    return
  }

  // teste123
  // $2b$10$45ujQ0K0BcqnHsg4Lxca..h1mvWWEDwIeES1Uy.ik1PdtlkQyicVO
  const isValid = bcrypt.compareSync(req.body.password, user.password)

  if (!isValid) {
    res.status(403).json({
      error: 'Usuário ou senha incorretos'
    })
    return
  }

  const token = jwt.sign(user._id.toString(), process.env.JWT_SECRET || '')

  res.json({
    token
  })
})

router.post('/register', validateMiddleware(userCreateSchema), async (req: Request, res: Response) => {
  const result = await userRepository.save({
    ...res.locals.validated,
    isAdmin: false
  })

  res.json({
    msg: 'Cliente criado com sucesso',
  });
})

router.get('/me', authMiddleware, (req: Request, res: Response) => {
  res.json({
    user: res.locals.user
  })
})

export default router