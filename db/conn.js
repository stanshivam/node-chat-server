const Sequelize = require('sequelize');
const conn = new Sequelize("postgres://stanshivam:12345@localhost:5432/chat_app_db", {host: 'localhost', dialect: 'postgres'});

module.exports = conn;