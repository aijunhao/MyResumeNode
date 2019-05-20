var express = require('express')
var router = express.Router()
var DB = require('../db/usersDB.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

/**
 * 用户注册 
 */
router.post('/register', (req, res) => {
  console.log(req.body.email, req.body.pass)
  DB.register([req.body.email, req.body.pass], (err, results) => {
    if (err) {
      console.log('错误', err)
      res.status(500).send('失败')
    } else if (results) {
      console.log('注册成功', results)
      res.status(200).send('注册成功')
    } else {
      console.log('注册失败，邮箱已存在')
      res.status(201).send('注册失败，邮箱已存在')
    }
  })
})

/**
 * 用户登录
 */
router.get('/login', (req, res) => {

})

module.exports = router
