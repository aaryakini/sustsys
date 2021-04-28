/*
*    Title: Swapping images by mouseclick using Jvascript
*    Author: Dr. Rudolf Winter
*    Date: 9/11/2013
*    Code version: Source Code
*    Availability: https://users.aber.ac.uk/ruw/misc/swapimage.php
*
*/

function swapImage(id,primary,secondary)
{
    src = document.getElementById(id).src;
    if (src.match(primary)) {
      document.getElementById(id).src=secondary;
    } else {
      document.getElementById(id).src=primary;
    }
}

/*
*    Title: How to Collapse Sidebar
*    Author: W3 Schools
*    Date: Accessed 26th April 2021
*    Code version: Source Code
*    Availability: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
*
*/

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}