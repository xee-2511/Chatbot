import React, { useState } from "react";


const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 👋 I’m Bunny, your movie chatbot. Ask for any genre, I'll suggest you movies!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    let botReply = "";

    // --- Simple chatbot logic ---
    if (input.toLowerCase().includes("hi") || input.toLowerCase().includes("hello")) {
      botReply = "Hey there! 😊 How can I help you?";
    } else if (input.toLowerCase().includes("more action movies")) {
      botReply = "🔥 More action hits: Gladiator, Avengers: Endgame, Die Hard, Mission Impossible, Terminator 2.";
    } else if (input.toLowerCase().includes("action")) {
      botReply = "🔥 Some great action movies are Mad Max: Fury Road, John Wick, The Dark Knight.";
    } else if (input.toLowerCase().includes("more comedy movies")) {
      botReply = "😂 More comedy picks: Step Brothers, Dumb and Dumber, 21 Jump Street, Hot Fuzz, Borat.";
    } else if (input.toLowerCase().includes("comedy")) {
      botReply = "😂 Try watching The Hangover, Superbad, The Mask.";
    } else if (input.toLowerCase().includes("more horror movies")) {
      botReply = "👻 More horror picks: A Quiet Place, It, Hereditary, The Ring, The Exorcist.";
    } else if (input.toLowerCase().includes("horror")) {
      botReply = "👻 You should try The Conjuring, Insidious, Annabelle.";
    } else if (input.toLowerCase().includes("more romantic movies")) {
      botReply = "💕 More romantic ones: La La Land, Me Before You, Pride & Prejudice, Crazy Rich Asians, The Fault in Our Stars.";
    } else if (input.toLowerCase().includes("romantic")) {
      botReply = "💕 Some good ones: The Notebook, Titanic, A Walk to Remember.";
    } else if (input.toLowerCase().includes("more sci-fi movies") || input.toLowerCase().includes("more science fiction movies")) {
      botReply = "🚀 More sci-fi gems: Blade Runner 2049, Arrival, Ex Machina, Gravity, The Martian.";
    } else if (input.toLowerCase().includes("sci-fi") || input.toLowerCase().includes("science fiction")) {
      botReply = "🚀 Some sci-fi must-watches: Inception, Interstellar, The Matrix.";
    } else if (input.toLowerCase().includes("more thriller movies")) {
      botReply = "😱 More thrillers: The Silence of the Lambs, Prisoners, Zodiac, Oldboy, Memento.";
    } else if (input.toLowerCase().includes("thriller")) {
      botReply = "😱 Some top thrillers are Se7en, Gone Girl, Shutter Island.";
    } else {
      botReply = "Sorry, I don’t know that one. Try asking for action, comedy, horror, romantic, sci-fi, or thriller movies!";
    }

    setMessages([...messages, userMessage, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div style={styles.appBackground}>   {/* ✅ background wrapper */}
      <div style={styles.chatbotContainer}>
        <div style={styles.header}>🐰 Movie Chatbot</div>
        <div style={styles.messages}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                backgroundColor: msg.sender === "user" ? "#F875AA" : "#F875AA",
                color: msg.sender === "user" ? "white" : "black",
              }}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.inputContainer}>
          <input
            style={styles.input}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button style={styles.button} onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  appBackground: {
    backgroundImage: "url('/assets/robot.png')",
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",

  },
  chatbotContainer: {
    width: "600px",
    height: "600px",
    backgroundColor: "#F9C5D5", // ✅ light transparent pink
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    margin: "100px 0 0 100px", // shifted left
    boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
    position: "relative",
    zIndex: 1,
  },
  header: {
    backgroundColor: "#F65A83",
    color: "white",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
  messages: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    overflowY: "auto",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
  },
  button: {
    backgroundColor: "#F65A83",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};

export default Chatbot;
