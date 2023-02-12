/* eslint-disable n/no-path-concat */
import * as dotenv from 'dotenv'
import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'

export abstract class ConfigServer {
  constructor () {
    const nodeNameEnv = this.createPathEnv(this.nodeEnv)
    dotenv.config({
      path: nodeNameEnv
    })
  }

  public getEnvironment (k: string): string | undefined {
    return process.env[k]
  }

  public getNumberEnv (k: string): number {
    return Number(this.getEnvironment(k))
  }

  public get nodeEnv (): string {
    return this.getEnvironment('NODE_ENV')?.trim() ?? ''
  }

  public createPathEnv (path: string): string {
    const arrEnv: string[] = ['env']

    if (path.length > 0) {
      const stringToArray = path.split('.')
      arrEnv.unshift(...stringToArray)
    }
    return '.' + arrEnv.join('.')
  }

  public get typeORMConfig (): ConnectionOptions {
    return {
      type: 'mysql',
      host: this.getEnvironment('DB_HOST'),
      port: this.getNumberEnv('DB_PORT'),
      username: this.getEnvironment('DB_USER'),
      password: this.getEnvironment('DB_PASSWORD'),
      database: this.getEnvironment('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
      synchronize: false,
      logging: false,
      namingStrategy: new SnakeNamingStrategy()
    }
  }

  async dbConnect (): Promise<Connection> {
    return await createConnection(this.typeORMConfig)
  }
}
