const mysql = require('mysql')

// 1. 创建连接
const pool = mysql.createPool({
  host: '120.79.254.54',
  port: '3306',
  user: 'root',
  password: 'Ajh0201.',
  database: 'MyResume'
})

module.exports = pool
