window.addEventListener('load', ()=> { 
    const hambutton = document.querySelector('.ham'); //grabs button!!
    const mainnav = document.querySelector('#navigation'); //grabs nav bar

    hambutton.addEventListener('click', ()=>{mainnav.classList.toggle('responsive')},false);//when button clicked toggle responsive css

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('responsive');};//remove when window is large!!!                    
}); 

window.addEventListener('load', ()=> { 
    const hambutton = document.querySelector('.button'); //grabs button!!
    const mainnav = document.querySelector('#navigation'); //grabs nav bar

    hambutton.addEventListener('mouseover', ()=>{mainnav.classList.toggle('response')},false);//when button clicked toggle response css :P

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove('response');};//remove when window is large!!!                    
});

