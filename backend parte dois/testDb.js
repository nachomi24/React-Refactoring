require('dotenv').config()
const { Sequelize } = require('sequelize')
  
const sequelize = new Sequelize(process.env.DATABASE_URL)
 
const testDb = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexion correcta.')
  } catch (err) {
    console.log('No se puede conectar a la BD')
    return process.exit(1)
  }

  return null
}

module.exports = { testDb }