import { DeleteResult, UpdateResult } from 'typeorm'
import { BaseService } from '../../config/base.service'
import { PurchaseDTO } from '../dto/purchase.dto'
import { PurchaseEntity } from '../entities/purchase.entity'

export class PurchaseService extends BaseService<PurchaseEntity> {
  constructor () {
    super(PurchaseEntity)
  }

  async findAllPurchases (): Promise<PurchaseEntity[]> {
    return await (await this.execRepository).find()
  }

  async findPurchaseById (id: string): Promise<PurchaseEntity | null> {
    return await (await this.execRepository).findOneBy({ id })
  }

  async createPurchase (body: PurchaseDTO): Promise<PurchaseEntity> {
    return await (await this.execRepository).save(body)
  }

  async deletePurchase (id: string): Promise<DeleteResult> {
    return await (await this.execRepository).delete({ id })
  }

  async updatePurchase (id: string, infoUpdate: PurchaseDTO): Promise<UpdateResult> {
    return await (await this.execRepository).update(id, infoUpdate)
  }
}
