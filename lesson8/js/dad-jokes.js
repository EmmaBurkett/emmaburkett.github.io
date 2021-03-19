function newJoke(){ //use live server to veiw the codes or push to github (sometimes the joke won't load if these requirements are not met)
    const dad_id = document.getElementById('dad-joke'); //find element in HTML 

    dad_id.innerHTML = ""; //clear 'this is my dad joke' from HTML
    dad_id.classList.remove('small');//remove class 'small' (removes class if it is there, ignores if there is not class small on element)
    const joke = getDadJoke()//calls function getDadJoke()
    .then(function(j){//get the 'return' from getDadJoke() // use .then as like if-then - if you get the dad joke then do this...
        dad_id.innerHTML = j['joke'];//place the retrieved joke into the inner html (the div with id dad-joke) //the retrieved joke is going to come as a json we name it 'j' - j and e are PARAMETERS or at least act like it for this part lol //'joke' is the string retrieved from the website (get the string from the json = j['joke']) //you can do j.joke but on some things j.joke doesn't work...
        if(j['joke'].length > 85) {//if too long/ more than 85 characters do this:
            dad_id.classList.add('small');//add a class 'small' to the div with element dad-joke
        }
    })
    .catch(function(e){ // using .then and .catch takes info from a function and uses it inside their own function so they need a variable to store the info in which we arbitrarily labeled e and j -PARAMETERs!!!!
        dad_id.innerHTML = e; //displays error if there is one - which we will get if 'throw' is activated in getDadJoke() (lol throw - catch just got that)
    })
}
async function getDadJoke() {//async: run code to do something on a url and come back whenever with the stuff (we also have a give up button as the else statment)
    const url = 'https://icanhazdadjoke.com/'; //what url to grab from 
    let h = new Headers ({ //accept header -- you don't always need to do this -- normally in the header you can send credentials but we made it almost as simple as you can get for this assignment.
        "Accept"        :"application/json", //what kind of file you want //the website we're retrieving from specifically requested we do an accept header  
        "User-Agent"    : "WDD-230-Test User Agent https://emmaburkett.github.io" //how they can reach you if something goes wrong and I quote, (Brother Hayes) 'and they want to yell at you'
    });
    const response = await fetch(url, {headers:h});//await means don't do anything else until you get a response back from the server we're comunicating with //fetch means go get the stuff from the website and tell the website what you want and who you are(which is in the Header so it calls the name of the Header - 'h'). Exchange info! //I think header (note the upper and lowercases; header vs. Header) is a key word? 
    if (response.status == 200){ //200 means everything went great! // recall that fetch: gets the json thing
        return response.json(); //then returns the json that the variable response has stored. //returns this the .then function inside the newJoke() function
    }
    else {
        throw new Error('non dad jokes found: '+response.status); //returns error to the .catch function inside the newJoke() function
    }
}
window.addEventListener('load',(event)=> { //when the window/webpage loads
    newJoke(); //load a joke automatically
});

//order of functions really doesn't matter... but officially it's ordered like this lol
