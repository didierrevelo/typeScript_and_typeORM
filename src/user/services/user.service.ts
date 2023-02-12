import { DeleteResult, UpdateResult } from 'typeorm'
import { BaseService } from '../../config/base.service'
import { UserDTO } from '../dto/user.dto'
import { UserEntity } from '../entities/user.entity'

export class UserServices extends BaseService<UserEntity> {
  constructor () {
    super(UserEntity)
  }

  async findAllUser (): Promise<UserEntity[]> {
    return await (await this.execRepository).find()
  }

  async findUserById (id: string): Promise<UserEntity | null> {
    return await (await this.execRepository).findOneBy({ id })
  }

  async createUser (body: UserDTO): Promise <UserEntity> {
    return await (await this.execRepository).save(body)
  }

  async deleteUser (id: string): Promise<DeleteResult> {
    return await (await this.execRepository).delete({ id })
  }

  async updateUser (id: string, infoUpdate: UserDTO): Promise<UpdateResult> {
    return await (await this.execRepository).update(id, infoUpdate)
  }
}
