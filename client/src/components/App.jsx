import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Nav from './Nav.jsx'
import LogoInfoBox from './logIn/LogoInfoBox.jsx'
import Welcome from './home/Welcome.jsx'
import Home from './home/Home.jsx'
import Sale from './sale/Sale/Sale.jsx'
import ForSale from './sale/ForSale/ForSale.jsx'
import ChosePage from './sale/ChosePage.jsx'
import logIn from './logIn/logIn.jsx'
import UserPage from './user/UserPage.jsx'



class App extends React.Component {

	render() {
		return(

			<BrowserRouter>
				<div className='full-width'>
					<Nav/>
					<LogoInfoBox/>
						<Switch>
							<Route exact path='/' component={Welcome} />
							<Route path='/user' component={UserPage} />
							<Route path='/login' component={logIn} />
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
