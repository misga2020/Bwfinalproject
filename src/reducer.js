export const intialState = {
    cart: [],
    user: null,
    quantity: 1
}





function reducer(state, action) {
    console.log(action);

    switch(action.type) {
        case "add_to_cart": 
            return {
                ...state,
                cart:[...state.cart, action.item]
            }

            case "Remove from basket":
                let newBasket = [...state.basket];
                const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);


                if(index>= 0){
                    newBasket.splice(index, 1);  
                  } else {
                      console.warn(`cant remove product (id: ${action.id}) as its no in basket`);
                  }
                return { 
                    ...state, 
                    basket:newBasket, 
                }

            
            default: 
            return state;
    }
   
 
}




export default reducer;
