var txtInput;

function initialize() {
    txtInput = document.getElementById('txtInput');
    document.getElementById('btn5').addEventListener('click', numberClick, false);
}

function numberClick() {
    txtInput.value = txtInput.value == '0' ?
        this.innerText : txtInput.value + this.innerText;
}