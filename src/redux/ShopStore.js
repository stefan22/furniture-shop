import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// reducers
import { ShopReducer } from './reducers/ShopReducer';
// middlewares
const middlewares = [ thunk ]

// rootReducer
const rootReducer = combineReducers({
	shop: ShopReducer,

});


const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancer(applyMiddleware(...middlewares))


// store
const ShopStore = createStore(
	rootReducer,
	enhancer
);




export default ShopStore;
