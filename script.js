// this increases the count by 1
let count = 2; 

//change color
function changeColor() {
    if (count > 0) {
        countValue.style.color = "green";
    } else if (count < 0) {
        countValue.style.color = "red";
    } else {
        countValue.style.color = "black";
    }
}
//get elements from the page
const countValue = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

// increase the function
increaseButton.addEventListener("click", function() {
    count++;
    countValue.textContent = count;
    changeColor();
});

//decrease the function
decreaseButton.addEventListener("click", function() {
    count--;
    countValue.textContent = count;
    changeColor();
});

//reset the function
resetButton.addEventListener("click", function() {
    count = 0;
    countValue.textContent = count;
    changeColor();
}); 

//run once on page load so 0 starts with black color
changeColor();
//set initial count value