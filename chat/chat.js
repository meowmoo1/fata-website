// Get elements
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Initialize the current user
let currentUser = 'User 1 : ';

// Add event listener to send button
sendButton.addEventListener('click', function() {
  const message = userInput.value;
  if (message.trim() !== '') {
    displayMessage(currentUser, message, 'user-message');
    userInput.value = '';

    // Toggle the current user
    currentUser = currentUser === 'User 1 : ' ? 'User 2 : ' : 'User 1 : ';
  }
});

// Function to display message in the chatbox
function displayMessage(userName, message, className) {
  const chatMessage = document.createElement('div');
  chatMessage.classList.add('chat-message');
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message', className);
  const userNameElement = document.createElement('span');
  userNameElement.classList.add('user-name');
  userNameElement.textContent = userName;
  const messageElement = document.createElement('p');
  messageElement.classList.add('message');
  messageElement.textContent = message;
  userMessage.appendChild(userNameElement);
  userMessage.appendChild(messageElement);
  chatMessage.appendChild(userMessage);
  chatbox.appendChild(chatMessage);
  chatbox.scrollTop = chatbox.scrollHeight;
}
