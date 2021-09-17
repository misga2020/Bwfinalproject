import React, { useContext, useState } from 'react'
import ProductContext from '../context/ProductContext';
import CartContext from '../context/CartContext';
import { useParams } from 'react-router-dom';



 function ProductDetails() {
      const {  products } = useContext(ProductContext)
      const {cart, addToCart} = useContext(CartContext);
      const [quantity, setQuantity] = useState(1);
      
    

       const {id} = useParams();

      const product = products.filter((item) => item.id !== id) ? products[id - 1] : null;

     



      

  

   

   
        

        

    
 


    

    return (
        <div style={{display:"flex", marginTop:"20px", marginBottom:"20px"}}>
            
                  

                      {product ? (
                          
                          
                          
                  <div style={{paddingLeft:"20px"}} >
                        <div style={{fontSize:"17px", fontWeight:"800"}}>
                              <h3 style={{display:"flex"}}>{product.title}</h3>
                        </div>
                        <div style={{marginTop:"20px"}}>
                              
                              <p style={{display:"flex"}}>{product.category}</p>
                        </div>
                        <div style={{marginTop:"20px", diplay:"flex"}}>
                              <p>{product.description}</p>
                        </div>
                        <div>
                              <p>${product.price}</p>
                            
                              <img src={product.image} alt={product.title} style={{width:"180px", height:"180px", objectFit:"contain"}}/> 
                              <select>
                                    <option>Qty: 1</option>
                              </select>
                              <button style={{border:"1px solid", marginTop:"10px", backgroundColor: "#f0c14b", borderColor:"#a88734 #9c7e31 #846a29", color:"111"}} onClick={() => addToCart(products, quantity)}>Add to Cart</button>

                        </div>
                             
                             
                              
                     </div>
                     
                        
                            
                              
                            
                              
                             

                        
                        
                      ) : (
                          <p>There is something wrong</p>
                      )}
                      
             </div> 
                         
                          
                        
                        
                          
                      
                       
                
                
                    
                    
                  

                            
                    
                    
                     
                  
        
                      

                 
                 
                      
                  
                  
                     
                  
                     
                      
                      
                    
                      
                      

           
         
            
            
            
            
        
    )
}


export default ProductDetails;
