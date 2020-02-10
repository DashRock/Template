let hamO = document.getElementById('hideNav');
let hamC = document.getElementById('navHide');
let ele2 = document.getElementById("hamB2");
let ele1 = document.getElementById("hamB1");
hamO.addEventListener('click', togNav);

  
function togNav(){
    
    ele1.style.display = "none";
    hamC.style.display = "block";
    hamC.style.position = "absolute";
    hamC.style.marginLeft = 0 + 'px';
    hamC.style.marginTop = 0 + 'px';
    hamC.style.width = 400 + 'px';
  
    
    ele2.style.display = "flex";
    hamO.removeEventListener('click', togNav);
    hamO.addEventListener('click', togOn);
    function togOn(){
        ele1.style.display = "flex";
        ele2.style.display = "none";
        hamC.style.display = "none";
        hamO.addEventListener('click', togNav);
    }

 
} 

