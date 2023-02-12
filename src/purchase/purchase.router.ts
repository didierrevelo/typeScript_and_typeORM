/* eslint-disable @typescript-eslint/no-misused-promises */
import { BaseRouter } from '../shared/router'
import { PurchaseController } from './controller/purchase.controller'

class PurchaseRouter extends BaseRouter<PurchaseController> {
  constructor () {
    super(PurchaseController)
  }

  async routes (): Promise<any> {
    this.router.get('/purchases', async (req, res) =>
      await this.controller.getPurchases(req, res)
    )
    this.router.get('/purchase/:id', async (req, res) =>
      await this.controller.getPurchaseById(req, res)
    )
    this.router.post('/createPurchase', async (req, res) =>
      await this.controller.createPurchase(req, res)
    )
    this.router.put('/updatePurchase/:id', async (req, res) =>
      await this.controller.updatePurchase(req, res)
    )
    this.router.delete('/deletePurchase/:id', async (req, res) =>
      await this.controller.deletePurchase(req, res)
    )
  }
}

export { PurchaseRouter }
