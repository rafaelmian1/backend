const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  apellido: String,
  edad: Number,
  casado: { type: Boolean, default: false },
})

module.exports = mongoose.model('user', userSchema)
