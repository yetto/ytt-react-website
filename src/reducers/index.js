import { combineReducers } from 'redux'
/*
* https://github.com/reactjs/react-router-redux
*/
import { routerReducer } from 'react-router-redux'

import page from './pageReducer'
import blog from './blogReducer'

const rootReducer = combineReducers({
  page,
  blog,
  routing: routerReducer
})

export default rootReducer
