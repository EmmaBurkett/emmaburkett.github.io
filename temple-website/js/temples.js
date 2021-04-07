window.addEventListener('load', ()=>{
    //const serverName = "https://127.0.0.1;5500/ice/temples/"
    const requestURL = "js/temples.json"
    fetch(requestURL)
        .then((response)=> {
            return response.json();
        })
        .then((jsonObject)=> {
            console.log(jsonObject); 
           Object.entries(jsonObject).forEach(([key, temple])=>{ 
               buildTempleCard(temple);    
           }); 
        });
});
function buildTempleCard(temple){ 
    const appid  = "5b70937232e0e8d8c562b29e7c24a2c0";
    const cityID = temple.id;
    const units = "imperial";
    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + units + "&appid=" + appid;
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let today = new Date(jsObject.list[0].dt_txt);
        let day = dayNames[today.getDay()];
        let tomorrow = dayNames[today.getDay() + 1];
        let dayAfter = dayNames[today.getDay() + 2];
        //jsObject.list[i].dt_txt).getHours()
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}</h2>
                      <div class="grid">
                        <div class="picture">
                            <picture>
                                <source srcset="${temple.imageurl}" media="(max-width: 375px)">
                                <source srcset="${temple.imageurlmedium}" media="(min-width: 376px) and (max-width: 768px">
                                <img loading="lazy" src="${temple.imageurllarge}" alt="${temple.name}"> 
                            </picture>
                        </div>
                        <div class="overlay"> 
                            <p><b>Address:</b><br>${temple.address}</p> 
                            <p><b>Phone#</b> ${temple.phone}</p>
                            <p><b>Services:</b><br> ${temple.services}</p> 
                            <p><b>History:</b><br> ${temple.history}</p> 
                            <p><b>Weather Forecast</b></p>
                            <p>&nbsp;&nbsp;&nbsp;${day}&nbsp;&nbsp;&nbsp;&nbsp;${tomorrow}&nbsp;&nbsp;&nbsp;&nbsp;${dayAfter}</p><p><!-- ${new Date(jsObject.list[6].dt_txt).getHours()} -->${jsObject.list[6].main.temp} °F
                            <!-- ${new Date(jsObject.list[14].dt_txt).getHours()} -->&nbsp;&nbsp;&nbsp;&nbsp;${jsObject.list[14].main.temp} °F
                            <!-- ${new Date(jsObject.list[22].dt_txt).getHours()} -->&nbsp;&nbsp;&nbsp;&nbsp;${jsObject.list[22].main.temp} °F</p>
                            <p class="hidden"><b>Dedicatory Prayer</b><br>${temple.prayer[0]}</p>
                            <p>${temple.prayer[1]}</p>
                            <p><a href="${temple.link}" target="_blank">See More</a></p>
                        </div>
                      </div>
                      <p>Temple Schedule: <b>${temple.schedule}</b></p>`; //this is shorthand for creating elements in javascript for html. same as the createElement function but way faster and much more readable. 
    document.querySelector("#temples").appendChild(card); //send to html
});
}


/*window.addEventListener('load', () => {
    for (int i = 0; i < 4; i++)
    {

    const appid  = "5b70937232e0e8d8c562b29e7c24a2c0";
    const cityID = "5604473";
    const units = "imperial";
    const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + units + "&appid=" + appid;
    fetch(apiURL)
      .then((response) => response.json())
      .then((jsObject) => {
        console.log(jsObject);
        const currentTemp = parseFloat(jsObject.list[0].main.temp).toFixed(0);
        const humidityLevel = parseFloat(jsObject.list[0].main.humidity).toFixed(0);
        const windSpeed = parseFloat(jsObject.list[0].wind.speed).toFixed(0);
        const currentWeather = jsObject.list[0].weather[0].description;
        document.getElementById('humidity').textContent = humidityLevel;
        document.getElementById('temp').textContent = currentTemp;
        document.getElementById('speed').textContent = windSpeed;
        document.getElementById('current').textContent = currentWeather;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[0].weather[0].icon + '.png';  // note the concatenation
        
        
        //const desc = jsObject.list[0].weather[0].description;  // note how we reference the weather array
        //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        // document.getElementById('icon').setAttribute('alt', desc);
    
        const wind = document.querySelector('#windChill');
        if (currentTemp <= 50 && windSpeed >= 3)
        {
            let windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * (windSpeed ** .16)) + (.4275 * currentTemp * (windSpeed ** .16));
            let wC = windChill.toFixed(0);
            wind.textContent = wC;
        }
        else {
          let windChill = "N/A";
          wind.textContent = windChill;
        }
                  //0     1           2           3           4           5           6
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //I got this part of the code from Adam since I wasn't there on Tuesday and I didn't really understand it. I do now, and I will write a couple notes 'cause I've learned this like three times and keep forgetting. It's super cool tho.
        let today = new Date(jsObject.list[0].dt_txt); //"2021-03-23 03:00:00" takes that and formats it like this: Tue Mar 23 2021 03:00:00 GMT-0600 (Mountain Daylight Time)
        console.log("Today is", today); //output to console bc why not
        //document.getElementById('today').innerText = dayNames[today.getDay()]; //new Date("2021-03-23 03:00:00").getDay(); //outputs a 2 //dayNames[2] = Tuesday //this: getDay("2021-03-23 03:00:00") is not an alternitive to this code
        //document.getElementById("date").innerText = today.toLocaleDateString() //new Date("2021-03-23 03:00:00").toLocaleDateString(); //outputs 3/23/2021 //cool built in java!
    
        for (var i = 0; i < jsObject.list.length; i++)
        {
            if(new Date(jsObject.list[i].dt_txt).getHours() == 18)
            {
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';  // note the concatenation
                const desc = jsObject.list[i].weather[0].description;  // note how we reference the weather array
    
                //<section><div><h2></h2><img><p></p><h1></h1><div></section>
                let card = document.createElement('section');
                let weekday = document.createElement('h2');
                let image = document.createElement('img');
                let currentWeatherWord = document.createElement('p');
                let temperature = document.createElement('h1');
    
                weekday.textContent = dayNames[new Date(jsObject.list[i].dt_txt).getDay()];
    
                image.setAttribute('src', imagesrc);  // focus on the setAttribute() method
                image.setAttribute('alt', desc);
    
                currentWeatherWord.textContent = jsObject.list[i].weather[0].description;
                temperature.textContent = parseFloat(jsObject.list[i].main.temp).toFixed(0) + " °F";
    
    
                card.appendChild(weekday);
                card.appendChild(image);
                card.appendChild(currentWeatherWord);
                card.appendChild(temperature);
                document.getElementById('forecastJava').appendChild(card);
            }
        }
      });
    });*/
