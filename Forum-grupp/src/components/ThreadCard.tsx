// import React from 'react'
import { BiCommentDetail } from "react-icons/bi";
import { ThreadInterface } from "../types";
import { Link } from "react-router-dom";

const ThreadCard = ({ card }: { card: ThreadInterface }) => {
    return (
        <Link to={`/thread/${card.id}`} className="thread-card">
            <div className="user-date-container">
                <p className="thread-user">Posted by u/{card.user}</p>
                <p className="thread-date">{card.date}</p>
            </div>
            <div className="title-container">
                <p className="thread-category">{card.category}</p>
                <h2 className="thread-title">{card.title}</h2>
            </div>
            <div className="thread-description-container">
                <p className="thread-description">{card.description}</p>
            </div>
            <div className="thread-bottom-container">
                <div className="thread-comment-link-container">
                    <p className="comments">
                        <BiCommentDetail />
                        {card.comments.length} Comments
                    </p>
                </div>
            </div>
        </Link>
    );
};
export default ThreadCard;
