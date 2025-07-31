const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const button = document.getElementById("send-button");

button.addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) return;

  chatbox.innerHTML += `<div><strong>Та:</strong> ${text}</div>`;
  input.value = "";

  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    chatbox.innerHTML += `<div><strong>Oyunsanaa:</strong> ${data.reply}</div>`;
  } catch (error) {
    chatbox.innerHTML += `<div style="color:red"><strong>Алдаа:</strong> Холболт амжилтгүй боллоо.</div>`;
  }
});
