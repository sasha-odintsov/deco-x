/* eslint-disable eqeqeq */
const initialState = {
  cart: [],
};
  
const cart = (state = initialState, action = {}) => {
  const cart = [...state.cart];
  const { payload } = action;
  switch(action.type) {
    case 'ADD_TO_CART':
      cart.push({
        id: payload.id,
        title: payload.title,
        price: payload.price,
        image: payload.image
      });
      return { cart: cart };

    case 'DELETE':
      return {
        ...state,
        cart: cart.filter((item) => item.id != payload.id)
      }
      
    case 'DELETE_ONE': 
      const setIndex = cart.findIndex((item) => item.id == payload.id);
      if (setIndex !== -1) {
        cart.splice(setIndex, 1)
      }
      return { cart: cart };

    default:
      return state;
  }
};

export default cart;