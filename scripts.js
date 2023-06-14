// scripts.js

window.addEventListener("DOMContentLoaded", () => {
    // Get the necessary elements
    const tableBody = document.querySelector("tbody");
    const subTotalOutput = document.getElementById("sub-total");
    const discountPercentageSelect = document.getElementById("discount-percentage");
    const discountAmountOutput = document.getElementById("discount-amount");
    const deliveryChargesInput = document.getElementById("delivery-charges");
    const totalOutput = document.getElementById("total");
  
    // Calculate and update the totals
    function updateTotals() {
      let subTotal = 0;
      const rows = tableBody.querySelectorAll("tr");
      rows.forEach((row) => {
        const quantity = Number(row.querySelector("td:nth-child(4) input").value);
        const unitPrice = Number(row.querySelector("td:nth-child(7) input").value);
        const total = quantity * unitPrice;
        row.querySelector("td:nth-child(8) input").value = total.toFixed(2);
        subTotal += total;
      });
      subTotalOutput.textContent = subTotal.toFixed(2);
  
      const discountPercentage = Number(discountPercentageSelect.value);
      const discountAmount = (subTotal * discountPercentage) / 100;
      discountAmountOutput.textContent = discountAmount.toFixed(2);
  
      const deliveryCharges = Number(deliveryChargesInput.value);
      const total = subTotal - discountAmount + deliveryCharges;
      totalOutput.textContent = total.toFixed(2);
    }
  
    // Add event listeners to inputs
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", updateTotals);
    });
  
    discountPercentageSelect.addEventListener("change", updateTotals);
    deliveryChargesInput.addEventListener("input", updateTotals);
  
    // Trigger the updateTotals function once to calculate initial values
    updateTotals();
  });
  