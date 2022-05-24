// 1. Add the `script.js` such that when the '+' button is clicked, the number inside
// the box goes up by 1.
let plusButton = document.querySelector('button#increment')
let count = 0
plusButton.addEventListener('click', function(){
    if (document.querySelector('#box').innerHTML < 10){
        count ++
    }
    
    document.querySelector('#box').innerHTML = count

    if (count % 2 == 0) {
        document.querySelector('#box').style.backgroundColor = 'green'
    }
    else {
        document.querySelector('#box').style.backgroundColor = 'red'
    }
})

if (count % 2 == 0) {
    document.querySelector('#box').style.backgroundColor = 'green'
}
else {
    document.querySelector('#box').style.backgroundColor = 'red'
}

// 2. Add another button, with the label '-',  to the HTML such that when it is clicked, the number inside
// the box goes down by 1.  **Make sure you place this button after the increment button**
let minusButton = document.querySelector('button#decrement')
minusButton.addEventListener('click', function(){
    if (document.querySelector('#box').innerHTML > 0) {
        count --
    }
    
    document.querySelector('#box').innerHTML = count
    
    if (count % 2 == 0) {
        document.querySelector('#box').style.backgroundColor = 'green'
    }
    else {
        document.querySelector('#box').style.backgroundColor = 'red'
    }
})


// 3. Add another button, this time with the label "Reset",  that when it is clicked, it will
// reset the number in the box to 0. **Make sure you place this as the last button**.
let resetButton = document.querySelector('button#reset')
resetButton.addEventListener('click', function(){
    count = 0
    document.querySelector('#box').innerHTML = count
})
// 4. Make it such the user cannot reduce the number in the box to below 0, and cannot raise it above 10.


// 5. Challenge: Make it such that when the number in the box is even, the background color of the
// numbr is green, and when the number is odd, the background color is red. Note: 0 is considered as even.