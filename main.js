const outputCalc = document.querySelector("#calc");

function display(num) {
  outputCalc.value += num;
}

// Clear the output
function Clear() {
  outputCalc.value = "";
}

// Delete the output
function del() {
  outputCalc.value = outputCalc.value.slice(0, -1);
}

function calc() {
  try {
    let result = eval(outputCalc.value);
    outputCalc.value = result;
  } catch (err) {
    outputCalc.value = "Error";
  }
}
