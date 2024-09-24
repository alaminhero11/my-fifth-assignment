// -----------------------------Input-Donation-Function---------------------------------------------
document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// -----------------------------Input-Donation-Function---01--------------------------------------------
const inputDonationButton1 = document.getElementById("input-donation-button1");
inputDonationButton1.addEventListener("click", function (event) {
  event.preventDefault();

  const inputAddBalance1 = parseFloat(
    document.getElementById("input-add-balance1").value
  );
  const availableBalance = parseFloat(
    document.getElementById("available-balance").innerText
  );
  const currentBalance1 = parseFloat(
    document.getElementById("current-balance1").innerText
  );
  // -----Date-&-Time-Validation-----
  const dateTime = new Date();

  // -----Input-Validation-----
  if (inputAddBalance1 > 0) {
    if (availableBalance > inputAddBalance1) {
      const newAddBalance = availableBalance - inputAddBalance1;
      document.getElementById("available-balance").innerText = newAddBalance;
      document.getElementById(
        "transaction-container1"
      ).innerText = `${inputAddBalance1} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.`;
      document.getElementById("date-time1").innerText = dateTime;

      const newBalance = currentBalance1 + inputAddBalance1;
      document.getElementById("current-balance1").innerText = newBalance;
      // -----Show-Modal-----
      document.getElementById("my_modal_5").showModal();
    } else {
      alert("Insufficient Balance!");
    }
  } else {
    alert("Invalid Number!");
  }
});

// -----------------------------Input-Donation-Function---02--------------------------------------------
const inputDonationButton2 = document.getElementById("input-donation-button2");
inputDonationButton2.addEventListener("click", function (event) {
  event.preventDefault();

  const feniAddBalance = parseFloat(
    document.getElementById("input-add-balance2").value
  );
  const availableBalance = parseFloat(
    document.getElementById("available-balance").innerText
  );
  const currentBalance2 = parseFloat(
    document.getElementById("current-balance2").innerText
  );

  // -----Date-&-Time-Validation-----
  const dateTime = new Date();

  // -----Input-Validation-----
  if (feniAddBalance > 0) {
    if (availableBalance > feniAddBalance) {
      const newAddBalance = availableBalance - feniAddBalance;
      document.getElementById("available-balance").innerText = newAddBalance;
      document.getElementById(
        "transaction-container2"
      ).innerText = `${feniAddBalance} Taka is Donated for Donate for Flood at Feni, Bangladesh.`;
      document.getElementById("date-time2").innerText = dateTime;

      const newBalance = currentBalance2 + feniAddBalance;
      document.getElementById("current-balance2").innerText = newBalance;
      // -----Show-Modal-----
      document.getElementById("my_modal_5").showModal();
    } else {
      alert("Insufficient Balance!");
    }
  } else {
    alert("Invalid Number!");
  }
});

// -----------------------------Input-Donation-Function---03--------------------------------------------
const inputDonationButton3 = document.getElementById("input-donation-button3");
inputDonationButton3.addEventListener("click", function (event) {
  event.preventDefault();

  const quotaAddBalance = parseFloat(
    document.getElementById("input-add-balance3").value
  );
  const availableBalance = parseFloat(
    document.getElementById("available-balance").innerText
  );
  const currentBalance3 = parseFloat(
    document.getElementById("current-balance3").innerText
  );

  // -----Date-&-Time-Validation-----
  const dateTime = new Date();

  // -----Input-Validation-----
  if (quotaAddBalance > 0) {
    if (availableBalance > quotaAddBalance) {
      const newAddBalance = availableBalance - quotaAddBalance;
      document.getElementById("available-balance").innerText = newAddBalance;
      document.getElementById(
        "transaction-container3"
      ).innerText = `${quotaAddBalance} Taka is Donated for Donate at Quota Movement, Bangladesh.`;
      document.getElementById("date-time3").innerText = dateTime;

      const newBalance = currentBalance3 + quotaAddBalance;
      document.getElementById("current-balance3").innerText = newBalance;
      // -----Show-Modal-----
      document.getElementById("my_modal_5").showModal();
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
// ------------------------------------------------------------------------------------------------
