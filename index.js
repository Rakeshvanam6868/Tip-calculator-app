document.addEventListener("DOMContentLoaded", () => {
    const bill = document.getElementById("bill");
    const numOfPeople = document.getElementById("num");
    const custom = document.getElementById("custom");
    const calculate = document.getElementById("reset");
  
    document.querySelectorAll('.percentage-btn').forEach(button => {
        button.addEventListener('click', () => {
          custom.value = button.getAttribute('data-value');
        });
      });
  
    calculate.addEventListener("click", () => {
      if (calculate.textContent === "Calculate") {
        document.querySelector(".error").style.border = "none";
        document.querySelector(".error_one").style.border = "none";

        const billValue = parseFloat(bill.value);
        const numPeople = parseFloat(numOfPeople.value);
        const customValue = parseFloat(custom.value);
  
        // Error handling
        if (isNaN(numPeople) || numPeople <= 0) {
          document.querySelector(".error").style.border = "1px solid red";
          return;
        }
  
        if (isNaN(billValue) || billValue <= 0) {
          document.querySelector(".error_one").style.border = "1px solid red";
          return;
        }
  
        const tip = (billValue * customValue) / 100;
        const totalTipPerPerson = tip / numPeople;
        const totalAmountPerPerson = (billValue / numPeople) + totalTipPerPerson;
  
        document.getElementById("tip").textContent = totalTipPerPerson.toFixed(2);
        document.getElementById("split").textContent = totalAmountPerPerson.toFixed(2);
  
        // Change button text to "Reset"
        calculate.textContent = "Reset";
      } else {
        // Reset all fields
        bill.value = '';
        numOfPeople.value = '';
        custom.value = '';
        document.getElementById("tip").textContent = '0.00';
        document.getElementById("split").textContent = '0.00';
  
        // Change button text back to "Calculate"
        calculate.textContent = "Calculate";
      }
    });
  });
  