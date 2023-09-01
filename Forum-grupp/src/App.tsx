import "./css/App.css";
import "./css/ThreadList.css";
import { Link } from "react-router-dom";
import ThreadList from "./components/ThreadList";

function App() {
    return (
        <div className="App">   
            <Link to={"/create-thread"}>Create Post</Link>
            <ThreadList />
        </div>

    );
}

export default App;
