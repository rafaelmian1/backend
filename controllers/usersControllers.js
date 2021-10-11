const User = require('../models/User')

const userControllers = {
  getUsers: async (req, res) => {
    try {
      let users = await User.find()
      res.json({ success: true, users })
    } catch (err) {
      res.json({ success: false, error: err.message })
      console.log(err.message)
    }
  },
  getUser: async (req, res) => {
    try {
      let user = await User.findOne({ _id: req.params.id })
      res.json({ success: true, user })
    } catch (err) {
      res.json({ success: false, error: err.message })
      console.log(err.message)
    }
  },
  createUser: async (req, res) => {
    const { nombre, apellido, edad, casado } = req.body
    try {
      let newUser = new User({ nombre, apellido, edad, casado })
      await newUser.save()
      res.json({ success: true, newUser })
    } catch (err) {
      res.json({ success: false, error: err.message })
      console.log(err.message)
    }
  },
  updateUser: async (req, res) => {
    try {
      let modified = await User.findOneAndUpdate({ _id: req.params.id }, { ...req.body }, { new: true })
      res.json({ success: true, modified })
    } catch (err) {
      res.json({ success: false, error: err.message })
      console.log(err.message)
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      await User.findOneAndDelete({ _id: req.params.id })
      res.json({ success: true })
      return next()
    } catch (err) {
      res.json({ success: false, error: err.message })
      console.log(err.message)
    }
  },
}

module.exports = userControllers
