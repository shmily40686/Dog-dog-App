import React from 'react'
import moment from 'moment'


class EntrySale extends React.Component {

	
	render(){
		return(
			<div className='post'>
				<h3 className='EntrySale-Title'>{this.props.post.title}</h3>
				<img src={this.props.post.photo[0]} style={{width:'150px'}}/>
				<div style={{width:'100px'}}>{this.props.post.type}</div>
				<div className="infoBoxEntrySale">
					<div >{this.props.post.info.age.year} year<span>{this.props.post.info.age.month} month</span></div>
					<div >{this.props.post.location.city}<span>{this.props.post.location.state}</span></div>
					<div >{this.props.post.info.price.fullPrice}</div>
					<div >{this.props.post.info.sex}</div>
					<div >{this.props.post.info.type}</div>
					<div >{this.props.post.info.size}</div>
					<div >{moment(this.props.post.creatAt).startOf('hour').fromNow()}</div>
					<div >{this.props.post.view}</div>
				</div>
			</div>
		)
	}
}

export default EntrySale;