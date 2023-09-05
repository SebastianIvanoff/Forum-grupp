import "./css/App.css";
import "./css/ThreadList.css";
import { Link } from "react-router-dom";
import ThreadList from "./components/ThreadList";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const randomId = crypto.randomUUID().split("-")[0];
        const user = `User-${randomId}`;
        const userExistInLocalStorage = localStorage.getItem("user");

        if (userExistInLocalStorage) return;
        localStorage.setItem("user", user);
    }, []);

    //   const threadsJSON = localStorage.getItem("threads");
    //   const threads = JSON.parse(threadsJSON ?? "[]");

    return (
        <div className="app">
            <div className="create-post-link">
                <img src="https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png"></img>
                <Link className="create-post-real-link" to={"/create-thread"}>
                <input type="text" name="Create Post" placeholder="Create Post" className="create-post-link-input" />
                </Link>
            </div>
            <ThreadList />
        </div>
    );
}

export default App;
