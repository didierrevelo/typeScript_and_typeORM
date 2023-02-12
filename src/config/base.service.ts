import { EntityTarget, ObjectLiteral, Repository } from 'typeorm'
import { BaseEntity } from './base.entity'
import { ConfigServer } from './config'

export class BaseService<T extends BaseEntity> extends ConfigServer {
  public execRepository: Promise<Repository<T>>
  constructor (private readonly getEntity: EntityTarget<T>) {
    super()
    this.execRepository = this.initRepository(getEntity)
  }

  async initRepository<T extends ObjectLiteral>(e: EntityTarget<T>): Promise<Repository<T>> {
    const getConn = await this.dbConnect()
    return getConn.getRepository(e)
  }
}
