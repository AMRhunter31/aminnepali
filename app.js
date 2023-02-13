const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Listen for a new message
chatForm.addEventListener('submit', event => {
  event.preventDefault();

  // Get the value of the chat input
  const message = chatInput.value;

  // Append the message to the chat box
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);

  // Clear the chat input
  chatInput.value = '';
});
