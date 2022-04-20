const toggle = document.getElementById('toggle');
let dropdown = false

toggle.addEventListener('click',function(e){
    dropdown = !dropdown
    if(dropdown){
        let x =  document.querySelector('.navbar-ul').style.display="flex"
        let y = document.querySelector('.header').style.height="32%"
    }
    else{
        let x =  document.querySelector('.navbar-ul').style.display="none"
        let y = document.querySelector('.header').style.height="9%"
    }
    
})