import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// reducers
import { ShopReducer } from "./reducers/ShopReducer";
import { CartReducer } from "./reducers/CartReducer";
// middlewares
const middlewares = [ thunk ];

// rootReducer
const rootReducer = combineReducers({
	shop: ShopReducer,
  cart: CartReducer,

});


const composeEnhancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancer(applyMiddleware(...middlewares))


// store
const ShopStore = createStore(
	rootReducer,
	enhancer
);




export default ShopStore;
