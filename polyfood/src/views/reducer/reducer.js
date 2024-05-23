export const initialState = {
  basket: [],
};

//Selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price*item.quantity + amount, 0);

// everytime loop through item.price add to the total amount , with the initial value is 0
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Check if the product already exists in the basket
      const existingProductIndex = state.basket.findIndex(
        (product) => product.id === action.item.id
      );
      if (existingProductIndex !== -1) {
        // Product already exists in the basket, update quantity
        const updatedBasket = [...state.basket];
        updatedBasket[existingProductIndex].quantity += 1;
        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        // Product doesn't exist in the basket, add it
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      }
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Can't remove product (id: ${action.id} ) as it's not in basket"
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "UPDATE_QUANTITY":
      const updatedBasket = state.basket.map((product) =>
        product.id === action.id
          ? { ...product, quantity: action.quantity }
          : product
      );
      return {
        ...state,
        basket: updatedBasket,
      };
    default:
      return state;
  }
};

export default reducer;
