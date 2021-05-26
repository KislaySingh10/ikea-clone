import {createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension"
import cartReducer from './reducers/cartReducers'

const store=createStore(cartReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store