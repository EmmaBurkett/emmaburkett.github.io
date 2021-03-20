window.addEventListener('load', ()=>{
    //const serverName = "http://127.0.0.1;5500/ice/temples/"
    const requestURL = "js/temples2.json" //fetch url
    fetch(requestURL)
        .then((response)=> { //call file response
            return response.json(); //return response and conver to json
        })
        .then((jsonObject)=> { //take return above - it's preprogrammed to pass the return above as the value of this parameter. 
            console.log(jsonObject); //console.log(jsonObject[0]); would grab name of Idaho Falls Temple
           // console.log(jsonObject[2].presidents[2]);
           //buildTempleCard(jsonObject[0]);
           Object.entries(jsonObject).forEach(([key, temple])=>{ //shorthand for a loop, he didn't go over very much as to why it made it loop, but it does. 
               buildTempleCard(temple); //'key' is a key word in javaScript - I think. Temple is a the name we assigned to the object in json. you could call it pinnapple and it would work.
           });
        });
});
function buildTempleCard(temple){ //referance with temple (arbitary name)
    console.log(temple);//output to console
    let card = document.createElement("section"); //create a section
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2> 
                      <img src="${temple.imageurl}" alt="${temple.name}"> 
                      <p>First President <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p> 
                      <p>Current President <b> ${temple.presidents[temple.presidents.length-1]}</b></p>`; //this is shorthand for creating elements in javascript for html. same as the createElement function but way faster and much more readable. 
    document.querySelector("#temples").appendChild(card); //send to html
}