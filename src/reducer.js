export const initialState = {
    info: [],
  };
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_BOOKING":
          return {
            ...state,
            info: [...state.info, action.client]
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;