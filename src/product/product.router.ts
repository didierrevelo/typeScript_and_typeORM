/* eslint-disable @typescript-eslint/no-misused-promises */
import { BaseRouter } from '../shared/router'
import { ProductController } from './controller/product.controller'

export class ProductRouter extends BaseRouter<ProductController> {
  constructor () {
    super(ProductController)
  }

  async routes (): Promise<any> {
    this.router.get('/products', async (req, res) =>
      await this.controller.getProducts(req, res)
    )
    this.router.get('/product/:id', async (req, res) =>
      await this.controller.getProductById(req, res)
    )
    this.router.post('/createProduct', async (req, res) =>
      await this.controller.createProduct(req, res)
    )
    this.router.put('/updateProduct/:id', async (req, res) =>
      await this.controller.updateProduct(req, res)
    )
    this.router.delete('/deleteProduct/:id', async (req, res) =>
      await this.controller.deleteProduct(req, res)
    )
  }
}
