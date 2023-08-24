import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postSlice";


const AddPostForm = () => {
   const dispatch = useDispatch()

   const [title, setTitle] = useState('')
   const [content, setContent] = useState('')

   const onTitleChange = e => setTitle(e.target.value)
   const onContentChange = e => setContent(e.target.value)

   const onSavePostClicked = () => {
      if(title && content){
         dispatch(
            postAdded({
               id: nanoid(),
               title,
               content,
            })
         )
         setTitle('')
         setContent('')
      }
   }

   return (
      <section>
         <h2 className="main-title">Add new post</h2>
         <form>
            <label htmlFor="postTitle">Post title:</label>
            <input type='text' id="postTitle" name="postTitle" value={title} onChange={onTitleChange} />
            <label htmlFor="postContent">Content:</label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChange} />
            <button onClick={onSavePostClicked} type="button">Save Post</button>
         </form>
      </section>
   )
}

export default AddPostForm