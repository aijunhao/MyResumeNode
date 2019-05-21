const db = require('./dbConfig.js')

// 用户注册
exports.register = (params, callback) => {
  db.query({
    sql: 'SELECT * FROM Users WHERE Email = ?',
    values: [params.email]
  })
    .then(results => {
      if (results.length === 0) {
        db.query({
          sql: 'INSERT INTO Users(Email, Password) values(?, ?)',
          values: [params.email, params.pass]
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
    sql: '',
    values: []
  })
}