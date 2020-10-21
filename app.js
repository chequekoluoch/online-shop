//variables

const cartBtn=document.querySelector('.cart-btn')
const closeCartBtn=document.querySelector('.close-cart')
const clearCartBtn=document.querySelector('.clear-cart')
const cartDOM=document.querySelector('.cart')
const cartOverlay=document.querySelector('.cart-overlay')
const cartItems=document.querySelector('.cart-items')
const cartTotal=document.querySelector('.cart-total')
const cartContent=document.querySelector('.cart-content')
const productsDOM=document.querySelector('.products-center')

//cart
let cart= []

//getting the products
class Products {
 async getProducts()  {
     try{
        let result= await fetch("./products.json")
        let data = await result.json()
        let products = data.items;
        products = products.map(item =>{
            const {title,price}=item.fields;
            const {id}= item.sys;
            const image = item.fields.image.fields.file.url;

            return {title,price,id,image}
        })
        return products
     }catch(error){
         console.log(error)
     }
 }
}

//display products
class UI{
displayProducts(products){
    let results = '';
    products.forEach(product=>{
        result +=`
        <!--single product-->
        <article class="product">
            <div class="img-container">
                <img src=${product.image} alt="product one" class="product-img"/>
                <button class="bag-btn" data-id=${product.id}>
                    <i class="fa fa-shopping-cart">
                    </i>
                    add to bag
                </button>
            </div>
            <h3>${product.title}</h3>
            <h4>$${producct.price}</h4>
        </article>
        <!--end of single product-->
        `
    })
    productsDOM.innerHTML=results
}
}

//LOCAL  STORAGE
class Storage{

}

document.addEventListener("DOMContentLoaded", () => {
    const ui= new UI();
    const products = new Products();
    console.log('hello response')
    //get all products
    products.getProducts().then(products => ui.displayProducts(products))
})

const bannerBtn=document.selectElementById('banner')
bannerBtn.addEventListener("Click", ()=>{
    console.log('hey there')
})