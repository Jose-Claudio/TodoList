const express = require('express')

module.exports = function(server) {
    
    const router = express.Router()
    server.use(router)
    
    const todoService = require('../todo/todoService')
    todoService.register(router, '/todos')

}