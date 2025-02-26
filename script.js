document.getElementById("chatBtn").addEventListener("click", function() {
    document.getElementById("content").innerHTML = `
        <h2>Chat Room</h2>
        <div id="chat-box"></div>
        <input type="text" id="message-input" placeholder="Type a message...">
        <button id="send-btn">Send</button>
    `;

    loadChat();

    document.getElementById("send-btn").addEventListener("click", sendMessage);
});

function sendMessage() {
    let messageInput = document.getElementById("message-input");
    let message = messageInput.value.trim();

    if (message !== "") {
        let chatHistory = JSON.parse(localStorage.getItem("chat")) || [];
        chatHistory.push(message);
        localStorage.setItem("chat", JSON.stringify(chatHistory));
        messageInput.value = "";
        loadChat();
    }
}

function loadChat() {
    let chatBox = document.getElementById("chat-box");
    let chatHistory = JSON.parse(localStorage.getItem("chat")) || [];
    chatBox.innerHTML = chatHistory.map(msg => `<p>${msg}</p>`).join("");
}
