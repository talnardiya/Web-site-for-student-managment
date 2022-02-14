const express = require('express')
const studentsBL = require('../Models/studentsBL')

const router = express.Router()

router.route('/').get(async(req,res) => 
{
    try
    {
        console.log("in the router")
        const students = await studentsBL.getAllStudents();
        console.log(students)
        return res.json(students)
    }
    catch(error)
    {
        return res.json(error);
    }
})

router.route('/:id').get(async(req,res) => 
{
    try
    {
        const id = req.params.id;
        const student = await studentsBL.getStudentById(id);
        return res.json(student)
    }
    catch(error)
    {
        return res.json(error);
    }
})

router.route('/').post(async(req,res) => 
{
    try
    {
        const id = req.params.id;
        const newStudent = req.body
        console.log("IN THE ROUTER")
        console.log(newStudent)
        const result = await studentsBL.addStudent(newStudent);
        return res.json(result)
    }
    catch(error)
    {
        return res.json(error)
    }
})

router.route('/:id').put(async(req,res) => 
{
    console.log("in the router")
    try
    {
        const id = req.params.id;
        const updateStudent = req.body;
        console.log(id)
        console.log(updateStudent)
        const result = await studentsBL.updateStudent(id,updateStudent)
        console.log(result)
        return(result)
    }
    catch(error)
    {
        return res.json(error)
    }
})

router.route('/:id').delete(async(req,res) => 
{
    try
    {
        const id = req.params.id;
        const result = await studentsBL.deleteStudent(id);
        return res.json(result)
    }
    catch(error)
    {
        return res.json(error)
    }
})

module.exports = router;