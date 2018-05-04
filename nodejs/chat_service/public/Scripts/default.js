/// <reference path="jquery-3.3.1.js" />
/// <reference path="socket.io.dev.js" />

var socket;
$(document).ready(function () {
    socket = io('http://localhost:8080');
    socket.on('connect', addUser);
    socket.on('updatechat', processMessage);
    socket.on('updateusers', updateUserList);
    $('#datasend').click(sendMessage);
    $('#data').keypress(processEnterPress);

    socket = io.connect();
});

function addUser() {
    socket.emit('addUser', prompt("What's your name?"));
}

function processMessage(username, data) {
    $('<b>' + username + ':</b>' + data + '<br />').insertAfter($('#conversation'));
}
function updateUserList(data) {
    $('#users').empty();
    
    $.each(data, function (key, value) {
        $('#users').append('<div>' + key + '</div>');
    });
}

function sendMessage() {
    var message = $('#data').val();
    $('#data').val('');
    socket.emit('sendchat', message);
    $('#data').focus();
}

function processEnterPress(e) {
    if (e.which == 13) {
        e.preventDefault();
        $(this).blur();
        $('#datasend').focus().click();
    }
}
