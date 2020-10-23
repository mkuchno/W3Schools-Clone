
//button for change theme - click listener
document.getElementById("change-theme").addEventListener('click', function(){
    
    //get all changeable paragraphs to change style
    var toChange = document.getElementsByClassName("var-theme");

    //variable to know what theme is active
    var darkTheme = false;
    
    if(toChange[0].style.color == "white"){

        var darkTheme = true;
    }
    
    //each paragraph    
    for(let p of toChange){

        //change light background and font color to dark or vice versa
        if(!darkTheme){

            p.style.background = "rgb(40,44,52)";
            p.style.borderColor = "rgb(40,44,52)";
            p.style.color = "white";

        }else{

            p.style.background = "white";
            p.style.borderColor = "#4CAF50";
            p.style.color = "black";
        }

        //get all childrens of paragraph with span tag
        let spans = p.getElementsByTagName("span");

        //each span of paragraph
        for(let s of spans){

            if(!darkTheme){

                //change light colors to dark colors or vice versa
                //with the help of the classes in the style sheets
                if(s.className === "txt-red"){

                    s.classList.replace("txt-red", "txt-red-dark");

                }else if(s.className === "txt-blue"){

                    s.classList.replace("txt-blue", "txt-blue-dark");

                }else if(s.className === "txt-brown"){

                    s.classList.replace("txt-brown", "txt-brown-dark");
                }

            }else{

                if(s.className === "txt-red-dark"){

                    s.classList.replace("txt-red-dark", "txt-red");

                }else if(s.className === "txt-blue-dark"){

                    s.classList.replace("txt-blue-dark", "txt-blue");

                }else if(s.className === "txt-brown-dark"){

                    s.classList.replace("txt-brown-dark", "txt-brown");
                }
            }
        }
    }

    //save cookie
    if(!darkTheme){ 
            
        document.cookie = "dark-theme=true";

    }else{

        document.cookie = "dark-theme=false";
    }
    
});