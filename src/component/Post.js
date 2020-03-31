import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Post.css';
import img2 from '../images/like.png';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      liked: props.post.liked,
    }
  }

  toggleLike = () => {
    const { likes, liked } = this.state;
    this.setState({
      likes: liked ? likes - 1 : likes + 1,
      liked: !liked,
    });
  }

  render() {
    const { post } = this.props;

    return (
      <div className="main">
        <div className="main1">
          <div className="display">
            <div className="author">
              <img src={post.author.avatar} className="img" alt="" />
              <div >
                <h4 className="names">{post.author.firstname + " " + post.author.lastname}</h4>
                <h6 className="created">{post.created}</h6>
              </div>
            </div>
            <div className="postText">
              {post.text}
            </div>
          </div>

          <div className="likesDiv">
            <div className="bound">
              <img src={img2} className="likeIcon" onClick={this.toggleLike} alt="" />
              <p id="Commentname">Likes : {this.state.likes}</p>
              <p id="likesCategory">{post.category}</p>
            </div>
          </div>

          {post.comments.length > 0 && (
            <div className="commentContainer">
              <div><p style={{ textAlign: 'left', paddingLeft: '5px' }}><b>Comments :</b></p></div>
              {post.comments.map(comment => (
                <div className="bound">
                  <img src={comment.author.avatar} className="imgComment" alt="" />

                  <div className="triangle-left"></div>
                  <div className="comment">

                    <p id="Commentname">{comment.author.firstname + " " + comment.author.lastname}</p>
                    <p className="created1">{comment.created}</p>
                    <div style={{ marginTop: '10px' }} > <p>{comment.comment} </p></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
  link_title: PropTypes.string,
  link_description: PropTypes.string,
  link_source: PropTypes.string,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  created_at: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.arrayOf(PropTypes.shape({
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      })),
      comment: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    }),
  ),
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

export default Post;
