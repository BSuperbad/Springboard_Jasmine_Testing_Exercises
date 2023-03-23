window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const initialObj = {
    amount: 20000,
    years: 30,
    rate: 5
  }
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");

  amountInput.value = initialObj.amount;
  yearsInput.value = initialObj.years;
  rateInput.value = initialObj.rate;
  update();

}
// Get the current values from the UI
// Update the monthly payment
function update() {
  const current = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(current))
}

//update is simply getting values from inputs, passing to update monthly 
//payment (not set up yet)

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return ((values.amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2)

  //(P*i)/(1-(1+i)**-ns)
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = `$` + monthly;
}