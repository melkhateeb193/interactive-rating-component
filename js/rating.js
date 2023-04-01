const ratingBtns = document.querySelectorAll('.submetBtns button');
const submitBtn = document.getElementById('submit');
const rateAgainBtn = document.getElementById('rateAgain');
const containerTwo = document.getElementById('CTwo');
const containerOne = document.getElementById('contianer-One');
const rateNum = document.getElementById('rateNum');

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    rateNum.textContent = e.target.textContent;
  });
});

submitBtn.addEventListener('click', () => {
  if (!rateNum.textContent) {
    alert('Please rate the product!');
    return;
  }
  containerTwo.classList.replace('d-none', 'd-flex');
  containerOne.classList.add('d-none');
});

rateAgainBtn.addEventListener('click', () => {
  containerOne.classList.replace('d-none', 'd-block');
  containerTwo.classList.replace('d-flex', 'd-none');
});
