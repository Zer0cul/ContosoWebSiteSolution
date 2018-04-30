//Perform AJAX query
$(document).ready(function () {
    $('#btnAdd').on('click',addNumbers)
});

function addNumbers() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var result = document.getElementById('result');
    var xmlhttp = new XMLHttpRequest();
    //0 Uninitialized The open method has not been called yet.
    //1 Loading The send method has not been called yet.
    //2 Loaded The send method has been called; headers and status are available.
    //3 Interactive Downloading; the response properties hold the partial data.
    //4 Completed All operations are finished. 
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var jsonObject = JSON.parse(xmlhttp.response);
            result.innerHTML = jsonObject.result;
        };
    };
    xmlhttp.addEventListener("progress", updateProgress, false);
    xmlhttp.addEventListener("error", failed, false);
    xmlhttp.addEventListener("abort", canceled, false); 
    xmlhttp.open("GET", "addition?x=" + x + "&y=" + y, false);
    xmlhttp.send();
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