let mobileNav = document.getElementById('mobile-nav');
console.log(mobileNav);

// function OpenNav(){
//     mobileNav.className = "block";
//     console.log(mobileNav);
// }

// function CloseNav(){
//     mobileNav.className = "hidden";
//     console.log(mobileNav);
// }

function ToggleNav(){
    if(mobileNav.className == "hidden"){
        mobileNav.className = "block";
    }
    else{
        mobileNav.className = "hidden";
    }
    console.log(mobileNav);
}    


