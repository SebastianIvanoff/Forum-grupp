import React, { useState } from "react";
import { ThreadInterface, ThreadCategory } from "../types";
import { useNavigate } from "react-router-dom";
import "../css/App.css";
import "../css/CreateThreadPage.css";

type NavigateFunction = (to: string, options?: { state?: ThreadInterface }) => void;

const CreateThreadPage = () => {
    const [subject, setSubject] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const navigate: NavigateFunction = useNavigate();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case "Title":
                setTitle(value);
                break;
            case "description":
                setDescription(value);
                break;
            case "subject":
                setSubject(value);
                break;
            default:
                break;
        }
    };

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = localStorage.getItem("user");

        const currentDateAndTime = new Date();
        const formattedDateAndTime = currentDateAndTime.toISOString();

        const thread: ThreadInterface = {
            id: crypto.randomUUID(),
            title: title,
            user: user || "",
            date: formattedDateAndTime,
            category: subject as ThreadCategory,
            description: description,
            comments: [],
        };

        if (!title || !description || !subject) {
            return;
        }

        const existingThreadsJSON = localStorage.getItem("threads");
        let threads: ThreadInterface[] = [];

        if (existingThreadsJSON) {
            threads = JSON.parse(existingThreadsJSON);
        }

        threads.push(thread);

        localStorage.setItem("threads", JSON.stringify(threads));

        // After successfully submitting the form, navigate to a different page
        navigate("/"); // Replace this with your desired destination
    };

    return (
        <div className="create-thread-container">
            <div className="create-thread-title">
                <h2>Create a post</h2>
            </div>
            <form className="thread-form" onSubmit={handleFormSubmit}>
                <div className="form-title">
                    <label htmlFor="Title">Title</label>
                    <input type="text" name="Title" placeholder="Title" onChange={handleInputChange} value={title} />
                </div>
                <div className="form-title form-description">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" placeholder="Text" onChange={handleInputChange} value={description} />
                </div>
                <div className="form-dropdown-container">
                    <label htmlFor="subject">Category</label>
                    <select name="subject" id="subject" onChange={handleInputChange} value={subject}>
                        <option value="" disabled>
                            Flair
                        </option>
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
