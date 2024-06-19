const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'root', 'vertrigo', {
    host: 'localhost',
    dialect: 'mysql',
});

try{
    sequelize.authenticate()
    console.log('Conectamos com sucesso! ✅')
}catch(error){
    console.log(`Não foi conectado ❌: ${error}`)
}

module.exports = sequelize