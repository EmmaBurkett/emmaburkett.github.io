const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) { // Preston, Fish Haven, Soda Springs
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
            let card = document.createElement('section');
            let wordContainer = document.createElement('div');
            let h2Name = document.createElement('h2');
            let h3Motto = document.createElement('h3');
            let pYear = document.createElement('p');
            let pPopulation = document.createElement('p');
            let pRainfall = document.createElement('p');
            let image = document.createElement('img');

            h2Name.textContent = towns[i].name + ": ";
            h3Motto.textContent = towns[i].motto;
            pYear.textContent = "Year Founded: " + towns[i].yearFounded;
            pPopulation.textContent = "Population: " + towns[i].currentPopulation;
            pRainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;

            card.appendChild(wordContainer);
            wordContainer.appendChild(h2Name);
            wordContainer.appendChild(h3Motto);
            wordContainer.appendChild(pYear);
            wordContainer.appendChild(pPopulation);
            wordContainer.appendChild(pRainfall);
            card.appendChild(image);

            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', "image of " + towns[i].name);

            document.querySelector('div.cards').appendChild(card);
        }
    }
  });

  window.addEventListener('load', ()=> {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', ()=>{mainnav.classList.toggle('responsive')},false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};                            
});

window.addEventListener('load', (event)=> {
    const lu = document.querySelector('#lastupdated');
    let today = new Date();
    
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    let month = new Array(12);
    month [0] = "January";
    month [1] = "Febuary";
    month [2] = "March";
    month [3] = "April";
    month [4] = "May";
    month [5] = "June";
    month [6] = "July";
    month [7] = "August";
    month [8] = "September";
    month [9] = "October";
    month [10] = "November";
    month [11] = "December";

   
    let date = weekday[today.getDay()] + ', ' + today.getDate() + " " + month[today.getMonth()] + " " + today.getFullYear();
    lu.textContent = date;
})
