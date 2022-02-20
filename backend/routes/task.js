const express = require('express');
const { createTask, getAllTask, updateTask, deleteTask, getTask } = require('../controllers/task');
const { isAuthenticateUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/task')
.post(createTask)
.get(getAllTask)

router.route('/task/:id')
// .patch(isAuthenticateUser, authorizeRoles("employee","leader"),updateTask)
// .delete(isAuthenticateUser, authorizeRoles("employee","leader"),deleteTask)
.patch(updateTask)
.delete(deleteTask)
.get(getTask)

module.exports = router
