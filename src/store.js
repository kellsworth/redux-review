// import createStore from redux, moviesReducer from our moviesReducer.js file, and devToolsEnhancer from redux-devtools-extension.  Only our moviesReducer is the default export so don't forget to put curly braces around the other two imports.

import { createStore } from 'redux'
import moviesReducer from './ducks/moviesReducer'
import { devToolsEnhancer } from 'redux-devtools-extension'

// Create a variable called store and set it equal to createStore invoked.  Pass it to our moview reducer as it's first argument, it's second argument should be devToolsEnhancer invoked.  This will connect our app to the redux devTools

export default createStore(moviesReducer, devToolsEnhancer())

