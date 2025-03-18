<template>
  <!-- Navbar dan Footer -->
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-full backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="flex items-center">
          <button @click="redirectToHome" class="flex">
            <span class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">Joenathan</span>
          </button>
          <button @click="toggleChat" class="ml-3 text-sm bg-[#ffdb70] text-black px-3 py-1 rounded-lg hover:bg-amber-100 transition">
            💬 Chat AI
          </button>
        </div>
        <div class="flex md:order-2 fadein-bot">
          <a href="https://github.com/NathanzZ-Ginting">
            <img class="w-9 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" alt="github">
          </a>
        </div>
        <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1">
          <ul class="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li><router-link to="/" class="fadein-bot text-white hover:text-gray-400">Home</router-link></li>
            <li><router-link to="/about" class="fadein-bot text-white hover:text-gray-400">About</router-link></li>
            <li><router-link to="/experience" class="fadein-bot text-white hover:text-gray-400">Experience</router-link></li>
            <li><router-link to="/portfolio" class="fadein-bot text-white hover:text-gray-400">Portfolio</router-link></li>
            <li><router-link to="/awards" class="fadein-bot text-white hover:text-gray-400">Awards</router-link></li>
            <li><router-link to="/contact" class="fadein-bot text-white hover:text-gray-400">Contact</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <div class="md:mt-[100px]">
      <router-view />
    </div>

    <!-- Chat AI Component -->
    <div v-if="showChat" class="chat-container">
      <ChatAI />
    </div>
  </div>

  <!-- Footer Mobile -->
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md">
    <nav class="flex justify-around py-4 text-xs">
      <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
      <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
      <router-link to="/experience" class="text-gray-300 hover:text-white">Experience</router-link>
      <router-link to="/portfolio" class="text-gray-300 hover:text-white">Portfolio</router-link>
      <router-link to="/awards" class="text-gray-300 hover:text-white">Awards</router-link>
      <router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link>
    </nav>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import ChatAI from "./components/ChatAI.vue";

const router = useRouter();
const redirectToHome = () => {
  router.push("/");
};

// Toggle Chat AI
const showChat = ref(false);
const toggleChat = () => {
  showChat.value = !showChat.value;
};
</script>

<style scoped>
/* Styling untuk Chat AI */
.chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background: #222;
  padding: 15px;
  border-radius: 10px;
  color: white;
  box-shadow: 0px 0px 10px rgba(255, 255, 112, 0.6);
}
</style>