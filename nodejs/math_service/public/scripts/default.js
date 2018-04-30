//Perform AJAX query
$(document).ready(function () {
    $('#btnAdd').on('click',addNumbers)
});

function addNumbers() {
    var x = $('#x').val();
    var y = $('#y').val();
    var data = { "x": x, "y": y };
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