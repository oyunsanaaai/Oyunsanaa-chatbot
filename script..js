const OPENAI_API_KEY = "Таны_авсан_API_KEY";

async function sendMessageToGPT(message) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

document.getElementById("sendButton").addEventListener("click", async () => {
  const userInput = document.getElementById("userInput").value;
  if (!userInput) return;

  const chatbox = document.getElementById("chatbox");
  chatbox.innerHTML += `<div><strong>Та:</strong> ${userInput}</div>`;

  const reply = await sendMessageToGPT(userInput);
  chatbox.innerHTML += `<div><strong>Oyunsanaa:</strong> ${reply}</div>`;

  document.getElementById("userInput").value = "";
  chatbox.scrollTop = chatbox.scrollHeight; // Доош нь автоматаар гүйлгэх
});
