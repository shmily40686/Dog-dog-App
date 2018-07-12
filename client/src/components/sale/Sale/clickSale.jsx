import React from 'react'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux';


const mapStateToProps = (state, props) => {
	console.log('state: ', state)
	return {
		currentPost: state.currentPost
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
	}
}

class ClickSale extends React.Component {


constructor(props) {
    super(props);
    this.state = { 
    	currentImage: 0,
    	photos: this.setPhotos(),
    	threePhotos : this.setPhotos().slice(0,3),
    	text: null,
    	userClickEntry: false
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.addReply = this.addReply.bind(this);
    this.getText = this.getText.bind(this);


  }

  setPhotos () {
  	console.log('props: ', this.props)
  	var photos = this.props.currentPost ? this.props.currentPost.photo.map(function(uil) {
  		var obj = {};
  		obj.src = uil;
  		obj.width = 1;
  		obj.height = 0.7;
  		return obj
  	}) : []
  	return photos;
  }


  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  getText (e) {
  	this.setState({
  		text: e.target.value
  	})
  }

  addReply () {
  	var app = this;
  	if (!!this.state.text.trim()) {
	  	axios({
	  		method: 'post',
	  		url: `http://localhost:3000/api/comment/${app.props.currentPost._id}`,
	  		data: {
	  			user: "Frog",
			    creatAt: new Date(),
			    text: app.state.text,
			    reply:[]
	  		}
	  	})
		  .then(function (response) {
		    console.log("reply send out ", response);
		    app.props.changeComments(response.data)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  	}
  }

  renderUsepageOrNormal () {
		return(
			<div>
			<button onClick={this.props.changeView}>BACK</button>
				<h1>{this.props.currentPost.title}</h1>
				<div>
					<div>
	        <Gallery photos={this.state.threePhotos} onClick={this.openLightbox} />
	        </div>
	        <Lightbox images={this.state.photos}
	          onClose={this.closeLightbox}
	          onClickPrev={this.gotoPrevious}
	          onClickNext={this.gotoNext}
	          currentImage={this.state.currentImage}
	          isOpen={this.state.lightboxIsOpen}
	        />
				</div>
				<div className='infoBox'>
					<h3 className='infoTitle'>Info</h3>
					<div>Type {this.props.currentPost.info.type}</div>
					<div>Ago {this.props.currentPost.info.age.year} year<span>{this.props.currentPost.info.age.month} month</span></div>
					<div>Size {this.props.currentPost.info.size}</div>
					<div>Sex {this.props.currentPost.info.sex}</div>
					<div>Color {this.props.currentPost.info.color}</div>
				</div>
				<div className='priceBox'>
					<h3 className='priceTitle' >Price</h3>
					<div>Full-Price {this.props.currentPost.info.price.fullPrice}</div>
					<div>Deposit {this.props.currentPost.info.price.deposit}</div>
				</div>
				<div className='connectBox'>
					<h3 className='connectTitle'>Connect</h3>
					<div>Email {this.props.currentPost.info.connect.email}</div>
					<div>Call {this.props.currentPost.info.connect.call}</div>
				</div>
				<div className='locationBox'>
					<h3 className='locationTitle'>Location</h3>
					<div>{this.props.currentPost.location.city}<span>{this.props.currentPost.location.state}</span></div>
				</div>
				<div className='descriptionBox'>
					<h3 className='descriptionTitle'>Description</h3>
					<div>{this.props.currentPost.description}</div>
				</div>


				<div>
					<h3>Comments</h3>
					<div>{
						this.props.currentPost.comments.map((comment,i) => {
							return(
							 <div comment={comment} key={i} >
							 	 <div>{comment.user }<span >{moment(comment.creatAt).startOf('hour').fromNow()}</span></div>
							 	 <div>{comment.text}</div>
							 	 <button>Reply</button>
							 </div>
							)
						})
					}</div>
					<textarea rows="4" cols="50" onChange={this.getText} /><br/>
					<button onClick={this.addReply} >Add Reply</button>
				</div>
			</div>
		)
  }
	
	render(){
		return(
			this.renderUsepageOrNormal()
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ClickSale);