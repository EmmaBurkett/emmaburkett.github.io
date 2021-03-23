window.addEventListener('load', () => {
const appid  = "5b70937232e0e8d8c562b29e7c24a2c0";
const cityID = "5604473";
const units = "imperial";
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=" + units + "&appid=" + appid;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = jsObject.list[0].main.temp;
    const humidityLevel = jsObject.list[0].main.humidity;
    const windSpeed = jsObject.list[0].wind.speed;
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

    let windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * (windSpeed ** .16)) + (.4275 * currentTemp * (windSpeed ** .16));
    let wC = windChill.toFixed(0);
    wind.textContent = wC;
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
            temperature.textContent = jsObject.list[i].main.temp + " °F";


            card.appendChild(weekday);
            card.appendChild(image);
            card.appendChild(currentWeatherWord);
            card.appendChild(temperature);
            document.getElementById('forecastJava').appendChild(card);
        }
    }
  });
});