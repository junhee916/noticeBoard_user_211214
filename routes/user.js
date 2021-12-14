const express = require('express')
const router = express.Router()
const checkAuth = require('../middleware/check_auth')
const userCtrl = require('../controller/userContorller')
// get users
router.get('/', checkAuth, userCtrl.getAll)
// get user
router.get('/:userId', checkAuth, userCtrl.get)
// signup
router.post('/signup', userCtrl.signup)
// login
router.post('/login', userCtrl.login)
// update user
router.patch('/:userId', checkAuth, userCtrl.update)
// detele users
router.delete('/', checkAuth, userCtrl.deleteAll)
// delete user
router.delete('/:uesrId', checkAuth, userCtrl.delete)
module.exports = router