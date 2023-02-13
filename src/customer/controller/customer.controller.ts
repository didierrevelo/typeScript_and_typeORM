import { Request, Response } from 'express'
import { CustomerService } from '../services/customer.services'
import { HttpResponse } from '../../shared/response/http.respose'
import { UpdateResult, DeleteResult } from 'typeorm'

export class CustomerController {
  constructor (private readonly customerService: CustomerService = new CustomerService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}
  async getCustomers (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.customerService.findAllCustomers()
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Data customers cannot found data')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async getCustomerById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.customerService.findCustomerById(id)
      if (data == null) {
        return this.httpResponse.NotFound(res, 'Data customer cannot found')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async createCustomer (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.customerService.createCustomer(req.body)
      res.status(200).json(data)
    } catch (e) {
      console.error(e)
    }
  }

  async updateCustomer (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: UpdateResult = await this.customerService.updateCustomer(id, req.body)
      const dataRequest = await this.customerService.findCustomerById(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'customer cannot be upadated')
      }
      return this.httpResponse.Ok(res, dataRequest)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async deleteCustomer (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: DeleteResult = await this.customerService.deleteCustomer(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'customer cannot be deleted')
      }
      return this.httpResponse.Ok(res, `Delete Customer with ID: ${id}`)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }
}
