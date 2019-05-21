const mysql = require('mysql')

// 1. 创建连接
const pool = mysql.createPool({
  host: '120.79.254.54',
  port: '3306',
  user: 'root',
  password: 'Ajh0201.',
  database: 'MyResume'
})

// 进行 promise 封装
exports.query = ({ sql, values }) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
        return
      }
      connection.query(sql, values, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
        connection.release()
      })
    })
  })
}

// module.exports = query
