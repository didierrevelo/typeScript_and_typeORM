/* eslint-disable @typescript-eslint/no-misused-promises */
import { BaseRouter } from '../shared/router'
import { CustomerController } from './controller/customer.controller'
export class CustomerRouter extends BaseRouter<CustomerController> {
  constructor () {
    super(CustomerController)
  }

  async routes (): Promise<any> {
    this.router.get('/customers', async (req, res) =>
      await this.controller.getCustomers(req, res)
    )
    this.router.get('/customer/:id', async (req, res) =>
      await this.controller.getCustomerById(req, res)
    )
    this.router.post('/createCustomer', async (req, res) =>
      await this.controller.createCustomer(req, res)
    )
    this.router.put('/updateCustomer/:id', async (req, res) =>
      await this.controller.updateCustomer(req, res)
    )
    this.router.delete('/deleteCustomer/:id', async (req, res) =>
      await this.controller.deleteCustomer(req, res)
    )
  }
}
