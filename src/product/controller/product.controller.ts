import { Request, Response } from 'express'
import { ProductService } from '../services/product.service'
import { HttpResponse } from '../../shared/response/http.respose'
import { UpdateResult, DeleteResult } from 'typeorm'

export class ProductController {
  constructor (
    private readonly productService: ProductService = new ProductService(), private readonly httpResponse: HttpResponse = new HttpResponse()) { }

  async getProducts (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.productService.findAllProducts()
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Data products cannot found data')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async getProductById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.productService.findProductById(id)
      if (data == null) {
        return this.httpResponse.NotFound(res, 'Data product cannot found')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async createProduct (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.productService.createProduct(req.body)
      res.status(200).json(data)
    } catch (e) {
      console.error(e)
    }
  }

  async updateProduct (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: UpdateResult = await this.productService.updateProduct(id, req.body)
      const dataRequest = await this.productService.findProductById(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'product cannot be upadated')
      }
      return this.httpResponse.Ok(res, dataRequest)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async deleteProduct (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: DeleteResult = await this.productService.deleteProduct(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'product cannot be deleted')
      }
      return this.httpResponse.Ok(res, `Delete Product with ID: ${id}`)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }
}
