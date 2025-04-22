import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages); // this will get the messages from the store

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(50),
        })
      ); // this will add a new message to the store every 2 seconds
    }, 2000); // this will run every 2 seconds
    return () => clearInterval(timer); // this will clear the timer when the component unmounts
  }, []);

  return (
    <>
      <div className="w-96 h-[300px] ml-1 p-1 border border-black overflow-y-scroll overflow-x-hidden bg-slate-100 rounded-lg flex flex-col-reverse">
        {chatMessages.map((message, index) => {
          return (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          );
        })}
      </div>
      <form
        className="w-full p-2 ml-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kalyan",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="border border-black px-1 w-72"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 w-16 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
