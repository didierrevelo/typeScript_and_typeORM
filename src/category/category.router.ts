/* eslint-disable @typescript-eslint/no-misused-promises */
import { BaseRouter } from '../shared/router'
import { CategoryController } from './controller/category.controller'

export class CategoryRouter extends BaseRouter<CategoryController> {
  constructor () {
    super(CategoryController)
  }

  routes (): void {
    this.router.get('/categories', async (req, res) =>
      await this.controller.getCategories(req, res)
    )
    this.router.get('/category/:id', async (req, res) =>
      await this.controller.getCategoryById(req, res)
    )
    this.router.post('/createCategory', async (req, res) =>
      await this.controller.createCategory(req, res)
    )
    this.router.put('/updateCategory/:id', async (req, res) =>
      await this.controller.updateCategory(req, res)
    )
    this.router.delete('/deleteCategory/:id', async (req, res) =>
      await this.controller.deleteCategory(req, res)
    )
  }
}
