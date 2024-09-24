// --------------------Function-Blog-Button-------------------

document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "blog.html";
});
// --------------------------

// --------------------Function-Donate-Button-------------------

document
  .getElementById("input-donation-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const newAddBalance = getInputFieldValueById("input-add-balance");
    const currentAmount = getTextFieldValueById("current-balance");
    // --------------------------------------

    // -------------------------------
    if (currentAmount >= newAddBalance) {
      const availableBalance = getTextFieldValueById("available-balance");
      const newBalance = availableBalance - newAddBalance;
      const totalAmount = currentAmount + newBalance;

      document.getElementById("current-balance").innerText = totalAmount;

      const p = document.createElement("p");
      p.innerText = `${newAddBalance} Taka is Donated for Donate for Flood at Noakhali, Bangladesh.`;

      document.getElementById("transaction-container").appendChild(p);
    } else {
      alert("Faild to Add Money");
    }
  });

// -------------------Function-Click-Hide-Button------------------

document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    showSectionById("main-section");
    button.classList.toggle("active");
  });

// --------------------------------------------------

document
  .getElementById("history-button")
  .addEventListener("click", function () {
    showSectionById("transaction-section");
    button.classList.toggle("active");
  });

// --------------------------------------------------
