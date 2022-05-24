// PLACE YOUR CODE HERE
//first h1 to say hello world
document.querySelector('h1').innerText = "Hello world!"

//2. Change the background color of the first `<span id="important">` in the document to 'red'
document.querySelector('span#important').style.backgroundColor = 'red'


//3. Change the font family and font size of the first `<li class="todo">` to be the font Verdana and font size '16px'.
document.querySelector('li.todo').style.fontFamily = 'Verdana'
document.querySelector('li.todo').style.fontSize = '16px'
// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}