import { Request, Response } from 'express'
import { CategoryService } from '../services/category.services'
import { HttpResponse } from '../../shared/response/http.respose'
import { UpdateResult, DeleteResult } from 'typeorm'

export class CategoryController {
  constructor (private readonly categoryService: CategoryService = new CategoryService(), private readonly httpResponse: HttpResponse = new HttpResponse()) { }

  async getCategories (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.categoryService.findAllCategories()
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'Data categories cannot found data')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async getCategoryById (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data = await this.categoryService.findCategoryById(id)
      if (data == null) {
        return this.httpResponse.NotFound(res, 'Data category cannot found')
      }
      return this.httpResponse.Ok(res, data)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async createCategory (req: Request, res: Response): Promise<any> {
    try {
      const data = await this.categoryService.createCategory(req.body)
      res.status(200).json(data)
    } catch (e) {
      console.error(e)
    }
  }

  async updateCategory (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: UpdateResult = await this.categoryService.updateCategory(id, req.body)
      const dataRequest = await this.categoryService.findCategoryById(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'Category cannot be upadated')
      }
      return this.httpResponse.Ok(res, dataRequest)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }

  async deleteCategory (req: Request, res: Response): Promise<any> {
    const { id } = req.params
    try {
      const data: DeleteResult = await this.categoryService.deleteCategory(id)
      if (data.affected === 0) {
        return this.httpResponse.NotFound(res, 'Category cannot be deleted')
      }
      return this.httpResponse.Ok(res, `Delete Category with ID: ${id}`)
    } catch (error) {
      return this.httpResponse.Error(res, error)
    }
  }
}
