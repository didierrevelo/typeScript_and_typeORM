import { Request, Response } from 'express'

export class UserController {
  getUsers (req: Request, res: Response): any {
    res.status(200).json({
      user: 'didier revelo'
    })
  }
}
