/// <reference path="_references.js" />

(function () {
    this.calculatorNamespace = this.calculatorNamespace || {};
    var ns = this.calculatorNamespace;

    ns.initialize = function () {    
        var calculator = new ns.Calculator();

        //document.getElementById('btn5').addEventListener('click', numberClick, false);
        //for (var i = 0; i < 10; i++) {
        //    document.getElementById('btn' + i).addEventListener('click', numberClick, false);
        //}
        //txtInput = document.getElementById('txtInput');
        //txtResult = document.getElementById('txtResult');
        $('button[id^="btnNumber"]').on('click', calculator.numberClick);
        $('btnPlus').on('click', calculator.plusClick);
        $('btnMinus').on('click', calculator.minusClick);
        $('btnClearEntry').on('click', calculator.clearEntry);
        $('btnClear').on('click', calculator.clear);
        calculator.clear();
    }
    
    ns.Calculator = (function () {
        function Calculator() {
        }

        Calculator.prototype.numberClick = function numberClick() {
            $('#txtInput').val($('#txtInput').val() == '0' ? $(this).text() : $('txtInput').val() + $(this).text());
        }


        Calculator.prototype.plusClick = function plusClick() {
            //txtResult.value = Number(txtResult.value) + Number(txtInput.value);
            $('#txtResult').val(Number($('#txtResult').val) + Number($('#txtInput').val()));
            
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.minusClick = function minusClick() {
            $('#txtResult').val(Number($('#txtResult').val) - Number($('#txtInput').val()));
            //txtResult.value = Number(txtResult.value) - Number(txtInput.value);
            Calculator.prototype.clearEntry();
        }

        Calculator.prototype.clearEntry = function clearEntry() {
            //txtInput.value = '0';
            $('#txtInput').val('0');
        }

        Calculator.prototype.clear = function clear() {
            $('#txtInput').val('0');
            $('#txtResult').val('0');
            //txtInput.value = '0';
            //txtResult.value = '0';
        }
        return Calculator;
    }());

})();





