function calculateBitwise() {
  const num1 = parseInt(document.getElementById("number1").value);
  const num2 = parseInt(document.getElementById("number2").value);
  const andResult = num1 & num2;
  const orResult = num1 | num2;
  const xorResult = num1 ^ num2;
  document.getElementById("andResult").textContent = andResult;
  document.getElementById("orResult").textContent = orResult;
  document.getElementById("xorResult").textContent = xorResult;

}