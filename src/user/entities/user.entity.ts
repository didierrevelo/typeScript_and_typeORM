import { Column, Entity, OneToOne } from 'typeorm'
import { BaseEntity } from '../../config/base.entity'
import { CustomerEntity } from '../../customer/entities/customer.entity'

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column()
    name!: string

  @Column()
    lastname!: string

  @Column()
    email!: string

  @Column()
    password!: string

  @Column()
    city!: string

  @Column()
    province!: string

  @Column()
    numberPhone!: number

  @OneToOne(() => CustomerEntity, (customer) => customer.user)
    customer!: CustomerEntity
}
