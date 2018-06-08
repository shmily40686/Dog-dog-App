import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from './Nav.jsx'
import Welcome from './home/Welcome.jsx'
import Home from './home/Home.jsx'
import Sale from './sale/Sale.jsx'
import ForSale from './sale/ForSale.jsx'
import ChosePage from './sale/ChosePage.jsx'



class App extends React.Component {

	render() {
		return(
			
			<BrowserRouter>
				<div>
					<Nav/>
						<Switch>
							<Route exact path='/' component={Welcome} />
							<Route path='/home' component={Home} />
							<Route path='/sale' component={Sale} />
							<Route path='/forSale' component={ForSale} />
							<Route path='/chosePage' component={ChosePage} />
						</Switch>
				</div>
			</BrowserRouter>
		)
	}
}

export default App