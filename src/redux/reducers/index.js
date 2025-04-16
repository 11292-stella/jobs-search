const intialState = {
  cart: {
    content: [],
  },
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content.concat(action.payload)],
        },
      }

    // case:

    // case:

    default:
      return state
  }
}
export default reducer
