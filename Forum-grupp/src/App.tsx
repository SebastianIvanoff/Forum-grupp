import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Link to={"/create-thread"}>Link to /create-thread</Link>
            This is our homepage.
        </div>
    );
}

export default App;
