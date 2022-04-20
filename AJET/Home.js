const toggle = document.getElementById('toggle');
let dropdown = false

toggle.addEventListener('click',function(e){
    dropdown = !dropdown
    if(dropdown ){
        let x =  document.querySelector('.navbar-ul').style.display="flex"
        let y= document.querySelector('.hero').style.marginTop="45%"

    }
    else{
        let x =  document.querySelector('.navbar-ul').style.display="none"
        let y= document.querySelector('.hero').style.marginTop="70px"
    }
    
})

const scrollContainer = document.querySelector("body");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});