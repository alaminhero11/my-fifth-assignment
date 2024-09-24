// -----------------------------------------------------------------------------------------
const inputDonationButton = document.getElementById("input-donation-button");
inputDonationButton.addEventListener("click", function (event) {
  event.preventDefault();

  const inputAddBalance = parseFloat(
    document.getElementById("input-add-balance").value
  );
  const availableBalance = parseFloat(
    document.getElementById("available-balance").innerText
  );
  const currentBalance = parseFloat(
    document.getElementById("current-balance").innerText
  );

  const newAddBalance = availableBalance - inputAddBalance;
  document.getElementById("available-balance").innerText = newAddBalance;

  const newBalance = currentBalance + inputAddBalance;
  document.getElementById("current-balance").innerText = newBalance;
});

// -----------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------
