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
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

closeBtn.addEventListener("click", function(e) {
    if (e.target == modal) {
        closeModal(0)
    }
})


let likeButtons = document.querySelectorAll(".like");
console.log(likeButtons);
likeButtons.forEach((like) => {
    like.addEventListener('click', function () {
        like.classList.toggle("like-enable");        
})
})

/*   2-й метод   вместо this. можно e.target 
let likeButtons = document.querySelectorAll(".like");
console.log(likeButtons);
likeButtons.forEach((like) => {
    like.addEventListener('click', function () {
        if (this.classList.contains("like-enable")) {
            this.classList.remove("like-enable")
        } else {
            this.classList.add("like-enable")
        }
    })
}) */


function showmodalByScroll (height) {
    if (window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll", showmodalByScroll)
}
}

window.addEventListener("scroll", showmodalByScroll);

//console.log(window.pageYOffset); насколько проскролили
//console.log(document.body.scrollHeight);   высота всей странички



// change product  count

/*let decrementBtns = document.querySelectorAll(".decrement-button")[0];
let incrementBtns = document.querySelectorAll(".increment-button")[0];
let quantityValue = document.querySelectorAll(".quantity-count input");


let currentCount = +quantityValue.value;
let minCount = 1;
let maxCount = 5;


for (let i=0; i < quantityValue.length; i++) {
    let currentCount = +quantityValue[i].value;
    toggleButtonState(currentCount, decrementBtns[i], incrementBtns[i]);
}

function toggleButtonState(count, decrementBtns, incrementBtns) {
    decrementBtns.disabled = count <= minCount;
    incrementBtns.disabled = count >= maxCount;   
    }



for (let i = 0; i < incrementBtns.length; i++) {
    incrementBtns[i].addEventListener('click', function () {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount + 1;
        quantityValue[i].value = nextCount;

        toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i]);

    })
}

for (let i = 0; i < decrementBtns.length; i++) {
    incrementBtns[i].addEventListener('click', function () {
        let currentCount = +quantityValue[i].value;
        let nextCount = currentCount - 1;
        quantityValue[i].value = nextCount;

        toggleButtonState(nextCount, decrementBtns[i], incrementBtns[i]);

    })
}





if (currentCount <= 1) {
    decrementBtns.disabled = true;
} else {
    decrementBtns.disabled = false;
}


console.log(decrementBtns);
console.log(incrementBtns);
console.log(quantityValue);


incrementBtns.addEventListener ('click', function () {
    let currentCount = +quantityValue.value;
    let nextCount = currentCount + 1;
    quantityValue.value = nextCount;
    /*if (nextCount <= 1) {
        decrementBtns.disabled = true;
    } else {
        decrementBtns.disabled = false;
    }
   

decrementBtns.addEventListener('click', function () {
    let currentCount = +quantityValue.value;
    let nextCount = currentCount - 1;
    quantityValue.value = nextCount;

    if (nextCount <= 1) {
        decrementBtns.disabled = true;
    } else {
        decrementBtns.disabled = false;
    }

    toggleButtonState(nextCount); 

})*/



// новая задача 
// конструктор


let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".quantity-count input");

console.log(decrementBtns);
console.log(incrementBtns);
console.log(quantityValue);

function Counter(incrementBtns, decrementBtns, inputField, minCount = 1,maxCount = 5) {
 /*this.incrementBtns = incrementBtns;
 this.decrementBtns = decrementBtns;
    this.inputField = inputField;   тоже самое что ниже*/

this.domRefs = {
    incrementBtns,
    decrementBtns,
    inputField,
}

    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtns.disabled = count <= minCount;
        this.domRefs.incrementBtns.disabled = count >= maxCount;   
    }

    this.toggleButtonState();


    this.increment = function () {
        console.log(this);
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState();    
    }
    this.decrement = function () {
        console.log(this);
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;

        this.toggleButtonState();    

    }

    this.domRefs.incrementBtns.addEventListener('click', this.increment.bind(this));
    this.domRefs.decrementBtns.addEventListener('click', this.decrement.bind(this));
    console.log(this);
}

for (let i = 0; incrementBtns.length-1 > i; i++) {
  let counter = new Counter(incrementBtns[i], decrementBtns[i], quantityValue[i]);
}

//const counter1 = new Counter(incrementBtns[1], decrementBtns[1], quantityValue[1]);*/



// slider

$(".slider-block").slick({
    dots:true,
});