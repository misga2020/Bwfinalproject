import React, {useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getProducts } from './utils'
import Product from './component/Product'
import Cart from './component/Cart'
import Checkout from './component/Checkout';
import Header from "./Header"
import ProductDetails from './component/ProductDetails';
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';
import './App.css';














function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  
  
  useEffect(() => {
    getProducts().then((res) =>setProducts(res)).catch((error) => console.log(error));
  
      
      }, []);
      console.log(products);


      const addToCart = (product, quantity) => {
      let index = cart.findIndex((basket) => basket.product.id === product.id);
      if(index>=0) {
        const basketCopy = [...cart];
        basketCopy[index].quantity += parseInt(quantity, 5);
        setCart(basketCopy)
        
      } else {
        setCart([...cart, {
          product, 
          quantity: quantity,
        }]);
      }
      }

      const removeFromCart = (id) => {
        const newBasket = cart.filter((item) => item.product.id !==id);
        setCart(newBasket);
      }
      
      
  

  return (


   
   
  
    <div className="App">
        
    
   <ProductContext.Provider value={{products, setProducts}}>
     <CartContext.Provider value={{cart, setCart, addToCart, removeFromCart}}>
       <Header />
  
        
        <Switch>
        <Route path="/" exact component={Product} />
            
          
          
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
   

          
         
        

        </Switch>
        </CartContext.Provider>
        </ProductContext.Provider>

   
       
       
       

    
    
      
      
      </div>
      
      
     
     
      
    
     
     
    
   
  
    
  );
}

export default App;
