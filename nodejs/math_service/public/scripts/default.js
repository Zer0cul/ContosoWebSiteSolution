//Perform AJAX query
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

    var data = getFormData();
    serverAddition(data).done(displayResult);
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
    var data = getFormData();
    serverSubtraction(data).done(displayResult);
}

function multiplyNumbers(){
    var data = getFormData();
    serverMultiplicatoin(data).done(displayResult);
}

function divideNumbers() {

    var data = getFormData();
    serverDivision(data).done(displayResult);
}

function serverAddition(data) {
    return $.getJSON('/addition', data);
}
function serverSubtraction(data) {
    return $.post('/subtraction', data, 'json');
}
function serverMultiplicatoin(data) {
    return $.ajax({
        url: '/multiply',
        data: data,
        type: 'PUT',
        dataType: 'json',
        cache: false
    });
}
function serverDivision(data) {
    return $.ajax({
        url: '/divide',
        data: data,
        type: 'DELETE',
        dataType: 'json',
        cache: false
    });
}

function getFormData() {
    var x = $('#x').val();
    var y = $('#y').val();
    return { "x": x, "y": y };
}
function displayResult(serverData) {
    $('#result').html(serverData.result);
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