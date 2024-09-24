// --------------------Input-Add-Money-Function-------------------

function getInputFieldValueById(id) {
  const InputAddBalance = document.getElementById(id).value;
  const newInputAddBalance = parseFloat(InputAddBalance);
  return newInputAddBalance;
}

// ---------------------Current-Balance-Function------------------

function getTextFieldValueById(id) {
  const currentBalance = document.getElementById(id).innerText;
  const currentAmount = parseFloat(currentBalance);
  return currentAmount;
}

// ------------------------------Hide-----------------------------

function showSectionById(id) {
  document.getElementById("main-section").classList.add("hidden");
  document.getElementById("transaction-section").classList.add("hidden");
  // --------------
  document.getElementById(id).classList.remove("hidden");
}

// ------------------------------------------
