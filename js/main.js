const drinks = [
    {
        name: '12OZ Pepsi Zero sugar',
        img:'https://www.pepsi.com/en-us/uploads/images/can-pepsi-zero-sugar.png',
        qty:[
            {
                6:4.99,
                12:9.99,
                24:19.99,
                48:39.99
            }
        ],

    },
    {
        name: '12OZ Pepsi',
        img:'https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757',
        qty:[
            {
                6:4.99,
                12:9.99,
                24:19.99,
                48:39.99
            }
        ],

    },
    {
        name: '12oz Pepsi Cherry',
        img:'https://www.pepsi.com/en-us/uploads/images/can-pepsi-cherry-v2.png',
        qty:[
            {
                6:4.99,
                12:9.99,
                24:19.99,
                48:39.99
            }
        ],

    },
    {
        name: '12oz Pepsi Mango',
        img:'https://www.pepsi.com/en-us/uploads/images/can-pepsi-mango.png',
        qty:[
            {
                6:4.99,
                12:9.99,
                24:19.99,
                48:39.99
            }
        ],

    }
]
let bro = document.querySelector('dude')
let price1 = document.querySelector('.price1')
let price2 = document.querySelector('.price2')
let price3 = document.querySelector('.price3')
let price4 = document.querySelector('.price4')
let qt1 = document.querySelector('.qt1')
let qt2 = document.querySelector('.qt2')
let qt3 = document.querySelector('.qt3')
let qt4 = document.querySelector('.qt4')
let qt5 = document.querySelector('.qt5')
let qt6 = document.querySelector('.qt6')
let qt7 = document.querySelector('.qt7')
let qt8 = document.querySelector('.qt8')
let qt9 = document.querySelector('.qt9')
let qt10 = document.querySelector('.qt10')
let qt11 = document.querySelector('.qt11')
let qt12 = document.querySelector('.qt12')
let qt13 = document.querySelector('.qt13')
let qt14 = document.querySelector('.qt14')
let qt15 = document.querySelector('.qt15')
let qt16 = document.querySelector('.qt16')
let button1 = document.querySelector('.button1')

function dude(){
    qt1.addEventListener('click',() => {
        price1.innerHTML = '$' + 4.99
    })
    qt2.addEventListener('click',() => {
        price1.innerHTML = '$' + 9.96
    })
    qt3.addEventListener('click',() => {
        price1.innerHTML = '$' + 19.92
    })
    qt4.addEventListener('click',() => {
        price1.innerHTML = '$' + 39.84
    })
    qt5.addEventListener('click',() => {
        price2.innerHTML = '$' + 4.99
    })
    qt6.addEventListener('click',() => {
        price2.innerHTML = '$' + 9.96
    })
    qt7.addEventListener('click',() => {
        price2.innerHTML = '$' + 19.92
    })
    qt8.addEventListener('click',() => {
        price2.innerHTML = '$' + 39.84
    })
    qt9.addEventListener('click',() => {
        price3.innerHTML = '$' + 4.99
    })
    qt10.addEventListener('click',() => {
        price3.innerHTML = '$' + 9.96
    })
    qt11.addEventListener('click',() => {
        price3.innerHTML = '$' + 19.92
    })
    qt12.addEventListener('click',() => {
        price3.innerHTML = '$' + 39.84
    })
    qt13.addEventListener('click',() => {
        price4.innerHTML = '$' + 4.99
    })
    qt14.addEventListener('click',() => {
        price4.innerHTML = '$' + 9.96
    })
    qt15.addEventListener('click',() => {
        price4.innerHTML = '$' + 19.92
    })
    qt16.addEventListener('click',() => {
        price4.innerHTML = '$' + 39.84
    })


}
dude()

let cart = document.getElementById('cart')
let cartmodal = document.getElementById('cartmodal')
let sideArrow = document.getElementById('sideArrow');

function cartSide(){
    cart.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('remove').classList.toggle('hidden');
    });
    sideArrow.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('dott').style.display = ('block');
    });
    button1.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('remove').style.display = ('flex');
        
    });


    
}
cartSide();

// let button1 = document.querySelector('.button1')
// let cartItems = document.getElementById('cartItems')
// button1.addEventListener('click',() => {
//     // let cartImg = document.createElement('img')
//     // let pName = document.createElement('h2')
//     // let price = document.createElement('div')
//     // cartImg.src = 
//     for(let items of drinks){
//         let news = document.createElement('div')
//         let cartImg = document.createElement('img')
//         let pName = document.createElement('h2')
//         let price = document.createElement('h3')
//         // let quantity = document.createElement('div')
//         cartImg.src = items.img
//         pName.textContent = items.name
//         price.textContent = items.qty

//         cartItems.appendChild(news)
//         news.appendChild(cartImg)
//         news.appendChild(pName)
//         news.appendChild(price)
//     }
// })

let svg1 = document.getElementById('svg1')
svg1.addEventListener('click',() => {
    svg1.style.color = 'red'
    
})


let cartItems = document.getElementById('cartItems')


button1.addEventListener('click',() => {
    let news = document.createElement('div')
    let quantity = document.createElement('div')
    let price = document.createElement('div')
    let pricenum = 4.99
    news.innerHTML = `
    <img src="https://www.pepsi.com/en-us/uploads/images/can-pepsi-zero-sugar.png" alt="" class="block mr-auto h-36 pt-10 " loading="lazy" />   
    `;
    
    
    

    quantity.innerHTML = `
            <h2 class=" pt-12 w-full flex-none mb-2 text-md  leading-none text-slate-900 font-bold">
                12oz Pepsi Zero Sugar
            </h2>

            <div class=" pt-4 flex space-x-3">
              <div>QTY:</div>
              <button class="plus px-4 bg-gray-200 rounded-full text-lg">+</button>
              <div class="itemNum">6</div>
              <button class="minus px-4 bg-gray-200 rounded-full text-lg">-</button>
              
            </div>  
    `;
    

    cartItems.appendChild(news)
    cartItems.appendChild(quantity)

    let itemnum = document.querySelector('.itemNum')
    let num = 6
    let plus = document.querySelector('.plus')
    let minus = document.querySelector('.minus')
    price.innerHTML = `<div class="pt-20">$4.99</div>`
    plus.addEventListener('click',() =>{
        if(num < 48){
            num *= 2
            pricenum *= 2 
            itemnum.innerHTML = num 
            price.innerHTML = `<div class="pt-20">$${pricenum}</div>`
            
        }
        else{
            num *= ''
            pricenum *= '' 
            itemnum.innerHTML = ''
            price.innerHTML = ''
        }
        

    })
    minus.addEventListener('click',() =>{
        if(num <= 48 && num > 6){
            num /= 2 
            itemnum.innerHTML = num
            pricenum /= 2 
            price.innerHTML = `<div class="pt-20">$${pricenum}</div>`

            
             
        }

        
    })
 
    
    
    
    cartItems.appendChild(price)

    remove.addEventListener("click",() =>{
        cartItems.removeChild(price)
        cartItems.removeChild(quantity)
        cartItems.removeChild(news)
    })
})


// function dude(){
//     let nav = document.getElementById('nav')
//     document.addEventListener('scroll',() => {
//         nav.style.backgroundColor = 'black'
//         nav.style.color = 'white'

// })
// }

// function brody(){
//     myTimeout = setTimeout(dude, 3000)
// }
