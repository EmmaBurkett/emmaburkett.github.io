const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json(); //what does response.json() mean?
  })
  .then(function (jsonObject) { //what does jsonObject mean?
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {  // temporary checking for valid response and data parsing
        let card = document.createElement('section'); //creates a <section> tag </section>
        let wordContainer = document.createElement('div');
        let h2Name = document.createElement('h2');
        let pDate = document.createElement('p');
        let pPlace = document.createElement('p');
        let image = document.createElement('img');

        h2Name.textContent = prophets[i].name + ' ' + prophets[i].lastname; //prophets is an array - name is part of an object; hence the array notation AND the object noation. So this means prophets - the first part of the array (Joseph Smith's part) - and the name inside the first part of the array (which is called an object only because it has multipule variables and is wrapped in {})
        pDate.textContent = "Date of Birth: " + prophets[i].birthdate;
        pPlace.textContent = "Place of Birth: " + prophets[i].birthplace;

        card.appendChild(wordContainer);
        wordContainer.appendChild(h2Name); // puts <h2></h2> inside our <section> tag <h2></h2> </section>
        wordContainer.appendChild(pDate);
        wordContainer.appendChild(pPlace);
        card.appendChild(image); //<section> <h2></h2> <p></p> <p></p> <img> <section> //<section> = card

        image.setAttribute('src', prophets[i].imageurl); //manipulates html that we created above for the image!
        image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order);//manipulates the html that we created above for the image in order to insert the fancy text for blind people :) //defines alt // <img src="img.jpeg" alt="describes jpeg">

        document.querySelector('div.cards').appendChild(card);
    }
  });