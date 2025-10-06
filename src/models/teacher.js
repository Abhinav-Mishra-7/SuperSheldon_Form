const mongoose = require("mongoose") ;

const teacherSchema = new mongoose.Schema({_id: { type: String, unique: true }}, { strict: false, collection: 'teacher' });

const Teacher = mongoose.model('Teacher', teacherSchema, 'teacher');

module.exports = Teacher ;