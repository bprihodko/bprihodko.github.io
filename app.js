// add to cart   счётчик

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);


let addToCardButtons = document.querySelectorAll(".add");
console.log(addToCardButtons);

  /* 1-й метод   addToCardButtons.forEach((button)=>{
    button.addEventListener('click', (e)=>{
        //console.log('clicked');
        let prevprodutsCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevprodutsCount + 1;

    })
})*/

for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].addEventListener("click", function () {
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    })
    }





let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".details");
let closeBtn = document.querySelector(".btn-close");
console.log(modal);
console.log(moreDetailsBtns);
console.log(closeBtn);



moreDetailsBtns.forEach((btn) => {
    btn.addEventListener('click', function ()  {
        console.log(modal)
        modal.classList.add("show");
        modal.classList.remove("hide");
    })
})

closeBtn.addEventListener('click', function () {
        modal.classList.remove("show");
        modal.classList.add("hide");
    })

function closeModal(){
modal.classList.add("show");
modal.classList.remove("hide");
}
closeBtn.addEventListener("click", function(e) {
    if (e.target == modal) {
        closeModal(0)
    }
})


let likeEl = document.querySelectorAll(".like");
console.log(likeEl);
likeEl.forEach((like) => {
    like.addEventListener('click', function () {
        like.classList.add("like-enable");
    })
})