import {createStore, combineReducers} from 'redux'

import cars from './cars'

const rootReducer = combineReducers({
    cars
})

export default createStore(rootReducer)