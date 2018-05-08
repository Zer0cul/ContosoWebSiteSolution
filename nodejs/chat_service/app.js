﻿var express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    , io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile(__dirname, '/public/index.html');
});

app.get('/', function (request, response) {
    response.redirect('default.html');
});

var usernames = {};
io.sockets.on('connection', function (socket) {
    socket.on('sendchat', function (data) {
        io.sockets.emit('updatechat', socket.username, data);
    });

    socket.on('addUser', function (username) {
        console.log('New user:' + username + ' is comming.');
        socket.username = username;
        usernames[username] =username;
        io.sockets.emit('updateusers', usernames);
        socket.emit('updatechat', 'SERVER', 'you have connected');
        console.log('Emit updatechat');
        socket.broadcast.emit('updatechat', 'SERVER',
            username + ' has connected');
        
    });

    socket.on('disconnect', function () {
        delete usernames[socket.username];
        io.sockets.emit('updateusers', usernames);
        socket.broadcast.emit('updatechat', 'SERVER', socket.username + ' has disconnected');
    });
});
var port = 8080;
server.listen(port);
console.log('Listenin on port: ' + port);