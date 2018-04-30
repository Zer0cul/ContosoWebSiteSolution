/// <reference path="_references.js" />
module('Calculator Test Suite', { setup: function () { calculatorNamespace.initialize(); } });

test("Initialize Test", function () {
    expect(2);
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + '  Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + '  Actual value: ' + $('#txtResult').val());
});

test("Btn5 Click Test", function () {
    expect(1);
    var btn = $('#btnNumber5').triggerHandler('click');
    //QUnit.triggerEvent(btn, "click");
    var result = txtInput.value;
    var expected = '5';
    equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
});

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);
    for (var i = 0; i < buttonQuantity; i++) {
        $('#btnNumber' + i).triggerHandler('click');
        var result = $('#txtInput').val()[$('#txtInput').val().length -1];//txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Expected value: ' + expected + ' Actual value: ' + result);
        var expectedLength = i < 2 ? 1 : i;
        //var expectedLength = i + 1;
        // after i=2 always return 10
        var actual = Number($('#txtInput').val().length);
        equal(actual, expectedLength, 'Expected string length: ' + expectedLength + '  Actual value: ' + actual);
    }
});
test("Two number Button Click Test", function () {
    var buttonQuantity = 10;
    expect(1);
    var i = Number(1);
    $('#btnNumber' + i).triggerHandler('click');
    i++;
    $('#btnNumber' + i).triggerHandler('click');
    var expectedLength = 2;
    var actual = Number($('#txtInput').val().length);
    equal(actual, expectedLength, 'Expected string length: ' + expectedLength + '  Actual value: ' + actual);

});

test("Add Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnPlus').triggerHandler('click');
    var expected = '30';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + '  Actual value: ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + '  Actual value: ' + $('#txtInput').val());
});

test("Subtrack Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnMinus').triggerHandler('click');
    var expected = '10';
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value ' + $('#txtResult').val());
    expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
});

test("Clear Entry Test", function () {
    expect(1);
    $('#txtInput').val('10');
    $('#btnClearEntry').triggerHandler("click");
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value:' + $('#txtInput').val());
});

test("Clear Test", function () {
    expect(2);
    $('#txtInput').val('10');
    $('#txtResult').val('20');
    $('#btnClear').triggerHandler( "click");
    var expected = '0';
    equal($('#txtInput').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtInput').val());
    equal($('#txtResult').val(), expected, 'Expected value: ' + expected + ' Actual value: ' + $('#txtResult').val());

});