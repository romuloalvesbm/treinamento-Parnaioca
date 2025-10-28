import { Request, Response, NextFunction } from 'express'
import { z, ZodType } from 'zod'

export const validateMiddleware = (schema: ZodType<any>) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const validated = z.parse(schema, req.body)
    res.locals.validated = validated

    next()
  } catch (error: any) {
    res.status(422).json({
      // errors: error.issues.map((item: any) => item.message)
      errors: error.issues.map((item: any) => {
        return {
          field: item.path[0],
          message: item.message,
          code: item.code
        }
      })
    })
  }
}