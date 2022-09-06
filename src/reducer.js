/* eslint-disable eqeqeq */
const initialState = {
  cart: [],
};
  
const cart = (state = initialState, action = {}) => {
  const cart = [...state.cart];
  switch(action.type) {
    case 'ADD_TO_CART':
      cart.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.image
      });
      return { cart: cart };
    case 'DELETE':
      return {
        ...state,
        cart: cart.filter((item) => item.id != action.payload.id)
      }
      
    // case 'QTY_UP': 
    // return Object.assign({}, cart.map((item) => {
    //   if(item.id == action.payload.id) {
    //     item.quantity += action.up;
    //   }
    //   return item;
    // }))
    default:
      return state;
  }
};

export default cart;