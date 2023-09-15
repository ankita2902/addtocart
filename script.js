 const product =[

    {
        id:0,
        image:'images/mobile.jpg',
        title:'mobile',
        price:120
    },

    {
        id:1,
        image:'images/ap.jpg',

        
       
        title:'air-pod',
        price:80
    },
    {
        id:2,
        image:'images/lp.jpg',
        title:'Laptop',
        price:180
    },
    {
        id:3,
        image:'images/camera.jpg',
        title:'Camera',
        price:100
    },
 ];

const categories =[...new Set(product.map((item) =>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item)=>{
        var{image,title,price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class="bottom">
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +"<button onClick ='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')



    var cart =[]

function addtocart(a){
    cart.push({...categories[a]})
    displaycart();
}
function delElement(a){
    cart.splice(a,1)
    displaycart();
}

function displaycart(a){
    let j=0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML= "your cart is empty";
        document.getElementById("total").innerHTML ="$" + 0 +".00";
    }
else{
    document.getElementById('cartItem').innerHTML= cart.map((item)=>{
        var{image,title,price} = item;
        total=total+price;
        document.getElementById("total").innerHTML="$"+ total +".00"

        return(
            `<div class='cart-item'>
            <div class='row-img'>
            <img class='rowimg' src=${image}
            </div>
            <p style ='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>${price}.00</h2>`+
            "<i class='fa-solid fa-trash' onClick ='delElement("+(j++)+")'></i></div>"
        );
    })
}
}
