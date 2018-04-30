/// <reference path="jquery-3.3.1.js" />

$(document).ready(function () {
    $('#submit').on('click', callServer);
});
function callServer() {
    var data = $('form[name="ContactForm"]').serialize();
    $.post('/ContactService', data,'json').done(displayResultSR).fail(displayErrorSR);
}
function displayResultSR(serverData) {
    $('#result').html(serverData.result);
} 
function displayErrorSR(serverData) {
    $('#result').html('Some error!');
}