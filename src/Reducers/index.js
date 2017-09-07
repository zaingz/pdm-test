import { combineReducers } from 'redux'
import AttributesReducer from './AttributesReducer'
import ValuesReducer from './ValuesReducer'

const allReducers = combineReducers({
  attributes: AttributesReducer,
  values: ValuesReducer
})

export default allReducers
