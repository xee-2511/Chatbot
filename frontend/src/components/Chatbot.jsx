import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import QuickReplyButton from "./QuickReplyButton";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I’m your movie chatbot 🐰", quickReplies: ["Show top movies", "Search movie"] },
    { sender: "user", text: "Hello!" }
  ]);

 const sendMessage = async (reply) => {
  setMessages((prev) => [...prev, { sender: "user", text: reply }]);

  if (reply === "Show top movies") {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`);
    const data = await res.json();
    const movieTitles = data.results.slice(0, 5).map(m => m.title).join(", ");

    setMessages((prev) => [...prev, { sender: "bot", text: `Top Movies: ${movieTitles}` }]);
  } else {
    setMessages((prev) => [...prev, { sender: "bot", text: `You selected: ${reply}` }]);
  }
};


  return (
    <div className="w-[400px] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
        <h2 className="font-bold text-lg">🐰 Bunny</h2>
        <span className="text-sm">Online</span>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <MessageBubble key={i} sender={msg.sender} text={msg.text} />
        ))}
        {/* Quick Replies */}
        {messages[messages.length - 1].quickReplies && (
          <div className="flex flex-wrap gap-2 mt-2">
            {messages[messages.length - 1].quickReplies.map((reply, idx) => (
              <QuickReplyButton key={idx} label={reply} onClick={() => sendMessage(reply)} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-2 text-xs text-gray-500 bg-gray-100 text-center">
        Powered by Movie API
      </div>
    </div>
  );
}
