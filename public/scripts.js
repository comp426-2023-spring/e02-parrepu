// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function showHideShots() { // Use 'let' here
    let check = document.getElementById('opponent');
    //let radiorps = document.getElementsByClass('rps');
    //let radiorpsls = document.getElementsByClass('rpsls');

    if (check.checked == true){ // Can do another nested if-then statement in here
        $('.shots').show()
    } else {
        $('.shots').hide()
    }

}

function  startOver () { // We simply have to set the form (following makes selections to go back to default)
    document.getElementById('userinput').reset();
    showHideShots();
}

async function playGame () {

    // Where can we get game from?
    let game = $('input[type=radio][name=game]:checked').val(); // Should pull out the game we're playing
    let shot = $('input[type=radio][name=shot]:checked').val(); // Same line as shot-line

    let baseurl = window.location.href + 'app/' // From the browser, it will give the full href path for whatever you're looking at 
    console.log(baseurl)
    let url = baseurl + game + '/play/' + shot // Play the basic game without any other input?
    console.log(url)

    // The following fetch should work

    let response = await fetch(url)
    let result =  await response.json()
    console.log(result)
}