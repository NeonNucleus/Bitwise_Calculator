function calculateBitwise() {
  const num1 = parseInt(document.getElementById("number1").value);
  const num2 = parseInt(document.getElementById("number2").value);
       // Check if inputs are valid numbers
       if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }
  const andResult = num1 & num2;
  const orResult = num1 | num2;
  const xorResult = num1 ^ num2;
  const notResult1 = ~num1;
  const notResult2 = ~num2;
  document.getElementById("andResult").textContent = andResult;
  document.getElementById("orResult").textContent = orResult;
  document.getElementById("xorResult").textContent = xorResult;
  document.getElementById("notResult1").textContent = notResult1;
  document.getElementById("notResult2").textContent = notResult2;

}