/*
    script for the names.html file

    Look at the names.html file in your editor. It has two text inputs for first
    and last name, and a button named "Add". Your job is to write the code so
    that the following requirements are met.

    - Your code should wait until the DOM is ready for manipulation before
      getting references to elements and registering event listeners

    - Declare an array to track a set of objects. Each object will have
      firstName and lastName properties. To start, just declare a variable
      inside your DOMContentLoaded event listener function, and initialize it
      to an empty array.

    - When the user clicks the Add button, your code should get the values
      entered into the <input id="first-name"> and <input id="last-name">
      fields and create a new JavaScript object. That object should have
      a property named 'firstName' set to the value entered into the first-name
      input, and a property named 'lastName' set to the value entered into
      the last-name input. You should then add that to the array using the
      array's .push() method (see http://www.w3schools.com/jsref/jsref_push.asp)

    - Write a function that clears the <ul id="people-list"> element and then
      adds a new <li> for each person currently in your array. You should set
      the .textContent of the <li> to be the first and last name of the person

    - Call that function when the DOM is ready for manipulation, and after
      you add a new person object to the array
 */

