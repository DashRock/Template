let hamO = document.getElementById('hideNav');
let hamC = document.getElementById('navHide');
let cForm = document.getElementById('cForm');
let specs = document.getElementById('specials');
let evnt = document.getElementById('events');
let staff = document.getElementById('leadStaff');
let ele2 = document.getElementById("hamB2");
let ele1 = document.getElementById("hamB1");
let ele3 = document.getElementById("side-btn-1");
let ele4 = document.getElementById("side-btn-2");
let ele5 = document.getElementById("side-btn-3");
let ele6 = document.getElementById("side-btn-4");
hamO.addEventListener('click', togNav);
ele3.addEventListener('click', openContact);
ele4.addEventListener('click', openSpecials);
ele5.addEventListener('click', openEvents);
ele6.addEventListener('click', openStaff);

  
function togNav(){
    
    ele1.style.display = "none";
    hamC.style.display = "block";
    hamC.style.position = "absolute";
    hamC.style.marginLeft = 0 + 'px';
    hamC.style.marginTop = 0 + 'px';
    hamC.style.width = 400 + 'px';
    hamC.style.animation = 'entry 750ms ease-in';
    ele2.style.display = "flex";
    hamO.removeEventListener('click', togNav);
    hamO.addEventListener('click', togOut);
    function togOut(){
        hamC.style.animation = 'exit 750ms ease-out';
        ele2.style.display = "none";
        hamC.style.display = 'none';
        ele1.style.display = "flex";
        hamO.addEventListener('click', togNav);
    }
} 

function openContact(){
    
    cForm.style.display = "block";
    specs.style.display = "none";
    evnt.style.display = "none";
    staff.style.display = "none";
    ele3.removeEventListener('click', openContact);
    ele3.addEventListener('click', closeContact);

    function closeContact(){
        cForm.style.display = "none";
        ele3.removeEventListener('click', closeContact);
        ele3.addEventListener('click', openContact);
    }
}

function openSpecials(){
    
    specs.style.display = "block";
    cForm.style.display = "none";
    evnt.style.display = "none";
    staff.style.display = "none";
    ele4.removeEventListener('click', openSpecials);
    ele4.addEventListener('click', closeSpecials);

    function closeSpecials(){
        specs.style.display = "none";
        ele4.removeEventListener('click', closeSpecials);
        ele4.addEventListener('click', openSpecials);
    }
}

function openEvents(){
    
    evnt.style.display = "block";
    cForm.style.display = "none";
    specs.style.display = "none";
    staff.style.display = "none";
    ele5.removeEventListener('click', openEvents);
    ele5.addEventListener('click', closeEvents);

    function closeEvents(){
        evnt.style.display = "none";
        ele5.removeEventListener('click', closeEvents);
        ele5.addEventListener('click', openEvents);
    }
}

function openStaff(){
    
    staff.style.display = "block";
    cForm.style.display = "none";
    specs.style.display = "none";
    evnt.style.display = "none";
    ele6.removeEventListener('click', openStaff);
    ele6.addEventListener('click', closeStaff);

    function closeStaff(){
        staff.style.display = "none";
        ele6.removeEventListener('click', closeStaff);
        ele6.addEventListener('click', openStaff);
    }
}

