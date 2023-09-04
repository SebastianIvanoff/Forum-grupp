import React from 'react'
import { BiCommentDetail } from "react-icons/bi";
import { ThreadInterface } from '../types';


const ThreadCard = ({card}) => {

  return (
    <div className="thread-card">
        
        <div className="title-container">
          <h2 className="thread-title">{card.title}</h2>
          <p className="thread-user">{card.user}</p>
          <p className="thread-date">{card.date}</p>
        </div>
        <p className="thread-content">{card.description}</p>
        <p className="comments">
          <BiCommentDetail />
          {card.comments}
        </p>
      </div>
  )
}

export default ThreadCard