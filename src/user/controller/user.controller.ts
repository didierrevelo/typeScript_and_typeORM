import { Request, Response } from 'express'
import { UserServices } from '../services/user.service'
import { HttpResponse } from '../../shared/response/http.respose'
import { UpdateResult, DeleteResult } from 'typeorm'

export class UserController {
  constructor (private readonly userServices: UserServices = new UserServices(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}
  async getUsers (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.userServices.findAllUser()
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Data users cannot found data')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async getUsersById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.userServices.findUserById(id)
      if (data == null) {
        return this.httpResponse.NotFound(res, 'Data user cannot found')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async createUser (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.userServices.createUser(req.body)
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async updateUser (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: UpdateResult = await this.userServices.updateUser(id, req.body)
      const dataRequest = await this.userServices.findUserById(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'User cannot be upadated')
      }
      return this.httpResponse.Ok(res, dataRequest)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async deleteUser (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: DeleteResult = await this.userServices.deleteUser(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'User cannot be deleted')
      }
      return this.httpResponse.Ok(res, `Delete User with ID: ${id}`)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }
}
