function calculate() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.querySelector(".select").value;
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Enter valid number");
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 == 0) {
        alert("Can`t divide by zero");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Invalid operator selected");
      return;
  }

  document.getElementById("result").value = result;
}
