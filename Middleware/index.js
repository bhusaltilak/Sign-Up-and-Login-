const express = require('express');
const { route } = require('../Routes/UserRoutes');
const UserRoutes = require('../Routes/UserRoutes');
const routes=express.Router();


 routes.use('/User',UserRoutes);
module.exports=routes;