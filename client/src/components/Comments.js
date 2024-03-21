import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

const Comments = () => {
  const [comment, setComment] = useState('')
  const currentUser = Cookies.get('username')

  async function handleSubmit(e){
    e.preventDefault()
    if(comment){
      const response = await axios.post('http://localhost:3001/api/comments/new', {
        countryId: 72,
        userUsername: currentUser,
        commentText: comment
      })
      console.log('Success');
    }
  }

  return (
    <div className='comments_container'>
      <div className='comments_box'>
        <div className='comments_form'>
          <input maxLength={'82'} className='form-control' placeholder='+ Add a note' type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className='comments_list'>

          <div className='comment'>
            <span className='comment_text'>It was the best travel ever. A lot of cool cheap places, i recommending this place.</span>
            <div className='comment_user'>
              <div>
                <img src='https://i.ibb.co/B4x2nyP/user-1.png'></img>
                <span>determind</span>
              </div>

              <div>
                <span>upvote</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Comments