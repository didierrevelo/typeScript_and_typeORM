/* eslint-disable @typescript-eslint/no-misused-promises */
import { BaseRouter } from '../shared/router/index'
import { UserController } from './controller/user.controller'

class UserRouter extends BaseRouter<UserController> {
  constructor () {
    super(UserController)
  }

  async routes (): Promise<any> {
    this.router.get('/users', async (req, res) =>
      await this.controller.getUsers(req, res)
    )
    this.router.get('/user/:id', async (req, res) =>
      await this.controller.getUsersById(req, res)
    )
    this.router.post('/createUser', async (req, res) =>
      await this.controller.createUser(req, res)
    )
    this.router.put('/updateUser/:id', async (req, res) =>
      await this.controller.updateUser(req, res)
    )
    this.router.delete('/deleteUser/:id', async (req, res) =>
      await this.controller.deleteUser(req, res)
    )
  }
}

export { UserRouter }
