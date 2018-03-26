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
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}

function plusClick() {
    txtResult.value = Number(txtResult.value) + Number(txtInput.value);
}