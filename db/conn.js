const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost:5432/chat_app_db', 'postgres', '123', {host: 'localhost', dialect: 'postgres', "port": 5423 });

module.exports = conn;