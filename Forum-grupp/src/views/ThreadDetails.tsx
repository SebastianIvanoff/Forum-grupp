import React, { useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { useParams } from "react-router-dom";
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
                <input type="text" value={commentDescription} onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h1>comments</h1>
                {currentThread.comments.map((comment: CommentInterface) => {
                    return (
                        <div key={comment.id} style={{ marginBlock: "20px" }}>
                            <p>{comment.user}</p>
                            <p>{comment.description}</p>
                            <p>{comment.date}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ThreadDetails;
