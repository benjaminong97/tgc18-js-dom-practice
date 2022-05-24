// PLACE YOUR CODE HERE


// 1. Select all elements with the class `emphasis` and change their font family to 'Verdana'
emphasis = document.querySelectorAll('.emphasis')
for (e of emphasis) {
    e.style.fontFamily = 'Verdana'
}

// 2. Select all `<li class='finished'>` and put a strikethrough through them (google for
// 'css text decoration')
finished = document.querySelectorAll('.finished');
for (e of finished) {
    e.style.textDecoration = 'line-through'
}

// 3. Select all the `<li class='todo'>` that are in `<ul id='low-priority'>` and
// change their background color to blue
todolow = document.querySelectorAll('ul#low-priority li.todo');
for (e of todolow) {
    e.style.backgroundColor = 'blue'
}

// 4. Select all elements with the class `alert` and change the font color to red.
alert = document.querySelectorAll('.alert')
for (e in alert) {
    e.fontColor = 'red'
}