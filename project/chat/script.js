const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

function sendMessage() {
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        // Create a new message element and add it to the chat box
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = 'You: ' + messageText;
        chatBox.appendChild(messageElement);

        // Clear the input field
        messageInput.value = '';

        // Scroll to the bottom to show the latest message
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
