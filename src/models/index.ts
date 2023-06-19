import { Dialect, Sequelize } from 'sequelize'

const dbName = "fruit_2" as string
const dbUser = "postgres" as string
const dbHost = "127.0.0.1"
const dbDriver = "postgres" as Dialect
const dbPassword = "root"

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
})

export default sequelize