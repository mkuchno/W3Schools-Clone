
//id of active dropdown menu
var activeDrop = "";

//add click listener for buttons to hide or unhide dropdown menus
Array.from(document.getElementsByClassName("hidden-drpd")).forEach((dropdown) => {

    dropdown.addEventListener('click', dropdownManager);
});

//add click listener for close buttons in dropdown menus
Array.from(document.getElementsByClassName("close-drpd")).forEach((closeBtn) => {

    closeBtn.addEventListener('click', function(){

        hideDropdowns();
        activeDrop = "";
    });
});

//on click listener for button to hide or unhide hidden menu
document.getElementById("hidden-menu").onclick = function(){

    let content = document.getElementById("hidden-menu-drpd");
    
    if(content.style.display != "block"){

        content.style.display = "block";

    }else{

        content.style.display = "none";
    }
}

//add click listener for button to close hidden menu
document.getElementById("close-menu").addEventListener('click', function(){

    this.parentNode.style.display = "none";
});

//add click listener for buttons to hide or unhide subcontent in hidden menu
Array.from(document.getElementById("hidden-menu-drpd").getElementsByTagName("h2")).forEach((hidden) => {

    let content = hidden.nextElementSibling;

    hidden.addEventListener('click', function(){

        if(content.tagName === "DIV"){

            if(content.style.display != "block"){

                content.style.display = "block";

            }else{

                content.style.display = "none";
            }
        }
    });
});

//when user use mouse scroll on page content (except nav and left menu)
document.getElementById("content").onwheel = function(){

    if(activeDrop != ""){

        hideDropdowns();
        activeDrop = "";
    }

    let hiddenMenu = document.getElementById("hidden-menu-drpd");

    if(hiddenMenu.style.display === "block"){

        //get actual user vertical scroll position without actual height of hidden menu
        let newPos = window.scrollY - hiddenMenu.offsetHeight;

        hiddenMenu.style.display = "none";
        window.scrollTo(0, newPos);
    }
}

//show relevant content
//after clicked button to hide or unhide dropdown menu
function dropdownManager(){

    hideDropdowns();

    let name = this.textContent;

    //each button have same text like content id
    //but need to delete spaces, change it to lowercase and add "-drpd"
    name = name.replace(/\s/g, "").toLowerCase();
    name += "-drpd";

    //if the user clicks on a different dropdown menu button
    //show them and change the button icon
    if(activeDrop != name){

        let toShow = document.getElementById(name);
        toShow.style.display = "grid";

        let icon = this.firstElementChild;
        icon.classList.replace("fa-caret-down", "fa-caret-up");

        activeDrop = name;
    
    //else none dropdown menu is active
    }else{

        activeDrop = "";
    }
}

//hide all dropdown menus and change icon in their hide/unhide buttons
function hideDropdowns(){

    //dropdown menus
    var dropdownsCon = document.getElementsByClassName("menu-drpd");

    //buttons to hide or unhide dropdown menus
    var dropdowns = document.getElementsByClassName("hidden-drpd");

    for(i = 0; i < dropdowns.length; i++){

        dropdowns[i].firstElementChild.classList.replace("fa-caret-up", "fa-caret-down");
        dropdownsCon[i].style.display = "none";
    }
}