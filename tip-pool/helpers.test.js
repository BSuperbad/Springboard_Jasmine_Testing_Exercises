describe('Helpers test', function () {

    beforeEach(function () {
        billAmtInput.value = 200;
        tipAmtInput.value = 20;
        submitPaymentInfo()
    });

    it('should should sum total tip amt from allPayments obj on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 400;
        tipAmtInput.value = 50;
        submitPaymentInfo()

        expect(sumPaymentTotal('tipAmt')).toEqual(70);

    });

    it('should should sum total bill amt from allPayments obj on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('billAmt')).toEqual(200);

        billAmtInput.value = 400;
        tipAmtInput.value = 50;
        submitPaymentInfo()

        expect(sumPaymentTotal('billAmt')).toEqual(600);

    });

    it('should should sum total tip percent amt from allPayments obj on sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(10);

        billAmtInput.value = 400;
        tipAmtInput.value = 80;
        submitPaymentInfo()

        expect(sumPaymentTotal('tipPercent')).toEqual(30);

    });

    it('should should convert bill and tip amts to tip percent on calculateTipPercent()', function () {
        expect(calculateTipPercent(200, 20)).toEqual(10);
        expect(calculateTipPercent(400, 80)).toEqual(20);

    });

    it('should add new td from value and append to tr on appendTd(tr, value)', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'hello');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('hello');


    });

    it('should add a new "delete" td and append to tr on appendDeleteBtn(tr)', function () {
        let newDeleteButton = document.createElement('tr');
        appendDeleteBtn(newDeleteButton);

        expect(newDeleteButton.children.length).toEqual(1);
        expect(newDeleteButton.firstChild.innerHTML).toEqual('X');


    });




    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
})