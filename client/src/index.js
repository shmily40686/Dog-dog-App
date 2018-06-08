import React from 'react'
import ReactDOM from 'react-dom'


import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer.js'

const store = createStore(rootReducer)

store.subscribe(function () {
	console.log(store.getState())
})

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	,document.getElementById('app'))