import "./css/App.css";
import "./css/ThreadList.css";
import { Link } from "react-router-dom";
import ThreadList from "./components/ThreadList";

function App() {
  return (
    <div className="App">
      <Link to={"/create-thread"}>Create Post</Link>
      <ThreadList
        title="This is a title"
        content="This is the content"
        user="User"
        date="2023-9-3"
        comments={4}
      />
    </div>
  );
}

export default App;
