import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadState } from '../localStorage'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]

const initialState = loadState()

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
