document.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('message-input');
    var sendButton = document.getElementById('send-button');
    var chatMessages = document.getElementById('chat-messages');
  
    var socket = io.connect('http://localhost:5500');

  
    // Event listener for 'messageReceived' event
    socket.on('messageReceived', function(message) {
      displayMessage(message);
    });
  
    // Event listener for send button click
    sendButton.addEventListener('click', function() {
      var messageContent = messageInput.value.trim();
      if (messageContent !== '') {
        var message = {
          sender: 'User1',
          recipient: 'User2',
          content: messageContent
        };
        socket.emit('chatMessage', message);
        displayMessage(message);
        messageInput.value = '';
      }
    });
  
    // Function to display a message in the chat window
    function displayMessage(message) {
      var messageElement = document.createElement('div');
      messageElement.classList.add('message');
      if (message.sender === 'User1') {
        messageElement.classList.add('self');
      } else {
        messageElement.classList.add('other');
      }
      messageElement.textContent = message.sender + ': ' + message.content;
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
  