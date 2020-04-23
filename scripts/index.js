// When you click on a button...
  // 1. toggle that button
    // if on, then off
    // if off, then on
  // 2. randomly change the state of the other buttons

function randomToggleState() {
  return Math.floor(Math.random() * 2);
}

$("input").click(function(event) {
  // iterate through all of the buttons
  for (let i = 0; i < $("label").length; i++) {
    // after toggling the current button clicked, don't change it's state
    if (event.target.parentNode.id == i) {
      continue;
    } else {
      // go through all the non-clicked buttons and change their state
      // which non-clicked buttons get changed should be random so create a function that randomly generates 0 or 1
      // if 1, then toggle button, if 0, then just pass the button
      if (randomToggleState() == 1) {
        if ($("label")[i].control.checked == true) {
          // you can't put '$("label")[i].control.checked' in a variable and use the variable instead
          // the program won't initialize new values to the variable
          $("label")[i].control.checked = false;
        } else {
          $("label")[i].control.checked = true;
        }
      } else {
        continue;
      }
    }
  }
});
