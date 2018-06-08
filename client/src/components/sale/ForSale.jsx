import React from 'react'


class ForSale extends React.Component {

	render() {
		return(
			<div>
				<h1>Let's fill up some imformation</h1>
					<form>
						Title:
						<input type="text" placeholder="Let's start" />
						<div>
							type:
							<input type="text" placeholder="Border Collie" />
							size:
							<select>
							  <option value="middle">Middle</option>
							  <option value="large">Large</option>
							  <option value="small">Small</option>
							</select>
							age:
							<select>
							  <option value="1">1</option>
							  <option value="2">2</option>
							  <option value="3">3</option>
							  <option value="4">4</option>
							  <option value="5">5</option>
							  <option value="6">6</option>
							  <option value="7">7</option>
							  <option value="8">8</option>
							  <option value="9">9</option>
							  <option value="10">10</option>
							  <option value="11">11</option>
							  <option value="12">12</option>
							  <option value="13">13</option>
							  <option value="14">14</option>
							  <option value="15">15</option>
							  <option value="16">16</option>
							  <option value="17">17</option>
							  <option value="18">18</option>
							  <option value="19">19</option>
							  <option value="20">20</option>
							</select>
							Year
							<select>
							  <option value="1">1</option>
							  <option value="2">2</option>
							  <option value="3">3</option>
							  <option value="4">4</option>
							  <option value="5">5</option>
							  <option value="6">6</option>
							  <option value="7">7</option>
							  <option value="8">8</option>
							  <option value="9">9</option>
							  <option value="10">10</option>
							  <option value="11">11</option>
							  <option value="12">12</option>
							</select>
							Month
						</div>
						<div> UPLORD PHOTO PART </div>
						Color:
						<input type="text" placeholder="Black" />
					</form>

			</div>
		)
	}
}

export default ForSale