
//button for hide/unhide login form - click listener
document.getElementById("login-btn").onclick = function(){

    var loginForm = document.getElementById("login-form");
    
    //if login form isn't active
    if(loginForm.style.display != "flex"){

        let closeDropdownBtns = document.getElementsByClassName("close-drpd");
        
        //close all active dropdown menus before open login form
        for(let c of closeDropdownBtns){

            c.click();
        }

        loginForm.style.display = "flex";

    }else{

        loginForm.style.display = "none";
    }
}

//button for close login form - click listener
document.getElementById("close-form").onclick = function(){

    document.getElementById("login-form").style.display = "none";
}