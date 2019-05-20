const pool = require('./dbConfig.js')

exports.register = (params, callback) => {
  console.log(params)
  pool.query(
    {
      sql: 'SELECT * FROM Users WHERE Email = ?',
      values: [params[0]]
    },
    (err, results) => {
      if (err) return callback(err)
      else {
        if (results.length === 0) {
          pool.query(
            {
              sql: 'INSERT INTO Users(Email, Password) values(?, ?)',
              values: params
            },
            (err, results) => {
              if (err) {
                return callback(err)
              } else {
                return callback(null, results)
              }
            }
          )
        } else {
          return callback(null, null)
        }
      }
    }
  )
}
