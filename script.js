const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const button = document.getElementById("send-button");

button.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;
  chatbox.innerHTML += `<div><strong>Та:</strong> ${text}</div>`;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Authorization": "Bearer sk-XXXXXXXXXXXXXXXXXXXXXX"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: text }]
      }),
    });

    const data = await response.json();
    const reply = data.choices[0].message.content;
    chatbox.innerHTML += `<div><strong>Oyunsanaa:</strong> ${reply}</div>`;
  } catch (error) {
    chatbox.innerHTML += `<div><strong>Алдаа:</strong> ${error.message}</div>`;
  }

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
});
