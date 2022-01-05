import React from 'react'
import s from './MyPosts.module.scss'
import Post from '../Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea />
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <h4>New post</h4>
      <div className={s.posts}>
        <Post content={`This is my first post!`} btnName={`like`} />
        <Post content={`Hi how are you!?`} btnName={`dislike`} />
        <Post content={`Man, keep going, the win is close!`} btnName={`love`} />
      </div>
    </div>
  )
}

export default MyPosts
