import { ThreadInterface } from "../types";

import ThreadCard from "./ThreadCard";

const ThreadList = () => {
  const threadListCardsJSON = localStorage.getItem("threads");
  const threadListCards = JSON.parse(threadListCardsJSON ?? "[]")
 

  return (
    <div className="thread-container" >
      {threadListCards.map((card: ThreadInterface) => {
        return <ThreadCard card={card} key={card.id}/>
      })}
    </div>
  );
};

export default ThreadList;
