import "../css/App.css"
import "../css/CreateThreadPage.css"
import { ThreadInterface } from "../types";
import { useNavigate } from "react-router-dom";

type NavigateFunction = (to: string, options?: { state?: ThreadInterface }) => void;

const CreateThreadPage = () => {
    const navigate: NavigateFunction = useNavigate();
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const user = localStorage.getItem("user");

        const subjectValue = e.currentTarget.subject.value;
        const descriptionValue = e.currentTarget.description.value;
        const titleValue = e.currentTarget.Title.value;
        if (!subjectValue || !descriptionValue) return;

        const currentDateAndTime = new Date();
        const formattedDateAndTime = currentDateAndTime.toISOString();

        const thread: ThreadInterface = {
            id: crypto.randomUUID(),
            title: titleValue,
            user: user || "",
            date: formattedDateAndTime,
            category: subjectValue,
            description: descriptionValue,
            comments: [],
        };

        const existingThreadsJSON = localStorage.getItem("threads");
        let threads: ThreadInterface[] = [];

        if (existingThreadsJSON) {
            threads = JSON.parse(existingThreadsJSON);
        }

        threads.push(thread);

        localStorage.setItem("threads", JSON.stringify(threads));
        navigate("/");
    };

    return (
        <div className="create-thread-container">
            <div className="create-thread-title">
                <h2>Create a post</h2>
            </div>
            <form className="thread-form" onSubmit={handleFormSubmit}>
                <div className="form-title">
                    {/* <label htmlFor="Title">Title</label> */}
                    <input type="text" name="Title" placeholder="Title"/>
                </div>
                <div className="form-title form-description">
                    {/* <label htmlFor="description">Description</label> */}
                    <input type="text" name="description" placeholder="Text"/>
                </div>
                <div className="form-dropdown-container">
                    {/* <label htmlFor="category">Category</label> */}
                    <select name="subject" id="subject">
                        <option value="" disabled selected hidden>Flair</option>
                        <option value="QNA">Question and Answers</option>
                        <option value="MEME">Meme</option>
                        <option value="THREAD">Thread</option>
                    </select>
                </div>
                <div className="form-btn-container">
                    <button type="submit">Post</button>
                </div>
            </form>
        </div>
    );
};

export default CreateThreadPage;
