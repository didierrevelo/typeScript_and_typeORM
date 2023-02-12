import { Request, Response } from 'express'
import { UserServices } from '../services/user.service'

export class UserController {
  constructor (private readonly userServices: UserServices = new UserServices()) {}
  async getUsers (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.userServices.findAllUser()
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async getUsersById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.userServices.findUserById(id)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async createUser (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.userServices.createUser(req.body)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async updateUser (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.userServices.updateUser(id, req.body)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteUser (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.userServices.deleteUser(id)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }
}
