var koa = require('koa');  
var app = new koa();
const mongoose = require('mongoose');

mongoose.connect('mongodb://myUserAdmin:abc123@localhost:27017/todos?authSource=admin')

app.use(function *(){  
    this.body = 'Hello from koajs';
});

app.listen(3000);

module.exports = app;