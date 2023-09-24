const pusher = new Pusher({
    appId: '1676291',
    key: '1729bbaddaf906e43c7f',
    secret: '348a5b60c490de2856cc',
    cluster: 'ap2',
    encrypted: true
});

const channel = pusher.subscribe('ameen shareonline'); // Use the correct channel name

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const userColor = getRandomColor();

channel.bind('message', function(data) {
    const chatBox = document.getElementById('chat-box');
    const messageClass = data.user === '1' ? 'user-1-message' : 'user-2-message';
    chatBox.innerHTML += `<p class="${messageClass}" style="color: ${userColor}">User ${data.user}: ${data.text}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();
    
    if (messageText !== '') {
        const message = {
            user: '1', // Replace with the user ID (1 for User 1, 2 for User 2, and so on)
            text: messageText,
        };

        channel.trigger('message', message);

        const chatBox = document.getElementById('chat-box');
        const messageClass = message.user === '1' ? 'user-1-message' : 'user-2-message';
        chatBox.innerHTML += `<p class="${messageClass}" style="color: ${userColor}">You: ${messageText}</p>`;
        chatBox.scrollTop = chatBox.scrollHeight;

        messageInput.value = ''; // Clear the input field
    }
}
