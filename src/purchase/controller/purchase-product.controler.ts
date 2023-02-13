import { Request, Response } from 'express'
import { PurchaseProductService } from '../services/purchase-product.service'
import { HttpResponse } from '../../shared/response/http.respose'
import { UpdateResult, DeleteResult } from 'typeorm'

export class PurchaseProductController {
  constructor (private readonly purchaseProductService: PurchaseProductService = new PurchaseProductService(), private readonly httpResponse: HttpResponse = new HttpResponse()) { }
  async getPurchasesProduct (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.purchaseProductService.findAllPurchasesProducts()
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Data purchases-product cannot found data')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async getPurchaseProductById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.purchaseProductService.findPurchaseProductById(id)
      if (data == null) {
        return this.httpResponse.NotFound(res, 'Data purchase-product cannot found')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async createPurchaseProduct (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.purchaseProductService.createPurchaseProduct(req.body)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async updatePurchaseProduct (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: UpdateResult = await this.purchaseProductService.updatePurchaseProduct(id, req.body)
      const dataRequest = await this.purchaseProductService.findPurchaseProductById(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'Purchase-product cannot be upadated')
      }
      return this.httpResponse.Ok(res, dataRequest)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async deletePurchaseProduct (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: DeleteResult = await this.purchaseProductService.deletePurchaseProduct(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'Purchase-product cannot be deleted')
      }
      return this.httpResponse.Ok(res, `Delete Purchase-product with ID: ${id}`)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }
}
