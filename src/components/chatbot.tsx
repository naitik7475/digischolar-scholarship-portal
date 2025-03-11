/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect, useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "You are a chatbot. Your name is DigiBuddy. Restrict your questions to be only about Pradhan Mantri Special Scholarship Scheme (PMSSS) in the Jammu and Kashmir and Ladakh region. Other questions should be given an appropriate error message. All answers should be concise and small. If at the end of a conversation, after the user says thank you or there is another indication of the conversation ending, ask the user for their feedback between 0 to 5 stars. If the user feedback is below 3 stars, ask them if you can do anything to satisfy them, and if the rating is below 1.5 stars, ask them to refer to contacts. If anyone asks for contact in chat, give them the option to have phone numbers or email. When an appropriate option is given, return either this: Phone:- +1 123-456-7890, +1 987-654-3210 or this: Email:- contact@example.com, support@example.com",
});

const ChatbotWithNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    {
      sender: "bot",
      text: "Great to meet you. What would you like to know? And type Thank you to end the conversation.",
    },
  ]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chat] = useState(() =>
    model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello" }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
    }),
  );

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const userMsg = { sender: "user", text: userMessage };
    setMessages((prev) => [...prev, userMsg]);
    setUserMessage("");
    setLoading(true);

    try {
      const result = await chat.sendMessage(userMessage);
      const botReply = result.response.text();
      const botMsg = { sender: "bot", text: botReply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error("Error communicating with Gemini model:", error);
      const errorMsg = {
        sender: "bot",
        text: "Oops! Something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={toggleChat}
        className="rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-4 text-white shadow-lg hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.806 9-8.5 0-4.695-4.03-8.5-9-8.5-4.97 0-9 3.806-9 8.5 0 2.053.805 3.934 2.143 5.36l-.62 2.48a.75.75 0 00.93.904l2.463-.635A8.792 8.792 0 0012 20.25z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="animate-fade-in absolute bottom-full right-0 mb-4 w-80 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 sm:w-96">
          <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-green-400 to-blue-500 px-4 py-3 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <img
                src="/botavatar.jpg"
                alt="Chatbot Avatar"
                className="size-8 rounded-full border-2 border-white object-cover"
              />
              <h2 className="text-lg font-semibold text-white">DigiBuddy</h2>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div
            ref={chatContainerRef}
            className="mb-3 mt-4 h-64 space-y-3 overflow-y-auto px-4"
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-lg px-3 py-2 text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-center text-gray-500 dark:text-gray-400">
                <span className="text-sm">Typing...</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-2 px-4 pb-4">
            <input
              type="text"
              placeholder="Type your message..."
              value={userMessage}
              onChange={handleInputChange}
              className="grow rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWithNavbar;