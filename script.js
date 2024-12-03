document.getElementById("numberForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const number_input = document.getElementById("number").value;
  const errorMessage = document.getElementById("error-message");

  if (!/^\d+$/.test(number_input) || parseInt(number_input) <= 10) {
    errorMessage.textContent = "Please enter a number greater than 10!";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    alert("Form submitted successfully!");
  }
});
