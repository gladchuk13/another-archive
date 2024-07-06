function calculateInstallment() {
    let amount1 = parseFloat(document.getElementById('amount').value);
    let months = parseInt(document.getElementById('months').value);
    let displayNumber3 = (document.getElementById('displayNumber3').value);
    let button = (document.getElementById('button'));
  
    let interestRate = 2.99;
    
    let monthlyPayment = (amount1 / months) * (1 + interestRate / 100);
    
    document.getElementById("displayNumber3").value = monthlyPayment.toFixed(2);
  }
  
  let sum = (document.querySelector('.sum'))
  let myAmount = (document.querySelector('.amount'))
  myAmount.addEventListener('click', () => {
    if (myAmount.className === 'amount' && sum.className === 'sum') {
      myAmount.classList.add('active');
      sum.classList.add('active');
  }
  else {
    myAmount.classList.remove('active');
    sum.classList.remove('active');
  };
  })
  
  let month = (document.querySelector('.G_month'))
  let amount2 = (document.querySelector('.G_month2'))
  amount2.addEventListener('click', () => {
    if (amount2.className === 'G_month2' && month.className === 'G_month') {
      amount2.classList.add('active');
      month.classList.add('active');
  }
  else {
    amount2.classList.remove('active');
    month.classList.remove('active');
  };
  })
  