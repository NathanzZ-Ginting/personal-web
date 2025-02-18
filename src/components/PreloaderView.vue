<template>
  <div class="preloader">
    <h1>WELCOME</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showPreloader = ref(true);
onMounted(() => {
  setTimeout(() => {
    showPreloader.value = false;
  }, 1500);
});
</script>

<style scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: 2rem;
  z-index: 100;
  animation: fadeOut 1.5s forwards;
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; visibility: hidden; }
}
</style>