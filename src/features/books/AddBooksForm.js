import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postAdded } from './booksSlice'

export const AddBooksForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  //dispatch method to send event/action to store 
  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)

  //our on click function handler
  //nanoid generates a random id for our posts  
  const onSavePostClicked = () => {
    if(title && content){
        dispatch(
            (
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
        )
        //resetting our title and content 
        setTitle('')
        setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Book</h2>
      <form>
        <label htmlFor="postTitle">Book Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked}>Save Book</button>
      </form>
    </section>
  )
}