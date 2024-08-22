
// ---HEADER NAV BAR CLICK EVENT---//
// Get all the <li> elements
const listItems = document.querySelectorAll('header nav ul li');

// Loop through each <li> and add a click event listener
listItems.forEach(item => {
  item.addEventListener('click', function() {
    // Find the <a> tag within the clicked <li>
    const link = this.querySelector('a');

    // Simulate a click on the <a> tag
    if (link) {
      link.click();
    }
  });
});
