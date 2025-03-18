<template>
  <div class="chat-container">
    <div class="messages">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
        <p><strong>{{ message.role === 'user' ? 'Kamu' : 'AI' }}:</strong> {{ message.content }}</p>
      </div>
    </div>
    <div class="input-container">
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Ketik pesan..." />
      <button @click="sendMessage">Kirim</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ChatAI",
  data() {
    return {
      userInput: "",
      messages: [],
      apiKey: "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", // Ganti dengan API Key yang benar
    };
  },
  methods: {
    async sendMessage() {
      if (!this.userInput.trim()) return;
      this.messages.push({ role: "user", content: this.userInput });

      try {
        const response = await axios.post(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            model: "gpt-3.5-turbo",
            messages: this.messages,
          },
          {
            headers: { Authorization: `Bearer ${this.apiKey}` },
          }
        );

        console.log("Response API:", response.data);
        this.messages.push({ role: "assistant", content: response.data.choices[0].message.content });
        this.userInput = "";
      } catch (error) {
        console.error("Error:", error);
      }
    },
  },
};
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #212529;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 10px;
}

.message {
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  max-width: 80%;
  word-wrap: break-word;
}

.user {
  background-color: #007bff;
  color: white;
  text-align: right;
  align-self: flex-end;
  border-top-right-radius: 0;
}

.assistant {
  background-color: #343a40;
  color: white;
  text-align: left;
  align-self: flex-start;
  border-top-left-radius: 0;
}

.input-container {
  display: flex;
  padding-top: 10px;
}

input {
  flex: 1;
  padding: 12px;
  background-color: #2c2f33;
  color: white;
  border: 1px solid #495057;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
}

button {
  padding: 12px 20px;
  margin-left: 8px;
  background-color: #17a2b8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #138496;
}
</style>