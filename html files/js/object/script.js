let item ={
    name :'phone',
    price:'25000',
    quantity:1
}
console.log(item)

//dot notation
console.log(item.price)
item.price =26000
console.log(item.price)
item.returnable = true
console.log(item)

//square brcket notation
console.log(item['price'])
item['returnable']=false

let key = 'price'
item[key] = 27500
item.key = 28000//doen't work
console.log(item)

item = {
    name :'phone',
    price:25000,
    quantity:1,
    buy: function() {
        console.log('item added to cart')
    },
    addToList(){
        console.log('item added to card')
    }
}
item.buy()
item.addToList()