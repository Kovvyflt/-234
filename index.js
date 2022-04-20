document.querySelector('.header-btn').addEventListener('click',function(e){
    let divOverlay =  document.getElementById('overlay');

   divOverlay.classList.add('overlay');
   document.querySelector('.form').classList.add('show')
})


document.getElementById('close').addEventListener('click',function(){
    let divOverlay =  document.getElementById('overlay');

    divOverlay.classList.remove('overlay');
    document.querySelector('.form').classList.remove('show')
})

function myFunction(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let x="admin";
    let y="admin";

    if(username==x && password==y){
        alert('Welcome');
    }
    // else{
    //     alert('Please input the write username and password')
    // }
}
