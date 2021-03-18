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
           Object.entries(jsonObject).forEach(([key, temple])=>{
               buildTempleCard(temple);
           });
        });
});
function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2> 
                      <img src="${temple.imageurl}" alt="${temple.name}"> 
                      <p>First President <b>${temple.presidents[0]} 1st of ${temple.presidents.length}</b></p> 
                      <p>Current President <b> ${temple.presidents[temple.presidents.length-1]}</b></p>`;
    document.querySelector("#temples").appendChild(card);
}