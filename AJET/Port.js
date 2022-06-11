const toggle = document.getElementById('toggle');
let dropdown = false

toggle.addEventListener('click',function(e){
    dropdown = !dropdown
    if(dropdown ){
        let x =  document.querySelector('.navbar-ul').style.display="flex"
        let y = document.querySelector('.header').style.height="12%"
    }
    else{
        let x =  document.querySelector('.navbar-ul').style.display="none"
        let y = document.querySelector('.header').style.height="10%"
    }
    
})
const reset = document.querySelector('.icon')
if(reset){
    reset.addEventListener('click',function(e){
        window.scrollTo({top: 0, behavior: 'smooth'});
    })
}
