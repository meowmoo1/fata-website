
// Get elements
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

// Initialize the current user
let currentUser = 'User 1';

// Retrieve chat messages from localStorage
const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
storedMessages.forEach((message) => {
  displayMessage(message.userName, message.message, 'user-message');
});

// Add event listener to send button
sendButton.addEventListener('click', function() {
  const message = userInput.value;
  if (message.trim() !== '') {
    displayMessage(currentUser, message, 'user-message');
    userInput.value = '';

    // Toggle the current user
    currentUser = currentUser === 'User 1' ? 'User 2' : 'User 1';

    // Store chat messages in localStorage
    const chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    chatMessages.push({ userName: currentUser, message: message });
    localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
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
