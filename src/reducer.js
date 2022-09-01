const INITIAL_STATE = {
    cart: [],
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default (state = INITIAL_STATE, action = {}) => {
    if (action.type === 'ADD_TO_CART') {
      const cart = [...state.cart];
      cart.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        image: action.payload.image
      });
      return { cart: cart };
    }
  
    return state;
  };