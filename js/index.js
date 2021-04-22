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