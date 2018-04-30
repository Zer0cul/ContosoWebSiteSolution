﻿//Perform AJAX query
$(document).ready(function () {
    $('#btnAdd').on('click', addNumbers)
    $('#btnSubtract').on('click', subtractNumbers)
    $('#btnMultiplication').on('click', multiplyNumbers)
    $('#btnDivision').on('click', divideNumbers)
});
//We'll use different http verb for the operation 
// GET for add
// POST for subtract
// PUT for multiplication
// DELETE for division

function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.getJSON('/addition', data, function (data) {
        $('#result').html(data.result);
    });
    /*
    $.ajax({
        url: '/addition',
        data: data,
        type: 'GET',
        cache: false,
        dataType: 'json',
        success: function (data) {
            $('#result').html(data.result);
        }       
    });
    */
}
function subtractNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.post('/subtraction', data, function (data) {
        $('#result').html(data.result);
    });
}

function multiplyNumbers(){
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}

function divideNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
    $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false,
        success: function (data) {
            $('#result').html(data.result);
        }
    });
}

function updateProgress(evt) {
    if (evt.lengthComputable) {
        var percentComplete = evt.loaded / evt.total
        //display percentComplete
    } else {
        // Need total size to compute progress
    }
}

function transferFailed(evt) { alert("An error occurred"); }
function canceled(evt) { alert("canceled by the user"); }