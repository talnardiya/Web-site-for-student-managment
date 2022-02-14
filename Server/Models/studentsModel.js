const mongoose = require('mongoose')
const Schema = mongoose.Schema;
    const studentSchema = new Schema(
    {
        
        fullName : String,
        email : String,
        faculty : String,
        birthDate : Date,
        exams : [{name : String, date : Date, grade : Number}]
    })


module.exports = mongoose.model('students',studentSchema)