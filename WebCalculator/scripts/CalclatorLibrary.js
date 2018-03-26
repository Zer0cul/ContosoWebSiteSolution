var txtInput;
var txtResult;

function initialize() {

    //document.getElementById('btn5').addEventListener('click', numberClick, false);
    for (var i = 0 ; i < 10 ; i++) {
        document.getElementById('btn' + i).addEventListener('click', numberClick, false);
    }
    txtInput = document.getElementById('txtInput');
    txtResult = document.getElementById('txtResult');
    document.getElementById('btnPlus').addEventListener('click', plusClick, false);
    document.getElementById('btnMinus').addEventListener('click', minusClick, false);
    document.getElementById('btnClearEntry').addEventListener('click', clearEntry, false);
    document.getElementById('btnClear').addEventListener('click', clear, false);
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
}

function minusClick() {
    txtResult.value = Number(txtResult.value) - Number(txtInput.value);
}

function clearEntry() {
    txtInput.value = '0';
}

function clear() {
    txtInput.value = '0';
    txtResult.value = '0';
}