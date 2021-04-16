export const initialState = {
    info: [],
    user: null,
  };
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_BOOKING":
          return {
            ...state,
            info: [...state.info, action.client]
        }
        case "REMOVE_BOOKING":
          //we check if the product exists
          const index = state.info.findIndex(
            (infoClient) => infoClient.id === action.id
          );
          //clone the basket bruh
          let newInfo = [...state.info];

          //if the it exists then...
          if (index >= 0) {
          //cuts out the found product from the basket
            newInfo.splice(index, 1);

          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }

        return {
          //replace the basket with the newBasket w/o the product 
          //selected
          ...state,
          info: newInfo
        }

        case "SET_USER":
          return {
            ...state,
            user: action.user,
          }
  
      default:
        return state;
    }
  };
  
  export default reducer;