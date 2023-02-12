import { Request, Response } from 'express'
import { PurchaseProductService } from '../services/purchase-product.service'

export class PurchaseProductController {
  [x: string]: any
  constructor (private readonly purchaseProductService: PurchaseProductService = new PurchaseProductService()) { }
  async getPurchasesProduct (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.purchaseProductService.findAllPurchasesProducts()
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async getPurchaseProductById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.purchaseProductService.findPurchaseProductById(id)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
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
      const data = await this.purchaseProductService.updatePurchaseProduct(id, req.body)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }

  async deletePurchase (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.purchaseProductService.deletePurchaseProduct(id)
      res.status(200).json(data)
    } catch (error) {
      console.error(error)
    }
  }
}
