const express = require('express')
const userControllers = require('../controllers/usersControllers')
const router = express.Router()

//CONTROLADORES

const usersControllers = require('../controllers/usersControllers')

router.route('/users').get(usersControllers.getUsers)

router
  .route('/user/:id')
  .get(usersControllers.getUser)
  .post(usersControllers.createUser)
  .put(usersControllers.updateUser)
  .delete(usersControllers.deleteUser, userControllers.getUsers)

module.exports = router
