const express = require('express')
const router = express.Router()

const {
    getAlltasks,
    getTask,
    createTask,
    updateTask,
    deletetask
} = require('../controllers/tasks')
router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deletetask)

module.exports= router