$(document).on('keydown',(event)=>{
    switch(event.code){
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":{
            alert("key  code = "+event.code);
            break;
        }
    }
});