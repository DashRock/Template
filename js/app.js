let hamO = document.getElementById('hideNav');
let hamC = document.getElementById('navHide');
let ele2 = document.getElementById("hamB2");
let ele1 = document.getElementById("hamB1");
let ele3 = document.getElementById('brand');
let ele4 = document.getElementById('billboard')
hamO.addEventListener('click', togNav);
  
function togNav(){
    
    ele1.style.display = "none";
    hamC.style.display = "block";
    hamC.style.position = "absolute";
    hamC.style.marginLeft = 0 + 'px';
    hamC.style.marginTop = 0 + 'px';
    hamC.style.width = 400 + 'px';
    hamC.style.animation = 'entry 750ms ease-in';
    ele2.style.display = "flex";
    ele4.style.width = "31.25vw";
    hamO.removeEventListener('click', togNav);
    hamO.addEventListener('click', togOut);
    function togOut(){
      
        ele2.style.display = "none";
        ele4.style.width = "60vw";
        ele1.style.display = "flex";
        hamO.addEventListener('click', togNav);
        hamC.style.display = 'none';
     
    }
    
} 


function openService(serviceName) {
    var i;
    var x = document.getElementsByClassName("service");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }     
    document.getElementById(serviceName).style.display = "block";
      
  }

