const Project = require('../model/project');

exports.createProject = async(req, res) =>{
    const project = await Project.create(req.body)
    res.json({
        project,
        success: true,
        message: 'Project created successfully'
    })
}

exports.updateProject = async(req, res) =>{
    const project = await Project.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        project,
        success: true,
        message: 'Project update successfully'
    })
}
exports.deleteProject = async(req, res) =>{
    const project = await Project.findByIdAndDelete(req.params.id)
    res.json({
        project,
        success: true,
        message: 'Project delete successfully'
    })
}
exports.getAllProject = async(req, res) =>{
    const projects = await Project.find()
    res.json({
        projects,
        success: true,
        message: 'Get projects successfully'
    })
  }
    exports.getProject = async(req, res) =>{
      const project = await Project.findById(req.params.id)
      res.json({
          project,
          success: true,
          message: 'Get projects successfully'
      })
}
