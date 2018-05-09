/// <reference path="jquery-1.8.2.js" />

$(document).ready(function () {
    getLocation();
});

function supportsGeolocation() {
    return 'geolocation' in navigator;
}

function showMessage(message) {
    $('#message').html(message);
}

function getLocation() {
    if (supportsGeolocation()) {
        var options = {
            enableHighAccuracy: true,
            timeout: 3000,
            maximumAge: 20000
        };
        navigator.geolocation.getCurrentPosition(showPosition, showError, options);
    }
    else {
        showMessage("Geolocation in not supported by this browser.")
    }
}

function showPosition(position) {
    var datetime = new Date(position.timestamp).toLocaleString();
    showMessage("Latitude: " + position.coords.latitude + "<br />"
        + "Longitude: " + position.coords.longitude + "<br />"
        + "Timestamp: " + datetime);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            showMessge("User denied Geolocation access request.");
        break;
        case error.POSITION_UNAVAILABLE:
            showMessage("Location information unavailable.");
        break;
        case error.TIMEOUT:
            showMessage("Get user location request timed out.");
        break;
        case error.UNKNOWN_ERROR:
            showMessage("An unknown error occurred.");
        break;
    }
}