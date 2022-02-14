const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/studentsDB")
    .catch(error => console.log(error))