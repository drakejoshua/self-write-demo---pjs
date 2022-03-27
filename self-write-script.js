/* demo's created by mabawonku joshua */


/* 
    this code below is for the self-writing demo

    it allows us to use a function to be able automatically write text into an element .. like a typing effect
    it works by calling a function that takes arguments as: text-to-be-written, time-taken-to write-each-letter-of-the-text-to-be-written
    , whether to override the element's initial content and the ID of the element in which we want to self-write some text
*/

// for the self-writing text( call to this function to make a typing effect in your HTML element )
function selfWriteText( textToBeWritten, timeToWriteALetter, overrideContent, element ){
    //shred the textToBeWritten
    var textArray = shredText( textToBeWritten )
    //a count for our loop later in the code
    var count = 0;

    //make decision to selfWrite the text to be written
    if ( overrideContent ) {
        // override the initial content of the element passed
        document.getElementById( element ).innerHTML = "";

        //selfWrite text into element
        var interval = setInterval( function(){
            document.getElementById( element ).innerHTML += textArray[count]
            count++
            if ( count === ( textArray.length ) ) {
                clearInterval( interval );
            }
        }, ( timeToWriteALetter * 1000 ) )
    } else {
        /* 
            since we're not overriding any initial content on the element just self-write text
        */

        //selfWrite text into element
        var interval = setInterval( function(){
            document.getElementById( element ).innerHTML += textArray[count]
            count++
            if ( count === ( textArray.length ) ) {
                clearInterval( interval );
            }
        }, ( timeToWriteALetter * 1000 ) )
    }
}

//shreds any text passed and converts it to an array
function shredText( text ){
    var count = 0, shreddedText = [];

    for ( ; count <= ( text.length - 1 ); count++ ) {
        shreddedText[count] = text[count]
    }

    return shreddedText
}
//a quick demo
selfWriteText( "joshua created this demo", 0.1, false, "self-text" )

/* 
    if you want to show multiple stuff( timing is very important in this aspect )
    to do the math: time that will be taken to self-write = timeTakenToWritALetter * textToBeWritten.length
*/
setTimeout( function(){ selfWriteText( "joshua loves programming", 0.1, true, "self-text" ) }, 4000 );
setTimeout( function(){ selfWriteText( "joshua loves coding", 0.1, true, "self-text" ) }, 7000 );
setTimeout( function(){ selfWriteText( "joshua loves design", 0.1, true, "self-text" ) }, 10000 );