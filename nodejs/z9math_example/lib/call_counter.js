//Chapter 8 Reading. Creating module
var internal_call_counter = 0;

function count_call() {
    ++internal_call_counter;
    console.log('You hava made ' + internal_call_counter + ' calls!');
}

module.exports = count_call;