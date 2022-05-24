// 1. Select the first `<h1>` element in the list. Change it so that it now displays in green color.
h1 = document.querySelector('h1')
h1.style.color = 'green'

// 2. Change the text of the first `<li class="finished">` to the string "Repay credit card debt"
firstLi = document.querySelector('li.finished')
firstLi.innerText = 'Repay credit card debt'

// 3. Select the element `<li id="urgent">`, and give it a black coloured border that has a width of '2px'. Hint: Check the `border-color`
// and the `border-width` css properties on a web page.
urgentLi = document.querySelector('li#urgent')
urgentLi.style.borderColor = 'black'
urgentLi.style.borderWidth = '2px'

// 4. Change the first element with the class `emphasis` such that it is underlined (check out the text decoration css style online)
firstEmphasis = document.querySelector('.emphasis')
firstEmphasis.style.textDecoration = 'underline'

// 5. Select first element with `<p class='emphasis'>` and change its background color to orange,
//  its font size to "32px" and its line height to be "24px". 
pEmphasis = document.querySelector('p.emphasis')
pEmphasis.style.backgroundColor = 'orange'
pEmphasis.style.fontSize = '32px'
pEmphasis.style.lineHeight = '24px'

// 6. Select the `<span class="todo">` which is nested inside the `<li id="urgent">` and give
//  it a background color of 'yellow'
spantodo = document.querySelector('li#urgent span.todo')
spantodo.style.backgroundColor = 'yellow'

// 7. Change the first `<h2>` element such that it contains another element `<span class="greetings">About Us</span>` instead.
document.querySelector('h2').innerHTML = '<span class="greetings">About Us</span>'