import { Request, Response } from 'express'
import { PurchaseService } from '../services/purchase.service'
import { HttpResponse } from '../../shared/response/http.respose'
import { UpdateResult, DeleteResult } from 'typeorm'

export class PurchaseController {
  constructor (private readonly purchaseService: PurchaseService = new PurchaseService(), private readonly httpResponse: HttpResponse = new HttpResponse()) {}
  async getPurchases (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.purchaseService.findAllPurchases()
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Data purchases cannot found data')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async getPurchaseById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.purchaseService.findPurchaseById(id)
      if (data == null) {
        return this.httpResponse.NotFound(res, 'Data purchase cannot found')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async createPurchase (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.purchaseService.createPurchase(req.body)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async updatePurchase (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: UpdateResult = await this.purchaseService.updatePurchase(id, req.body)
      const dataRequest = await this.purchaseService.findPurchaseById(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'Purchase cannot be upadated')
      }
      return this.httpResponse.Ok(res, dataRequest)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async deletePurchase (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: DeleteResult = await this.purchaseService.deletePurchase(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'Purchase cannot be deleted')
      }
      return this.httpResponse.Ok(res, `Delete Purchase with ID: ${id}`)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }
}
