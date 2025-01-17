function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    chatContainer.classList.toggle('active');
}

// Simulate the response (Simple logic)
function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you?": "I'm good, thank you! How can I help you?",
        "bye": "Goodbye! Have a nice day!"
    };

    return responses[userMessage.toLowerCase()] || "Sorry, I don't understand that.";
}

// Send message function
function sendMessage() {
    const input = document.getElementById("user-input");
    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Show user message
    const messages = document.getElementById("messages");
    const userMsgDiv = document.createElement("div");
    userMsgDiv.className = "message user";
    userMsgDiv.textContent = `You: ${userMessage}`;
    messages.appendChild(userMsgDiv);

    // Get bot response
    const botResponse = getBotResponse(userMessage);

    // Show bot response
    const botMsgDiv = document.createElement("div");
    botMsgDiv.className = "message bot";
    botMsgDiv.textContent = `Bot: ${botResponse}`;
    messages.appendChild(botMsgDiv);

    input.value = ''; // Clear the input field
    messages.scrollTop = messages.scrollHeight; // Scroll to the latest message
}