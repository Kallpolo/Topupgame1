document.onkeydown = function(e) {
    if(event.keyCode == 123) {
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'H'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'F'.charCodeAt(0)){
    return false;
    }
    if(e.ctrlKey && e.keyCode == 'E'.charCodeAt(0)){
    return false;
    }
    }
        //Script for disabling right click on mouse
        function clickdsb(){
        if (event.button==2){
        return false;
        }
        }
        function clickbsb(e){
        if (document.layers||document.getElementById&&!document.all){
        if (e.which==2||e.which==3){
        alert(message);
        return false;
        }
        }
        }
        if (document.layers){
        document.captureEvents(Event.MOUSEDOWN);
        document.onmousedown=clickbsb;
        }
        else if (document.all&&!document.getElementById){
        document.onmousedown=clickdsb;
        }
        
        document.oncontextmenu=new Function("alert(message);return false")