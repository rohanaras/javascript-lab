/*
    script for the calculation.html page

    First, look over the calculation.html page in your editor. Note what elements are there
    and what their IDs are. You can also open the page in your browser to see what it
    looks like.

    Your job is to write the code necessary to catch the click event on the "=" button,
    add together the numbers entered into the <input id="value-1"> and <input id="value-2">
    boxes, and display the result in the <span id="result"> element.

    Here are some hints and links to references:
    - Look at the code we wrote together on Tuesday. We did very similar things.
    
    - Remember that you should wait until the DOMContentLoaded event raised by the
      document object before you start asking for elements by their IDs. See
      https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded

    - Remember that you can use document.getElementById() to get a reference to
      an element given its unique ID value. Make sure you spell the ID correctly.
      If you're using WebStorm, hit ctrl+space inside the parameter list to get
      a completion drop down with all the IDs on the page.
      https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

    - You can get the value of an input element using the .value property.
      But remember that this value will be a string.
      http://www.w3schools.com/jsref/prop_text_value.asp.

    - You can convert a string into an number using either parseInt() or 
      parseFloat(), depending on whether you want an integer (no decimals)
      or a float (with decimals).

    - You can change the contents of an element by setting its .textContent property
      https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

    - After you get the basic case working, you should also write the code to handle
      following error conditions:
      - user clicks = without typing in one or both of the values
      - the user entered values but they are not numbers (e.g., "xyz")
      You can use the <p id="error-message"> paragraph to display an error message.
      This is hidden by default (see css/main.css), but you can write the code to
      set its .textContent property with your error message, and set 
      .style.display = 'block' to make it visible. Remember to hide it again
      after the user corrects the problem.

    - For an additional challenge, turn the + sign into a <select> with various
      human-readable operators (+, -, x, /), and do the appropriate calculation
      based on which one the user selects. For details on the <select> element 
      see http://www.w3schools.com/tags/tag_select.asp. Use the same .value
      property to get the value attribute of the currently-selected <option>
*/
