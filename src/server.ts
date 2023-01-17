import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { UserRouter } from './router/user.router'
import { ConfigServer } from './config/config'
import { Connection } from 'typeorm'
import { createConnection } from 'typeorm/globals'

class Server extends ConfigServer {
  public app: express.Application = express()
  private readonly port: number = this.getNumberEnv('PORT')

  constructor () {
    super()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))

    void this.dbConnect()

    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use('/api', this.routers())
    this.listen()
  }

  routers (): express.Router[] {
    return [new UserRouter().router]
  }

  async dbConnect (): Promise<Connection> {
    return await createConnection(this.typeORMConfig)
  }

  public listen (): void {
    this.app.listen(this.port, () => {
      console.log(`server listening on port ${this.port}`)
    })
  }
}

// eslint-disable-next-line no-new
new Server()
