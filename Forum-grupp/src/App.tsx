import "./css/App.css";
import "./css/ThreadList.css";
import { Link } from "react-router-dom";
import ThreadList from "./components/ThreadList";
import { useEffect } from "react";

function App() {
    useEffect(() => {
        const randomId = crypto.randomUUID();
        const user = `User${randomId}`;
        const userExistInLocalStorage = localStorage.getItem("user");

        if (userExistInLocalStorage) return;
        localStorage.setItem("user", user);
    }, []);

    const threadsJSON = localStorage.getItem("threads");
    const threads = JSON.parse(threadsJSON ?? "[]");
    console.log(threads);

    return (
        <div className="App">
            <Link to={"/create-thread"}>Create Post</Link>
            <ThreadList
                title={threads.subject}
                content={threads.description}
                user={threads.user}
                date={threads.date}
                comments={4}
            />
        </div>
    );
}

export default App;
