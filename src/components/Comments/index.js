import {Component} from 'react'
import {v4 as v4uuid} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    count: 0,
    name: '',
    comment: '',
  }

  deleteComment = id => {
    const {commentList, count} = this.state
    const finalList = commentList.filter(each => each.id !== id)
    this.setState(prevState => ({count: prevState.count - 1}))
    console.log(count)
    this.setState({commentList: finalList})
  }

  changeColour = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (each.id === id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  onPrevent = event => {
    event.preventDefault()
    const {name, comment, count} = this.state
    const colorList =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * (initialContainerBackgroundClassNames.length - 1),
        )
      ]
    console.log(colorList)
    const newList = {
      id: v4uuid(),
      name,
      comment,
      date: new Date(),
      isLike: false,
      color: colorList,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newList],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
    console.log(count)
  }

  onName = event => {
    this.setState({name: event.target.value})
  }

  onComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentList, count, name, comment} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <form className="con1" onSubmit={this.onPrevent}>
            <h1>Comments</h1>
            <p className="comment-label-item">
              Say something about 4.0 Technologies
            </p>
            <input
              className="comment-input-element"
              id="input1"
              onChange={this.onName}
              value={name}
              type="text"
              placeholder="Your Name"
            />
            <textarea
              className="comment-textarea"
              onChange={this.onComment}
              value={comment}
              rows="5"
              cols="50"
              placeholder="Your Comment"
            >
              kavya
            </textarea>
            <button type="submit" className="comment-button">
              Add Comment
            </button>
          </form>
          <div>
            <img
              className="comments-image1"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
        </div>
        <hr className="comment-hr" />
        <div className="container2">
          <div className="com1">
            <p className="comments-p1">{count}</p>
            <p className="comments-p2">Comments</p>
          </div>
          <ul className="bg-ul">
            {commentList.map(each => (
              <CommentItem
                changeColour={this.changeColour}
                itemDetails={each}
                key={each.id}
                deleteComment={this.deleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
