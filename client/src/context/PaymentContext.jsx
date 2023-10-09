import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  message: "",
  loading: false, 
  childAges: []
};

const paymentContext = createContext(INITIAL_STATE);

const PayReducer = (state,action) => {
    switch(action.type){
        case "SET_MESSAGE": 
            return {

            }
    }
}
