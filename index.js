/* 
 * License: The Unlicense.
 */

/**
 * Begin function.
 * 
 * Called on page load.
 */
$(document).ready(function() {
    setAwardee();
});

/**
 * Gets the awardee from the URL
 * and edits the web page to display it.
 * 
 * @returns {undefined}
 */
function setAwardee(){
    var url = document.URL.split("?");
    
    if(url.length === 2){
        setAwardeeName(url[1]);
    }
}

/**
 * Sets the name of the awardee on
 * the web page.
 * 
 * @param {type} name the name of
 * the awardee.
 * @returns {undefined}
 */
function setAwardeeName(name){
    $("#awardee").html(name);
}