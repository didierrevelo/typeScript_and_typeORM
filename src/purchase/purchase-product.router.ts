/* eslint-disable @typescript-eslint/no-misused-promises */
import { BaseRouter } from '../shared/router'
// import { PurchaseController } from './controller/purchase.controller'
import { PurchaseProductController } from './controller/purchase-product.controler'

export class PurchaseProductRouter extends BaseRouter<PurchaseProductController> {
  constructor () {
    super(PurchaseProductController)
  }

  async routes (): Promise<any> {
    this.router.get('/purchaseProducts', async (req, res) =>
      await this.controller.getPurchasesProduct(req, res)
    )
    this.router.get('/purchaseProduct/:id', async (req, res) =>
      await this.controller.getPurchaseProductById(req, res)
    )
    this.router.post('/createPurchaseProduct', async (req, res) =>
      await this.controller.createPurchaseProduct(req, res)
    )
    this.router.put('/updatePurchaseProduct/:id', async (req, res) =>
      await this.controller.updatePurchaseProduct(req, res)
    )
    this.router.delete('/deletePurchaseProduct/:id', async (req, res) =>
      await this.controller.deletePurchaseProduct(req, res)
    )
  }
}
