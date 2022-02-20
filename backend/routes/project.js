const express = require('express');
const { createProject, getAllProject, updateProject, deleteProject, getProject } = require('../controllers/project');
const { isAuthenticateUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/project')
// .post(isAuthenticateUser, authorizeRoles("leader"),createProject)
.post(createProject)
.get(getAllProject)

router.route('/project/:id')
// .patch(isAuthenticateUser, authorizeRoles("leader"),updateProject)
// .delete(isAuthenticateUser, authorizeRoles("leader"),deleteProject)
.patch(updateProject)
.delete(deleteProject)
.get(getProject)

module.exports = router
