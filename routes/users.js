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
  DB.register(
    {
      email: req.body.email,
      pass: req.body.pass
    },
    (err, results) => {
      if (err) {
        console.log('错误', err)
        res.status(500).send('失败')
      } else if (results) {
        console.log('注册成功')
        // 已登录，直接返回结果
        res.status(200).send(results[0])
      } else {
        console.log('注册失败，邮箱已存在')
        res.status(201).send('注册失败，邮箱已存在')
      }
    }
  )
})

/**
 * 用户登录
 */
router.post('/login', (req, res) => {
  console.log(req.body.email, req.body.pass)
  DB.login(
    {
      email: req.body.email,
      pass: req.body.pass
    },
    (err, results) => {
      if (err) {
        console.log('登录错误', err)
        res.status(500).send('登录失败失败')
      } else if (results) {
        console.log('登录成功', results)
        res.status(200).send(results[0])
      }
    }
  )
})

/**
 * 头像上传
 */
router.post('/head', (req, res) => {
  console.log(req.body)
  res.send('ok')
})
module.exports = router
