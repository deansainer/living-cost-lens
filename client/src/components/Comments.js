import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';

const Comments = (props) => {
  const [comment, setComment] = useState('')
  const currentUser = Cookies.get('username')

  const [countryComments, setCountryComments] = useState([])

  async function getComments(){
    const response = await axios.get(`http://localhost:3001/api/comments/${props.countryName}`)
    setCountryComments(response.data)
  }

  useEffect(() => {
    getComments()
  }, [])

  
  async function handleSubmit(e){
    e.preventDefault()
    if(comment){
      const response = await axios.post('http://localhost:3001/api/comments/new', {
        countryName: props.countryName,
        userUsername: currentUser,
        commentText: comment
      })
      setComment('')
      getComments()
      console.log('Success');
    }
  }

  return (
    <div className='comments_container'>
      <div className='comments_box'>

        <div className='comments_header'>
          <span>Tell me something about {props.countryName}</span>
        </div>

        <div className='comments_form'>
          <input maxLength={'120'} className='form-control' placeholder='+ Add a note' type='text' value={comment} onChange={(e) => setComment(e.target.value)}></input>
          <button onClick={handleSubmit}>Submit</button>
        </div>

        <div className='comments_list'>
          {countryComments.map((comment) => (
            <div className='comment'>
              <div className='comment_text_and_delete'>
                <span className='comment_text'>{comment.text}</span>
                <img className='delete_comment_icon' src='https://cdn-icons-png.flaticon.com/128/1828/1828945.png'></img>
              </div>
            <div className='comment_user'>
              <div>
                <img src='https://cdn-icons-png.flaticon.com/128/456/456212.png'></img>
                <span>{comment.username}</span>
              </div>

              <div className='upvote_'>
                <span>upvote</span>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Comments