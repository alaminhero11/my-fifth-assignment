// -----------------------------Input-Donation-Function---------------------------------------------
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// -----------------------------Input-Donation-Function---------------------------------------------
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

  // -----Date-&-Time-Validation-----
  const dateTime = new Date();

  // -----Input-Validation-----

  if (inputAddBalance < 0 || !isNaN(inputAddBalance)) {
    if (availableBalance > inputAddBalance) {
      const newAddBalance = availableBalance - inputAddBalance;
      document.getElementById("available-balance").innerText = newAddBalance;
      document.getElementById(
        "transaction-container"
      ).innerText = `${inputAddBalance} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.`;
      document.getElementById("date-time").innerText = dateTime;

      const newBalance = currentBalance + inputAddBalance;
      document.getElementById("current-balance").innerText = newBalance;
    } else {
      alert("Insufficient Balance!");
    }
  } else {
    alert("Invalid Number!");
  }
});
// --------------------------------------Button-Function--------------------------------------------
// ---Donation-History-Click-Button---
const historyButton = document.getElementById("history-button");
const donationButton = document.getElementById("donation-button");

// ---History-Button---
historyButton.addEventListener("click", function () {
  historyButton.classList.add("bg-secondary");
  donationButton.classList.remove("bg-secondary");

  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("transaction-section").classList.remove("hidden");
});
// ---Donation-Button---
donationButton.addEventListener("click", function () {
  donationButton.classList.add("bg-secondary");
  historyButton.classList.remove("bg-secondary");

  document.getElementById("transaction-section").classList.add("hidden");
  document.getElementById("main-section").classList.remove("hidden");
});
// -----------------------------------------------------------------------------------------
