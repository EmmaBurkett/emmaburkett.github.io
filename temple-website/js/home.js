window.addEventListener('load', ()=>{
    //const serverName = "https://127.0.0.1;5500/ice/temples/"
    const requestURL = "js/temples.json"
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((temple)=> {
            console.log(temple); 
            let card = document.createElement("section");
            card.classList.add("temple");
            card.innerHTML =  `<h2>${temple[0].name}</h2>
                                <div class="grid">
                                <div class="picture">
                                    <picture>
                                        <source srcset="${temple[0].imageurl}" media="(max-width: 375px)">
                                        <source srcset="${temple[0].imageurlmedium}" media="(min-width: 376px) and (max-width: 768px">
                                        <img loading="lazy" src="${temple[0].imageurllarge}" alt="${temple[0].name}"> 
                                    </picture>
                                </div>
                                <div class="overlay"> 
                                    <p><b>Address:</b><br>${temple[0].address}</p> 
                                    <p><b>Phone#</b> ${temple[0].phone}</p>
                                    <p><b>Services:</b><br> ${temple[0].services}</p> 
                                    <p><b>History:</b><br> ${temple[0].history}</p> 
                                    <p class="hidden"><b>Dedicatory Prayer</b><br>${temple[0].prayer[0]}</p>
                                    <p>${temple[0].prayer[1]}</p>
                                    <p><a href="${temple[0].link}" target="_blank">See More</a></p>
                                    <p>Temple Schedule: <b>${temple[0].schedule}</b></p>
                                </div>
                                </div>`; //this is shorthand for creating elements in javascript for html. same as the createElement function but way faster and much more readable. 
            document.querySelector("#temples").appendChild(card);
           }); 
        });