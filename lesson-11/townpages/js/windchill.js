window.addEventListener('load', ()=> {
    const temp = parseFloat(document.querySelector('#temp').innerHTML);
    const windSpeed = parseFloat(document.querySelector('#speed').innerHTML);
    const wind = document.querySelector('#windChill');

    let windChill = 35.74 + (0.6215 * temp) - (35.75 * (windSpeed ** .16)) + (.4275 * temp * (windSpeed ** .16));
    let wC = windChill.toFixed(0)
    wind.textContent = wC;
});
