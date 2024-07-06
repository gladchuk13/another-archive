function validateNumber() {
    let inputElement = document.getElementById("amount");
    let errorMessageElement = document.getElementById("errorMessage1");
    let bigLabel = document.querySelector('.G_big-label');
    // Отримуємо введене число
    let number = parseInt(inputElement.value);
  
    if (number < 1000 || number > 100000) {
      // Встановлюємо червону рамку для інпуту
      bigLabel.style.border = "1px solid red";
  
      // Відображаємо повідомлення про помилку
      errorMessageElement.textContent = "Введіть правильне число";
    } else {
      // Відновлюємо стандартні стилі
      bigLabel.style.border = "1px solid #cecece";
  
      // Очищуємо повідомлення про помилку
      errorMessageElement.textContent = "";
    }
  }
  
  function validateNumber2() {
    let months = document.getElementById("months");
    let errorMessageElement2 = document.getElementById("errorMessage2");
    let bigLabel = document.getElementById('big-label2')
    // Отримуємо введене число
    let number2 = parseInt(months.value);
  
    if (number2 < 3 || number2 > 24) {
      // Встановлюємо червону рамку для інпуту
      bigLabel.style.border = "1px solid red";
  
      // Відображаємо повідомлення про помилку
      errorMessageElement2.textContent = "Введіть правильне число";
    } else {
      // Відновлюємо стандартні стилі
      bigLabel.style.border = "1px solid #cecece";
  
      // Очищуємо повідомлення про помилку
      errorMessageElement2.textContent = "";
    }
  }
   function updateNumber() {
  let amount = (document.getElementById("amount"));
  let displayElement = (document.getElementById("displayNumber"));
  let number = amount.value;
  displayElement.textContent = number;
}

function updateNumber2() {
  let months = (document.getElementById("months"));
  let displayElement2 = (document.getElementById("displayNumber2"));
  let number2 = months.value;
  displayElement2.textContent = number2;
}

function updateNumber4() {
  let date = (document.getElementById("date"));
  let displayElement4 = (document.getElementById("displayNumber4"));
  let number3 = date.value;
  displayElement4.textContent = number3;
}
function handleInput() {
  validateNumber();
  updateNumber();
}

function handleInput2() {
  validateNumber2();
  updateNumber2();
}
function handleInput3() {
  updateNumber4();
}