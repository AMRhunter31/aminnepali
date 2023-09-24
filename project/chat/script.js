// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    messageInput.value = ""; // Clear the input field

    // Send the message to the chat box
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p>You: " + message + "</p>";

    // Scroll the chat box to the bottom to show the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}
