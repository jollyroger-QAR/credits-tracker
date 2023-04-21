const mongoose = require('mongoose');

const CreditSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
    trim: true
  },
  credits: {
    type: Number,
    required: true,
    min: 0
  },
  courseCode: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  }
});

module.exports = mongoose.model('Credit', CreditSchema);