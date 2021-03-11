document.onkeydown = (event)=>{
    switch(event.code){
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowRight':
        case 'ArrowLeft': {
            alert ('key code = '+event.code);
            console.log('press');
            break;
        }
    }
}