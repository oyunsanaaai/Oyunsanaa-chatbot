const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("send-button");

sendButton.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    const p = document.createElement("p");
    p.textContent = "Та: " + message;
    chatbox.appendChild(p);
    userInput.value = "";
    
    // Эндээс chatbot-ийн хариу орох логик нэмнэ
    const botResponse = document.createElement("p");
    botResponse.textContent = "Oyunsanaa: Сайн байна уу!";
    chatbox.appendChild(botResponse);
  }
});
