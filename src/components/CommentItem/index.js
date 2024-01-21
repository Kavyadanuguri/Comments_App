// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {itemDetails, changeColour, deleteComment} = props
  const {id, name, comment, isLike, date, color} = itemDetails

  const onLike = () => {
    changeColour(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  const getLike = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const getBlue = isLike ? 'blue' : 'normal'

  const postedDate = formatDistanceToNow(date)
  console.log(color)

  return (
    <div className="item-bg-container ">
      <li className="list-container">
        <div className="item-container1">
          <div>
            <p className={`item-p1 ${color}`}>{name[0].toUpperCase()}</p>
          </div>
          <div className="item-container3">
            <div className="item-container2">
              <p className="item-p2">{name}</p>
              <p className="item-p3">{postedDate} ago</p>
            </div>
            <div>
              <p className="item-p4">{comment}</p>
            </div>
          </div>
        </div>
        <div className="item-con1">
          <div className="item-container1">
            <button type="button" className="like-button" onClick={onLike}>
              <img alt="like" className="like-img" src={getLike} />
            </button>
            <p className={getBlue}>Like</p>
          </div>
          <div>
            <button
              data-testid="delete"
              type="button"
              className="like-button"
              onClick={onDelete}
            >
              <img
                alt="delete"
                className="delete-image"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              />
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default CommentItem
