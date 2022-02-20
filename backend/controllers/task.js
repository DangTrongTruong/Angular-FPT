const Task = require('../model/task');

exports.createTask = async(req, res) =>{
    const task = await Task.create(req.body)
    res.json({
        task,
        success: true,
        message: 'task created successfully'
    })
}

exports.updateTask = async(req, res) =>{
    const task = await Task.findByIdAndUpdate(req.params.id,req.body)
    res.json({
        task,
        success: true,
        message: 'task update successfully'
    })
}
exports.deleteTask = async(req, res) =>{
    const task = await Task.findByIdAndDelete(req.params.id)
    res.json({
        task,
        success: true,
        message: 'task delete successfully'
    })
}
exports.getAllTask = async(req, res) =>{
    const tasks = await Task.find()
    res.json({
        tasks,
        success: true,
        message: 'Get tasks successfully'
    })
}

exports.getTask = async(req, res) =>{
  const task = await Task.findById(req.params.id)
  res.json({
      task,
      success: true,
      message: 'Get task successfully'
  })
}
