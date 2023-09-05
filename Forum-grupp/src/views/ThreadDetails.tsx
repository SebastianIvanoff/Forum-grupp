import React, { useState } from 'react'
import { BiCommentDetail } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import "../css/ThreadList.css";
import { CommentInterface, ThreadInterface } from '../types';
import "../css/App.css"

const ThreadDetails = () => {
    const params = useParams()

    const {threadId} = params

    console.log(threadId)

    const threadsJSON = localStorage.getItem("threads")

    const threads = JSON.parse(threadsJSON || "[]")

    console.log(threads)

    const currentThread = threads.find((thread: ThreadInterface) => thread.id === threadId)

    console.log(currentThread)

    const [commentDescription, setCommentDescription] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
        
        setCommentDescription(e.currentTarget.value)
        
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
       
        e.preventDefault()
        

        const user = localStorage.getItem("user");
        const currentDateAndTime = new Date();
        const formattedDateAndTime = currentDateAndTime.toISOString();

        
        const comment: CommentInterface = {
        user: user || "",
        id: crypto.randomUUID(),
        date: formattedDateAndTime,
        description: commentDescription
        }

        console.log(comment)

        currentThread.comments = [...currentThread.comments, comment]
        console.log(currentThread)

    }
    
  return (
    <>
    <div className="thread-card">
       <div className="user-date-container">
          <p className="thread-user">Posted by u/{currentThread.user}</p>
          <p className="thread-date">{currentThread.date}</p>
        </div>
        <div className="title-container">
          <p className="thread-category">{currentThread.category}</p>
          <h2 className="thread-title">{currentThread.title}</h2>
        </div>
        <div className="thread-description-container">
          <p className="thread-description">{currentThread.description}</p>
        </div>
        <div className="thread-bottom-container">
          <div className="thread-comment-link-container">
            <p className="comments">
            <BiCommentDetail />
            {currentThread.comments.length} Comments
            </p>
          </div>
        </div> 
    </div>
    <form onSubmit={handleSubmit}>
        <input type="text" value={commentDescription} onChange={handleChange}/>
        <button type='submit'>Submit</button>
    </form>
    </>
    

    
        
  )
}

export default ThreadDetails