$(document).ready(function (){
        $('#lightSwitch').on('click', function(){
            if ($('body').hasClass('dark-layout')){
                $('body').removeClass('dark-layout');
                $('body').toggleClass('light-layout');
                document.getElementById("lightSwitch").checked = false;
                localStorage.setItem("mode", "light-layout");
            } else{
                $('body').removeClass('light-layout');
                $('body').toggleClass('dark-layout');
                document.getElementById("lightSwitch").checked = true;
                localStorage.setItem("mode", "dark-layout");
            }
        })
        if(!localStorage.getItem("mode")){
            if(window.matchMedia("(prefers-color-scheme: dark-layout)").matches){
                localStorage.setItem("mode", "dark-layout");
            }else{
                localStorage.setItem("mode", "light-layout");
            }
        }
        if(localStorage.getItem("mode") == "dark-layout"){
            $('body').removeClass('light-layout');
            $('body').toggleClass('dark-layout');
            document.getElementById("lightSwitch").checked = true;
        }else{
            $('body').removeClass('dark-layout');
            $('body').toggleClass('light-layout');
            document.getElementById("lightSwitch").checked = false;
        }
    });