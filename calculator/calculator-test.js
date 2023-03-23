describe("#monthly-payment", function () {

  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 500000,
      years: 30,
      rate: 7.8
    }
    expect(calculateMonthlyPayment(values)).toEqual('3599.35');
  });


  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 3000,
      years: 5,
      rate: 15,
    }
    expect(calculateMonthlyPayment(values)).toEqual('71.37');
  });

  it("should handle high interest rates and partial years", function () {
    const values = {
      amount: 40000,
      years: 10.7,
      rate: 67.45,
    }
    expect(calculateMonthlyPayment(values)).toEqual('2250.39');
  });

})