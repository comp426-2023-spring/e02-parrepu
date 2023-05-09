// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() { // Use 'let' here
    let check = document.getElementById('opponent');
    //let radiorps = document.getElementsByClass('rps');
    //let radiorpsls = document.getElementsByClass('rpsls');

    if (check.checked == true){ 
        // See if you can do another nested if-then statement in here
        $('.shots').show()
    } else {
        $('.shots').hide()
    }

}

function  startOver () { 
    // We simply have to set the form (following makes selections to go back to default)
    document.getElementById('userinput').reset();
    // Call previous function
    showHideShots();
}

async function playGame () { 

    // Where can we get the game from?
    // Should pull out the game we're playing
    let game = $('input[type=radio][name=game]:checked').val(); 
    // Same line as shot-line
    let shot = $('input[type=radio][name=shot]:checked').val(); 

    // From the browser, it will give the full href path for whatever you're looking at 
    let baseurl = window.location.href + 'app/' 
    console.log(baseurl)
    // Play the basic game without any other input?
    let url = baseurl + game + '/play/' + shot 
    console.log(url)

    // The following will send a call to the correct endpoint of the API server based on input parameters
    let response = await fetch(url)
    let result =  await response.json()
    
    // Finally, log the result variable from above onto the console
    console.log(result)
}