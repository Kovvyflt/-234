 function getPrice(){
    let Price = document.querySelector('.price').children[0].textContent;
    Price.substring(1)
    let quantity=document.getElementById('quantity').value;
    let total= quantity*Price.substring(1);
    document.getElementById('total').value='$'+parseFloat(total);
    document.getElementById('quantity').addEventListener('change',function(e){
        let newtotal = e.target.value * Price.substring(1);
        document.getElementById('total').value= '$'+parseFloat(newtotal).toFixed(2)
    })
 }