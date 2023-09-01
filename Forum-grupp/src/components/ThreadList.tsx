import React from "react";
import { BiCommentDetail } from "react-icons/bi";

const ThreadList = () => {
  return (
    <div className="thread-container">
      <h1 className="thread-app-name">Reddit 2.0</h1>
      <div className="thread-card">
        <div className="title-container">
          <h2 className="thread-title">Title</h2>
          <p className="thread-user">User</p>
          <p className="thread-date">Date</p>
        </div>
        <p className="thread-content">Content</p>
        <p className="comments">
          <BiCommentDetail />
          Comments
        </p>
      </div>
    </div>
  );
};

export default ThreadList;
