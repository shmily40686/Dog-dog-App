import React from 'react'
import { Link } from 'react-router-dom'

import Sale from './Sale.jsx'
import ForSale from './ForSale.jsx'

class ChosePage extends React.Component {

	render() {
		return(
			<div>
				<Link to='/sale'>SALE</Link>
				<Link to='/forSale'>LOOKING FOR DOG</Link>
			</div>
		)
	}
}

export default ChosePage