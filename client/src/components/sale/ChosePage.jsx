import React from 'react'
import { Link } from 'react-router-dom'

import Sale from './Sale/Sale.jsx'
import ForSale from './ForSale/ForSale.jsx'

const styleObj = {
	textDecoration: 'none',
	width: "200px"
}

class ChosePage extends React.Component {

	render() {
		return(
			<div>
				<Link style={styleObj} to='/forSale'>SALE</Link><br/>
				<Link style={styleObj} to='/sale'>LOOKING FOR DOG</Link>
			</div>
		)
	}
}

export default ChosePage