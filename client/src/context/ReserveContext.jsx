import { createContext, useReducer } from "react";

const INITIAL_STATE = {    
        name: "",
        lastName: "",
        dates: [],
        adults: 1, 
        children: 0
};

export const ReserveContext = createContext(INITIAL_STATE);

const ReserveReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
        return {
          ...state,
          name: action.payload
        };
      case "SET_LASTNAME":
        return {
          ...state,
          lastName: action.payload, 
        };
      case "SET_DATES":
        return {
          ...state,
          dates: action.payload, 
        };
      case "SET_ADULTS":
        return {
          ...state,
          adults: action.payload, 
        };
      case "SET_CHILDREN":
        return {
          ...state,
          children: action.payload, 
        };
    default:
      return state;
  }
};
  export const ReserveContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReserveReducer, INITIAL_STATE);

  return (
    <ReserveContext.Provider
      value={{
        name: state.name,
        lastName: state.lastName,
        dates: state.dates,
        adults: state.adults, 
        children: state.children,
        dispatch,
      }}
    >
      {children}
    </ReserveContext.Provider>
  );
};
