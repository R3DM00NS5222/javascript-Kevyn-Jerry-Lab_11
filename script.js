
//To start with, download a copy of our shopping-list.html starting file and make a copy of it somewhere. You'll see that it has some minimal CSS, a div with a label, input, and button, and an empty list and <script> element. You'll be making all your additions inside the script.
    
// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
let list = document.querySelector('ul');
let input = document.querySelector('input');
let button = document.querySelector('button');

// Create a function that will run in response to the button being clicked.

button.addEventListener('click', addItem);


function addItem()
{
    // Inside the function body, start off by storing the current value of the input element in a variable.
    let value = input.value;

    // Next, empty the input element by setting its value to an empty string — ''.
    input.value = '';

    // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
    let listItem = document.createElement('li');
    listItem.setAttribute("class", "li");
    let listSpan = document.createElement('span');
    let listButton = document.createElement('button');

    // Append the span and the button as children of the list item.
    listItem.appendChild(listSpan);
    listItem.appendChild(listButton);

    // Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    listSpan.textContent = value;
    listButton.textContent = 'Delete';

    // Append the list item as a child of the list.
    list.appendChild(listItem);

    // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
    listButton.addEventListener('click', deleteItem);
    
    function deleteItem() 
    {
        list.removeChild(listItem);
    }

    // Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
    input.focus();

}








        