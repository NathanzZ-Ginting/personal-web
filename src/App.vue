<template>
  <!-- Navbar dan Footer -->
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-full backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">Joenathan</span>
        </button>
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
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View -->
    <div class="md:mt-[100px]">
      <router-view />
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
    </nav>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const redirectToHome = () => {
  router.push("/");
};
</script>

<style>
/* General Reset */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #ffdb70;
  border-radius: 5px;
}

::-webkit-scrollbar-button {
  width: 20px;
}

/* Body Styling */
body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  text-align: center;
  color: #fff;
  height: 100vh;
}

/* Navbar Styling */
nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  color: #ffdb70;
}

nav a.router-link-exact-active::after {
  display: block;
  content: "";
  width: 100%;
  height: 3px;
  background-color: #ffdb70;
  border-radius: 2px;
  margin-top: 5px;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>