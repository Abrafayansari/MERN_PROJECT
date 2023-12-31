// manage the cart using the array
const products = [
    {
      id: 1,
      name: "RDR2",
      available: 3,
    },
    {
      id: 2,
      name: "Tekken 7",
      available: 3,
    },
    {
      id: 3,
      name: "Assasins creed",
      available: 1,
    },
    {
      available: 1,
      id: 4,
      name: "Battlefield",
    },
  ];
  let cart = [];
  function addToCart({ id, name, available }) {
    const itemExits = cart.find((item) => {
      if (item.id === id) return true;
      else false;
    });
    if (itemExits) {
      cart = cart.map((item) => {
        if (item.id === id) {
          item.qty++;
        }
        return item;
      });
    } else cart.push({ id, name, available, qty: 1 });
  }
  function decreaseFromCart({ id, name, available }) {
    const itemExits = cart.find((item) => {
      if (item.id === id) return true;
      else false;
    });
    if (itemExits) {
      cart = cart.map((item) => {
        if (item.id === id) {
          if (item.qty > 0) {
            item.qty--;
          }
        }
        return item;
      });
      cart = cart.filter((item) => {
        if (item.qty > 0) return true;
        else return false;
      });
    }
  }
  
  function removeFromCart({ id }) {
    cart = cart.filter((item) => {
      if (item.id == id) return false;
      else return true;
    });
  }
  addToCart(products[0]);
  addToCart(products[1]);
  addToCart(products[3]);
  addToCart(products[3]);
  decreaseFromCart(products[3]);
  decreaseFromCart(products[3]);
  
  // removeFromCart(products[3]);
  
  console.log(cart);