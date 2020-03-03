import {createStore, combineReducers} from 'redux'

import cars from './cars'
import layout from './layout'

const rootReducer = combineReducers({
    cars, layout
})

export default createStore(rootReducer)