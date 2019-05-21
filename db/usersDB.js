const db = require('./dbConfig.js')

/**
 * 用户注册
 * Email, Password 为非空属性
 * User_Name 属性默认值为 Email 值
 */
exports.register = (params, callback) => {
  db.query({
    sql: 'SELECT * FROM Users WHERE Email = ?',
    values: [params.email]
  })
    .then(results => {
      if (results.length === 0) {
        db.query({
          sql: 'INSERT INTO Users(Email, Password, User_Name) values(?, ?, ?)',
          values: [params.email, params.pass, params.email]
        }).then(results => {
          return callback(null, results)
        })
      } else {
        return callback(null, null)
      }
    })
    .catch(err => {
      return callback(err)
    })
}

// 用户登录
exports.login = (params, callback) => {
  db.query({
    sql: 'SELECT User_Id, User_Name FROM Users WHERE Email = ?',
    values: [params.email]
  })
    .then(results => {
      return callback(null, results)
    })
    .catch(err => {
      return callback(err)
    })
}
