let ratingBtns = document.querySelectorAll('.submetBtns button');
let submitBtn = document.getElementById ('submit');
let rateAgainBtn = document.getElementById ('rateAgain');
let containerTwo = document.getElementById('CTwo');
let containerOne = document.getElementById('contianer-One');
let rateNum = document.getElementById ('rateNum');


for (let i = 0; i < ratingBtns.length; i++) {
    ratingBtns[i].addEventListener('click' , function (e) {
    let btnSrc = e.target.textContent
    rateNum.innerHTML = `${btnSrc}`
    })
    }
submitBtn.addEventListener('click' , function () {
    containerTwo.classList.replace ('d-none', "d-flex")  ;
    containerOne.classList.add('d-none')
} )
rateAgainBtn.addEventListener('click' , function () {
    containerOne.classList.replace('d-none',"d-block" )
    containerTwo.classList.replace ('d-flex', "d-none")  ;
})