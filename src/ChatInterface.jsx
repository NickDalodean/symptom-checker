/*
import React, { useState, useEffect } from 'react';

function ChatInterface() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    // Function to send a message to the backend
    const sendMessage = async (message) => {
        try {
            const response = await fetch('http://localhost:3000/api/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            if (response.ok) {
                const data = await response.json();
                setMessages([...messages, { text: data.response, isUser: false }]);
            } else {
                console.error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Function to handle message submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const message = inputMessage.trim();
        if (message !== '') {
            setMessages([...messages, { text: message, isUser: true }]);
            setInputMessage('');
            await sendMessage(message);
        }
    };

    useEffect(() => {
        const fetchInitialMessages = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/fetch-messages');
                if (response.ok) {
                    const data = await response.json();
                    setMessages(data.messages);
                } else {
                    console.error('Failed to fetch messages');
                }
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchInitialMessages();
    }, []); // This effect runs only once when the component mounts

    return (
        <div className="chatInterface">
            <h2>Chat</h2>
            <div className="chatMessages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.isUser ? 'userMessage' : 'botMessage'}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="messageForm">
                <input
                    type="text"
                    name="message"
                    placeholder="Type your message..."
                    autoComplete="off"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ChatInterface;
*/