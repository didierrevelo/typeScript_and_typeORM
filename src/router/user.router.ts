import { BaseRouter } from './index'
import { UserController } from '../controller/user.controller'

class UserRouter extends BaseRouter<UserController> {
  constructor () {
    super(UserController)
  }

  routes (): void {
    this.router.get('/user', (req, res) => this.controller.getUsers(req, res))
  }
}

export { UserRouter }
