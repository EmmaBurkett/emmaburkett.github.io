const cityID = "5604473";
const units = "imperial";
const key = "352e0185b01df25e978724a23f97f5f6";
const requestURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units="+units+"&appid="+key;


// function makeFood() {return "Milk and Enzymes (stomach acid)";}
// cheese = makeFood();
// console.log(cheese);

// makeFood.then(console.log(input));

fetch(requestURL)
    .then(response => { return response.json(); })
    .then( (jsonObject) => {
        const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        console.log(jsonObject);

        // TODAY
        //icon
        let icon = document.getElementById("icon");
        icon.src = "https://openweathermap.org/img/wn/" + jsonObject.list[0].weather[0].icon + ".png";

        //show city
        document.getElementById("city").innerText = jsonObject.city.name;
        //show date
        let today = new Date(jsonObject.list[0].dt_txt);
        console.log("Today is", today);
        document.getElementById('today').innerText = dayNames[today.getDay()];
        document.getElementById("date").innerText = today.toLocaleDateString()

        const currentTemp = Math.round(jsonObject.list[0].main.temp);
        document.getElementById('temp').textContent = currentTemp + "°F";

        // FORECAST LOOP
        let prev_day = today;
		for (let i = 1; i < 40; i++) {
			let day = new Date(jsonObject.list[i].dt_txt);
			if (day.getDay() != prev_day.getDay()) {

                //daily forecast body
                let forecastBody = document.createElement("section");
                forecastBody.classList.add("day");

                //forecast section
				let content = document.createElement("section");
                content.classList.add("forecast");

                // day name
                let dayName = document.createElement("h3");
				dayName.innerText = dayNames[day.getDay()];
				forecastBody.append(dayName);

                // icon
                let iconDisp = document.createElement("img");
                iconDisp.classList.add("daily-icon")
                iconDisp.src = "https://openweathermap.org/img/wn/" + jsonObject.list[i].weather[0].icon + ".png";
                content.append(iconDisp);

                // temp
				let tempDisp = document.createElement("p");
				tempDisp.innerText = Math.round(jsonObject.list[i].main.temp) + " °F";
				content.append(tempDisp);

                forecastBody.append(content);
                document.getElementById("daily").append(forecastBody);

                //Advance day
                prev_day = new Date(day);
			}
		}
    });

    /* <!-- 
    Created by:
    Madelle
    Adam
    Tanner
    Grant Petersen
 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/weather.css">
    <title>Weather Forecast</title>
</head>
<body>
    <section id="current-weather">
        <img id="icon"></i>
        <p id="city"></p>
        <h1 id="temp"></h1>
        <p id="today"></p>
        <p id="date"></p>
    </section>

    <section id="daily"></section>
    <script src="js/get-prediction.js"></script>
</body>
</html> */