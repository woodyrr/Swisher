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
let button2 = document.querySelector('.button2')
let button3 = document.querySelector('.button3')
let button4 = document.querySelector('.button4')
let remove1 = document.getElementById('remove1')
let remove2 = document.getElementById('remove2')
let remove3 = document.getElementById('remove3')
let remove4 = document.getElementById('remove4')

function dude(){
    qt1.addEventListener('click',() => {
        price1.innerHTML = '$' + 4.99
    })
    qt2.addEventListener('click',() => {
        price1.innerHTML = '$' + 9.98
    })
    qt3.addEventListener('click',() => {
        price1.innerHTML = '$' + 19.96
    })
    qt4.addEventListener('click',() => {
        price1.innerHTML = '$' + 39.92
    })
    qt5.addEventListener('click',() => {
        price2.innerHTML = '$' + 4.99
    })
    qt6.addEventListener('click',() => {
        price2.innerHTML = '$' + 9.98
    })
    qt7.addEventListener('click',() => {
        price2.innerHTML = '$' + 19.96
    })
    qt8.addEventListener('click',() => {
        price2.innerHTML = '$' + 39.92
    })
    qt9.addEventListener('click',() => {
        price3.innerHTML = '$' + 4.99
    })
    qt10.addEventListener('click',() => {
        price3.innerHTML = '$' + 9.98
    })
    qt11.addEventListener('click',() => {
        price3.innerHTML = '$' + 19.96
    })
    qt12.addEventListener('click',() => {
        price3.innerHTML = '$' + 39.92
    })
    qt13.addEventListener('click',() => {
        price4.innerHTML = '$' + 4.99
    })
    qt14.addEventListener('click',() => {
        price4.innerHTML = '$' + 9.98
    })
    qt15.addEventListener('click',() => {
        price4.innerHTML = '$' + 19.96
    })
    qt16.addEventListener('click',() => {
        price4.innerHTML = '$' + 39.92
    })


}
dude()

let cart = document.getElementById('cart')
let cartmodal = document.getElementById('cartmodal')
let sideArrow = document.getElementById('sideArrow');

function cartSide(){
    cart.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        
        
    });
    sideArrow.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('dott').style.display = ('block');
    });
    button1.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('remove1').classList.toggle('hidden');
        
        
    });
    button2.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('remove2').classList.toggle('hidden');
        
    });
    button3.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('remove3').classList.toggle('hidden');
        
    });
    button4.addEventListener('click',() =>{
        document.getElementById('cartmodal').classList.toggle('hidden');
        document.getElementById('remove4').classList.toggle('hidden');
        
    });


    
}
cartSide();


//red heart svg
function svg(){
    let svg1 = document.getElementById('svg1')
svg1.addEventListener('click',() => {
    svg1.style.color = 'red'
    
})
let svg2 = document.getElementById('svg2')
svg2.addEventListener('click',() => {
    svg2.style.color = 'red'
    
})
let svg3 = document.getElementById('svg3')
svg3.addEventListener('click',() => {
    svg3.style.color = 'red'
    
})
let svg4 = document.getElementById('svg4')
svg4.addEventListener('click',() => {
    svg4.style.color = 'red'
    
})
}
svg()


