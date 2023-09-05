import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx"
import { useParams, Link } from "react-router-dom";
import "../css/ThreadList.css";
import { CommentInterface, ThreadInterface } from "../types";
import "../css/App.css";

const ThreadDetails = () => {
    const [commentDescription, setCommentDescription] = useState<string>("");
    const params = useParams();

    const { threadId } = params;

    const threadsJSON = localStorage.getItem("threads");
    const threads = JSON.parse(threadsJSON || "[]");

    const currentThread = threads.find((thread: ThreadInterface) => thread.id === threadId);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCommentDescription(e.currentTarget.value);
    };

    const handleSubmit = (): void => {
        const user = localStorage.getItem("user");
        const currentDateAndTime = new Date();
        const formattedDateAndTime = currentDateAndTime.toISOString();

        const comment: CommentInterface = {
            user: user || "",
            id: crypto.randomUUID(),
            date: formattedDateAndTime,
            description: commentDescription,
        };

        const currentIndex = threads.findIndex((thread: ThreadInterface) => thread.id === threadId);

        if (currentIndex !== -1) {
            // Clone the currentThread and update its comments array
            const updatedThread = {
                ...currentThread,
                comments: [...currentThread.comments, comment],
            };

            // Clone the threads array and update the currentThread within it
            const updatedThreads = [...threads];
            updatedThreads[currentIndex] = updatedThread;

            // Save the updated threads array back to local storage
            localStorage.setItem("threads", JSON.stringify(updatedThreads));
        }
    };

    return (
        <div className="thread-details-container">
            <Link to="/" className="thread-details-navigation">
                <RxCross1 />
                <p>Close</p>
            </Link>
            <div className="thread-details-container2">
                <div className="thread-details-card">
                    <div className="user-date-container">
                        <p className="thread-user">Posted by u/{currentThread.user}</p>
                        <p className="thread-date">{currentThread.date}</p>
                    </div>
                    <div className="title-container">
                        <p className="thread-category">{currentThread.category}</p>
                        <h2 className="thread-title thread-title-details">{currentThread.title}</h2>
                    </div>
                    <div className="thread-description-container">
                        <p className="thread-description">{currentThread.description}</p>
                    </div>
                    <div className="thread-bottom-container">
                        <div className="thread-comment-link-container2">
                            <p className="comment-count details-comments">
                                <BiCommentDetail />
                                {currentThread.comments.length} Comments
                            </p>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="comment-input-container">
                    <input type="text" value={commentDescription} onChange={handleChange} placeholder="What are your thoughts?"/>
                    <div className="comment-btn-container">
                        <button type="submit">Comment</button>
                    </div>

                </form>
                <div>
                    {currentThread.comments.map((comment: CommentInterface) => {
                        return (
                            <div key={comment.id} style={{ marginBlock: "20px" }}>
                                <div className="user-date-container comment-user-date">
                                    <p id="comment-user">{comment.user}</p>
                                    <p>{comment.date}</p>
                                </div>
                                <p>{comment.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ThreadDetails;
