
function modal(picture,price,name){

    
    let content_modal = 
    `<div class="modal">
        <form action="">
            <div class="form-top">
                <h1 class="form-h1">Order Now</h1>
                <div id="close">x</div>
            </div>

            <div class="inside-form">
                <div class="form-img">
                    <img src=${picture} alt="" >
                </div>

                <div class="form-body">
                    <input placeholder="${name}">
                    <input type="number" value="1" id="quantity" min="1">
                    Price:
                    <div class="price">
                        <p>${price}</p>
                    </div>
                    
                    Total:<input type="text" id="total">
                    <button class="form-btn">Order</button>
                </div>    
            </div>

            <div class="desc">
                <h1>Description</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore optio est eaque cupiditate modi,
                    veritatis dolorum quo aut nostrum dolorem sequi, neque maxime odio animi totam, eum laborum repudiandae unde!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut sapiente nihil ad velit voluptatibus! 
                    Ad aut voluptatibus obcaecati suscipit modi unde? Illo nisi odio culpa consectetur corrupti quidem a labore?</p>
            </div>

            
        </form>
    </div>`

    document.getElementById('overlay').classList.add('overlay')

    document.getElementById('overlay').innerHTML= content_modal
    
    close();
    getPrice();



}

function close(){
    document.getElementById('close').addEventListener('click',function(){
        let divOverlay =  document.getElementById('overlay');
    
        divOverlay.classList.remove('overlay');
        document.getElementById('overlay').innerHTML=""
       
    })
}
