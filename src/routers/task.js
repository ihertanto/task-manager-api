const express = require('express')
const auth = require('../middleware/auth')
const task = require('../controllers/task')

const router = express.Router()

// Create Task
router.post('/tasks', auth, task.create)

// GET /tasks?completed=true
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/tasks', auth, task.getMany)

//Read Task by id, auth user id
router.get('/tasks/:id', auth, task.getOne)

// Update Task
router.patch('/tasks/:id', auth, task.update)

router.delete('/tasks/:id', auth, task.remove)

module.exports = router