function cart1(){
    let cartItems1 = document.getElementById('cartItems1')


    button1.addEventListener('click',() => {
        let news = document.createElement('div')
        button1.disabled = true
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
              <button class="minus px-4 bg-gray-200 rounded-full text-lg">-</button>
              <div class="itemNum">6</div>
              <button class="plus px-4 bg-gray-200 rounded-full text-lg">+</button>
              
            </div>  
        `;
    

        cartItems1.appendChild(news)
        cartItems1.appendChild(quantity)

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
        
        

        })
        minus.addEventListener('click',() =>{
            if(num <= 48 && num > 6){
                num /= 2 
                itemnum.innerHTML = num
                pricenum /= 2 
                price.innerHTML = `<div class="pt-20">$${pricenum}</div>`

            
             
            }

        
    })
 
    cartItems1.appendChild(price)

    remove1.addEventListener("click",() =>{
        cartItems1.removeChild(price)
        cartItems1.removeChild(quantity)
        cartItems1.removeChild(news)
        button1.disabled = false
        remove1.classList.toggle('hidden');
    })
})
}
cart1()





// cart2
function cart2(){
    let cartItems2 = document.getElementById('cartItems2')


button2.addEventListener('click',() => {
    let news2 = document.createElement('div')
    button2.disabled = true 
    let quantity2 = document.createElement('div')
    let price2 = document.createElement('div')
    let pricenum2 = 4.99
    news2.innerHTML = `
    <img src="https://www.pepsi.com/en-us/uploads/images/can-pepsi.png?mtime=20180110134757" alt="" class="block mr-auto h-36 pt-10 " loading="lazy" />   
    `;
    
    
    

    quantity2.innerHTML = `
            <h2 class=" pt-12 text-center w-full flex-none mb-2 text-md  leading-none text-slate-900 font-bold">
                12oz Pepsi
            </h2>

            <div class=" pt-4 flex space-x-3">
              <div>QTY:</div>
              <button class="minus2 px-4 bg-gray-200 rounded-full text-lg">-</button>
              <div class="itemNum2">6</div>
              <button class="plus2 px-4 bg-gray-200 rounded-full text-lg">+</button>
              
            </div>  
    `;
    

    cartItems2.appendChild(news2)
    cartItems2.appendChild(quantity2)

    let itemnum2 = document.querySelector('.itemNum2')
    let num = 6
    let plus = document.querySelector('.plus2')
    let minus = document.querySelector('.minus2')
    price2.innerHTML = `<div class="pt-20">$4.99</div>`
    plus.addEventListener('click',() =>{
        if(num < 48){
            num *= 2
            pricenum2 *= 2 
            itemnum2.innerHTML = num 
            price2.innerHTML = `<div class="pt-20">$${pricenum2}</div>`
            
        }
        
        

    })
    minus.addEventListener('click',() =>{
        if(num <= 48 && num > 6){
            num /= 2 
            itemnum2.innerHTML = num
            pricenum2 /= 2 
            price2.innerHTML = `<div class="pt-20">$${pricenum2}</div>`

            
             
        }

        
    })
 
    
    
    
    cartItems2.appendChild(price2)

    remove2.addEventListener("click",() =>{
        cartItems2.removeChild(price2)
        cartItems2.removeChild(quantity2)
        cartItems2.removeChild(news2)
        button2.disabled = false
        remove2.classList.toggle('hidden');
    })
})

}
cart2()

// cart3
function cart3(){
    let cartItems3 = document.getElementById('cartItems3')


button3.addEventListener('click',() => {
    let news3 = document.createElement('div')
    button3.disabled = true 
    let quantity3 = document.createElement('div')
    let price3 = document.createElement('div')
    let pricenum3 = 4.99
    news3.innerHTML = `
    <img src="https://www.pepsi.com/en-us/uploads/images/can-pepsi-cherry-v2.png" alt="" class="block mr-auto h-36 pt-10 " loading="lazy" />   
    `;
    
    
    

    quantity3.innerHTML = `
            <h2 class=" pt-12 text-center w-full flex-none mb-2 text-md  leading-none text-slate-900 font-bold">
                12oz Pepsi Cherry
            </h2>

            <div class=" pt-4 flex space-x-3">
              <div>QTY:</div>
              <button class="minus3 px-4 bg-gray-200 rounded-full text-lg">-</button>
              <div class="itemNum3">6</div>
              <button class="plus3 px-4 bg-gray-200 rounded-full text-lg">+</button>
              
            </div>  
    `;
    

    cartItems3.appendChild(news3)
    cartItems3.appendChild(quantity3)

    let itemnum3 = document.querySelector('.itemNum3')
    let num = 6
    let plus = document.querySelector('.plus3')
    let minus = document.querySelector('.minus3')
    price3.innerHTML = `<div class="pt-20">$4.99</div>`
    plus.addEventListener('click',() =>{
        if(num < 48){
            num *= 2
            pricenum3 *= 2 
            itemnum3.innerHTML = num 
            price3.innerHTML = `<div class="pt-20">$${pricenum3}</div>`
            
        }
        
        

    })
    minus.addEventListener('click',() =>{
        if(num <= 48 && num > 6){
            num /= 2 
            itemnum3.innerHTML = num
            pricenum3 /= 2 
            price3.innerHTML = `<div class="pt-20">$${pricenum3}</div>`

            
             
        }

        
    })
 
    
    
    
    cartItems3.appendChild(price3)

    remove3.addEventListener("click",() =>{
        cartItems3.removeChild(price3)
        cartItems3.removeChild(quantity3)
        cartItems3.removeChild(news3)
        button3.disabled = false
        remove3.classList.toggle('hidden');
    })
})

}
cart3()

// cart4
function cart4(){
    let cartItems4 = document.getElementById('cartItems4')


button4.addEventListener('click',() => {
    let news4 = document.createElement('div')
    button4.disabled = true 
    let quantity4 = document.createElement('div')
    let price4 = document.createElement('div')
    let pricenum4 = 4.99
    news4.innerHTML = `
    <img src="https://www.pepsi.com/en-us/uploads/images/can-pepsi-mango.png" alt="" class="block mr-auto h-36 pt-10 " loading="lazy" />   
    `;
    
    
    

    quantity4.innerHTML = `
            <h2 class=" pt-12 text-center w-full flex-none mb-2 text-md  leading-none text-slate-900 font-bold">
                12oz Pepsi Cherry
            </h2>

            <div class=" pt-4 flex space-x-3">
              <div>QTY:</div>
              <button class="minus4 px-4 bg-gray-200 rounded-full text-lg">-</button>
              <div class="itemNum4">6</div>
              <button class="plus4 px-4 bg-gray-200 rounded-full text-lg">+</button>
              
            </div>  
    `;
    

    cartItems4.appendChild(news4)
    cartItems4.appendChild(quantity4)

    let itemnum4 = document.querySelector('.itemNum4')
    let num = 6
    let plus = document.querySelector('.plus4')
    let minus = document.querySelector('.minus4')
    price4.innerHTML = `<div class="pt-20">$4.99</div>`
    plus.addEventListener('click',() =>{
        if(num < 48){
            num *= 2
            pricenum4 *= 2 
            itemnum4.innerHTML = num 
            price4.innerHTML = `<div class="pt-20">$${pricenum4}</div>`
            
        }
        
        

    })
    minus.addEventListener('click',() =>{
        if(num <= 48 && num > 6){
            num /= 2 
            itemnum4.innerHTML = num
            pricenum4 /= 2 
            price4.innerHTML = `<div class="pt-20">$${pricenum4}</div>`

            
             
        }

        
    })
 
    
    
    
    cartItems4.appendChild(price4)

    remove4.addEventListener("click",() =>{
        cartItems4.removeChild(price4)
        cartItems4.removeChild(quantity4)
        cartItems4.removeChild(news4)
        button4.disabled = false
        remove4.classList.toggle('hidden');
    })
})

}
cart4()












function dawg(){
    let nav = document.getElementById('nav')
    var x = window.matchMedia("(max-width: 500px)")
    document.addEventListener('scroll',() => {
        if(x.matches){
            nav.style.backgroundColor = '#e2dddd'
        }
        else{
            nav.style.backgroundColor = 'white'
        }
        
        

})
}

dawg()
