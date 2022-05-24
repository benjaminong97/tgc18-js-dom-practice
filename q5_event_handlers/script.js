// PLACE YOUR CODE HERE
// Given the HTML, add an event listener to the button with the id of `changeColor` 
// such that when it is clicked, the `<h1>` element's background color will become yellow.

let button = document.querySelector('button#changeColor')
button.addEventListener('click', function(){
    document.querySelector('h1').style.backgroundColor = 'yellow'
})

