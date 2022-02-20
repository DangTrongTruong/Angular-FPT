const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')




const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//config env
dotenv.config();

//database
mongoose.connect(process.env.DATABASE)
.then(()=>console.log('Connect database successfully'))

//router
const user = require('./routes/user');
const project = require('./routes/project');
const task = require('./routes/task');
app.use('/api',user)
app.use('/api',project)
app.use('/api',task)

//port
const port = process.env.PORT || 8000;
app.listen(port,()=> console.log("working on port: ",port))