const product = [
  {
    id: 1,
    name: "pc",
    category: "tech",
    avail: 9,
    price:440
  },
  {
    id: 2,
    name: "laptop",
    category: "tech",
    avail: 6,
    price:500,
    
  },
  {
    id: 3,
    name: "monitor",
    category: "tech",
    avail: 5,
    price:700
  },
];
const cart = {};

const add = ({ id, name, avail }) => {
  if (cart[id]) {
    cart[id].qty++;
    cart[id].avail--;
  } else {
    (cart[id] = { id, name, qty: 1, avail }), cart[id].avail--;
  }
};

const remove = ({ id }) => {
  if (cart[id].qty > 1) {
    cart[id].qty--;
    cart[id].avail++;
  } else {
    delete cart[id];
  }
};

const deleteCart = ({ id }) => {
  if (cart[id]) {
    delete cart[id];
  }
};
add(product[0]);
add(product[0]);
add(product[0]);
add(product[0]);
add(product[0]);
add(product[0]);
add(product[2]);
remove(product[0]);
remove(product[0]);
remove(product[0]);
remove(product[0]);
deleteCart(product[0]);



console.log(product.map((item)=>{
    const discount =0.5
    
        return{ id: item.id,
            name:item.name,
            category: item.category,
            avail: item.avail,
            price:item.price,
            discountedprice : item.price=item.price*discount}
    
    })) 

console.log(cart);
