const studentModel = require('./studentsModel')
require('../Config/db')

const getAllStudents = () =>
{
    console.log("in the functino")
    return new Promise ((resolve,reject) =>
    {
        studentModel.find({},(err,data) =>
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                console.log('sss');
                console.log(data)
                resolve(data)
            }
        })
    })
}

const getStudentById = (id) =>
{
    return new Promise ((resolve,reject) =>
    {
        studentModel.findById(id,(err,data) =>
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

const addStudent = (obj) =>
{
    return new Promise((resolve,reject) => 
    {
        const newStudent = new studentModel(obj);
        newStudent.save((err) =>
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Student Added Successfully")
            }
        })
    })
}

const updateStudent = (id,obj) => 
{
    return new Promise((resolve,reject) =>
    {
        console.log('IN THE ROUTER')
        console.log(id,obj)
        studentModel.findByIdAndUpdate(id,obj,(err,data) =>
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Student Updated Successfully")
            }
        })
    })
}

const deleteStudent = (id) =>
{
    return new Promise((resolve,reject) =>
    {
        studentModel.findByIdAndDelete(id,(err,data) =>
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Student Deleted Successfully")
            }
        })
    })
}

//const student = {id : "blabla", fullName : "Tal Nardia", email : "talnardiya@gmail.com", faculty : "Kernelios", birthdate : 3/1/1994, exams :  {name:"Full Stack",date:12/5/2021,grade: 100}}

//addStudent(student) // Working
//getStudentById("61adbd0de13d1352d52dccbf").then(x => console.log(x)); //-->not Working
//deleteStudent("61adb9d37d357f7c64efa0d9") // Working
//getAllStudents().then(x => console.log(x)) //Working
///updateStudent("61adbd0de13d1352d52dccbf",{faculty : "John Bryce"}).then(x => console.log(x)) --> Working but not on robo 3T
module.exports = {getAllStudents,getStudentById,addStudent,updateStudent,deleteStudent}

