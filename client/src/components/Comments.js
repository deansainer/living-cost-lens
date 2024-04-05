import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import moment from 'moment';

const Comments = (props) => {
  const [comment, setComment] = useState('')
  const currentUser = Cookies.get('username')

  const [countryComments, setCountryComments] = useState([])

  async function deleteComment(commentId){
    const deletedComment = await axios.delete(`http://localhost:3001/api/comments/delete/${commentId}`)
    getComments()
    console.log('deleted');
  }

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
        commentText: comment,
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
              <div>
                <span className='comment_text'>{comment.text}</span>
                {currentUser === comment.username && 
                <img onClick={() => deleteComment(comment.id)} alt='del' className='delete_comment_icon' src='https://cdn-icons-png.flaticon.com/128/2976/2976286.png'></img>}
              </div>
            <div className='comment_user'>
              <div>
                <img alt='user' src='https://cdn-icons-png.flaticon.com/128/456/456212.png'></img>
                <span>{comment.username}</span>
              </div>
              <div className='comment_date'>
              {moment(comment.date).format('DD/MM/YYYY')}
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