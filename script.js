// Function to append digits or operators to the display
function appendToDisplay(value) {
    document.getElementById("result").value += value;
  }
  
  // Function to clear the display (AC)
  function clearDisplay() {
    document.getElementById("result").value = "";
  }
  
  // Function to delete the last digit (DEL)
  function deleteDigit() {
    let result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }
  
  // Function to calculate the result (=)
  function calculateResult() {
    let result = document.getElementById("result").value;
    try {
      document.getElementById("result").value = eval(result);
    } catch (error) {
      document.getElementById("result").value = "Error";
    }
  }
  