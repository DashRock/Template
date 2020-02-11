let hamO = document.getElementById('hideNav');
let hamC = document.getElementById('navHide');
let ele2 = document.getElementById("hamB2");
let ele1 = document.getElementById("hamB1");
let ele3 = document.getElementById("side-btn-1");
hamO.addEventListener('click', togNav);
ele3.addEventListener('click', openContact);

  
function togNav(){
    
    ele1.style.display = "none";
    hamC.style.display = "block";
    hamC.style.position = "absolute";
    hamC.style.marginLeft = 0 + 'px';
    hamC.style.marginTop = 0 + 'px';
    hamC.style.width = 400 + 'px';
    hamC.style.animation = 'entry 1000ms ease-in';
    ele2.style.display = "flex";
    hamO.removeEventListener('click', togNav);
    hamO.addEventListener('click', togOn);
    function togOn(){
        hamC.style.animation = 'exit 750ms ease-out';
        ele2.style.display = "none";
        hamC.style.display = 'none';
        ele1.style.display = "flex";
        hamO.addEventListener('click', togNav);
    }

 
} 

