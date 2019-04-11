import React from 'react'
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import moment from 'moment';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeCurrentPost } from '../../../action/changeCurrentPost.js'
import { addComment } from '../../../action/addComment.js'


const mapStateToProps = (state, props) => {

  return {
    user:state.user,
    currentPost: state.currentPost
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeCurrentPostToStore: function (post) {
      dispatch(changeCurrentPost(post))
    },
    changeComments: function (postId, comment) {
      dispatch(addComment(postId, comment))
    }
  }
}

class ClickSale extends React.Component {


constructor(props) {
    super(props);
    this.state = {
    	currentImage: 0,
    	photos: [],
    	threePhotos : [],
    	text: null
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.addReply = this.addReply.bind(this);
    this.getText = this.getText.bind(this);

  }

  componentDidMount() {
    var id = this.props.match.params.postid;
    var app = this;
      fetch(`http://localhost:3000/api/getOnePost/${id}`)
      .then(res => {
        console.log('res: ' ,res)
        return res.json()
      }).then((data) => {
        console.log("currentPost",data)
        this.props.changeCurrentPostToStore(data)
        this.setState({
          photos:this.setPhotos(),
          threePhotos: this.setPhotos().slice(0,3)
        })
      })
      .catch(function (err) {
        console.error('error getting data: ', err)
      })
  }


  setPhotos () {
  	var photos = this.props.currentPost.photo.map(function(uil) {
  		var obj = {};
  		obj.src = uil;
  		obj.width = 1;
  		obj.height = 0.8;
  		return obj
  	})
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

  getText () {
    let words = this.commentArea.value
    let index = words.indexOf("shit");
    if(words.indexOf("shit") !== -1 ) {
      var frontHalf = words.slice(0, index)
      var endHalf = words.slice(index + 4)
      words = frontHalf + "****" + endHalf
    }
  	this.setState({
  		text: words
  	})
  }

  addReply () {
  	var app = this;
    if (this.props.user === '') {
      this.props.history.push('/login')
    } else {
      if (!!this.state.text.trim()) {
        this.commentArea.value = '';
        app.commentArea.style.color = 'black';
        axios({
          method: 'post',
          url: `http://localhost:3000/api/comment/${app.props.currentPost._id}`,
          data: {
            user: app.props.user,
            creatAt: new Date(),
            text: app.state.text,
            reply:[]
          }
        })
        .then(function (response) {
          console.log("response",response)
          app.props.changeComments(app.props.currentPost.id, response.data)
          app.setState({
            text: ''
          })
        })
        .catch(function (error) {
          console.log(error);
          app.commentArea.value = app.state.text
          app.commentArea.style.color = 'red';
        });
      }
    } 	
  }

	render(){
      return(
        <div className='margin-left-30'>
          <div>
            <button className='basic-btn' onClick={()=> this.props.history.push('/sale')}>BACK</button>
            {this.props.currentPost ?
              (
                <div>
                  <div className='post-page-title-box'>
                    <h1 className='post-page-title'>{this.props.currentPost.title}</h1>
                  </div>
                  <div className='photosGallery'>
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
                  <div className='small-box'>
                    <div className='info-box '>
                      <h3 className='infoTitle'>Info</h3>
                      <div>Type {this.props.currentPost.info.toy}</div>
                      <div>Type {this.props.currentPost.info.type}</div>
                      <div>Ago {this.props.currentPost.info.age.year} year<span>{this.props.currentPost.info.age.month} month</span></div>
                      <div>Size {this.props.currentPost.info.size}</div>
                      <div>Sex {this.props.currentPost.info.sex}</div>
                      <div>Color {this.props.currentPost.info.color}</div>
                    </div>
                    <div className='price-box'>
                      <h3 className='priceTitle' >Price</h3>
                      <div>Full-Price {this.props.currentPost.info.price.fullPrice}</div>
                      <div>Deposit {this.props.currentPost.info.price.deposit}</div>
                    </div>
                  </div>
                  <div className='small-box'>
                    <div className='connect-box'>
                      <h3 className='connectTitle'>Connect</h3>
                      <div>Email {this.props.currentPost.info.connect.email}</div>
                      <div>Call {this.props.currentPost.info.connect.call}</div>
                    </div>
                    <div className='location-box'>
                      <h3 className='locationTitle'>Location</h3>
                      <div>{this.props.currentPost.location.city}<span>{this.props.currentPost.location.state}</span></div>
                    </div>
                  </div>
                  <div className='post-page-box'>
                    <h3 className='descriptionTitle'>Description</h3>
                    <div>{this.props.currentPost.description}</div>
                  </div>
                  <div>
                    <h3>Comments</h3>
                    <div>
                      {
                        this.props.currentPost.comments.map((comment,i) => {
                          return(
                            <div comment={comment} key={i} className='comment-box' >
                              <div><span className='comment-userName'>{comment.user }</span><span className='comment-time'>{moment(comment.creatAt).startOf('hour').fromNow()}</span></div>
                              <div className='comment-text'>{comment.text}</div>
                              <button className='basic-btn'>Reply</button>
                            </div>
                          )
                        })
                      }
                    </div>
                    <textarea ref={(el) => this.commentArea = el} className='comment-textarea' rows="4" cols="50" onChange={this.getText} /><br/>
                    <button className='basic-btn' onClick={this.addReply} >Add Reply</button>
                  </div>
                </div>
          ) : null}
        </div>
      </div>
    )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ClickSale) ;
