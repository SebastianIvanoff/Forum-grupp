import { PostInterface } from "../types";
import { BiCommentDetail } from "react-icons/bi";

const ThreadList = ({ title, content, user, date, comments }: PostInterface) => {
    return (
        <div className="thread-container">
            <h1 className="thread-app-name">Reddit 2.0</h1>
            <div className="thread-card">
                <div className="title-container">
                    <h2 className="thread-title">{title}</h2>
                    <p className="thread-user">{user}</p>
                    <p className="thread-date">{date}</p>
                </div>
                <p className="thread-content">{content}</p>
                <p className="comments">
                    <BiCommentDetail />
                    {comments}
                </p>
            </div>
        </div>
    );
};

export default ThreadList;
