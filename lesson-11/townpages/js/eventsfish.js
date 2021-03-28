const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns[2].events.length; i++ ) { // Preston, Fish Haven, Soda Springs
            let h2Name = document.createElement('h2');
            h2Name.textContent = towns[2].events[i];
            document.getElementById('events').appendChild(h2Name);
    }
  });