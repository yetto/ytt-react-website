import { applyMiddleware, createStore } from "redux"

import createLogger from 'redux-logger'
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

// import the root reducer (index.js)
import rootReducer from "../reducers"

import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

const simpleLog = (store) => (next) => (action) => {
  console.log(action.type);
  next(action)
}

const loggerQuiet = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
      const ignore = [
        'MOUSE_POS_CHANGED',
        'POSX_CHANGED',
        //'POSY_CHANGED',
        'POSWIDTH_CHANGED',
        'POSHEIGHT_CHANGED'
      ]
      if (ignore.indexOf(action.type) === -1) return true
    }
})

const loggerVerbose = createLogger({
  level: 'info',
  collapsed: false
})

const middleware = applyMiddleware(promise(), thunk, loggerQuiet)
//const middleware = applyMiddleware(promise(), thunk, simpleLog, logger)
const store = createStore(rootReducer, middleware)

export const history = syncHistoryWithStore(browserHistory, store)
export default store