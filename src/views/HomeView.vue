<template>
  <main class="mt-10 md:mt-1 flex flex-col-reverse gap-8 items-center md:flex-row md:gap-16 md:justify-center min-h-[65vh] md:min-h-[80vh]">
    <div ref="textContainer" class="space-y-2 text-center md:text-left px-10 opacity-0">
      <p class="text-amber-200">Hello World, I'm</p>
      <h1 ref="name" class="text-4xl font-bold md:text-5xl text-white">MARDY PEPEK KONTOL</h1>
      <div class="py-2">
        <h1 ref="title" class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-yellow-500 md:text-2xl">
          Fullstack Developer & Software Engineer
        </h1>
      </div>
      <p ref="subtitle" class="text-white pr-4">Welcome to My personal website. <span class="wave">👋🏼</span></p>
    </div>
    <div ref="imageContainer" class="flex justify-center md:justify-start opacity-0">
      <img alt="avatar" fetchpriority="high" width="300" height="300" decoding="async"
        class="w-10/12 md:h-auto rounded-full border-4 border-amber-200 pict" src="ink.png">
    </div>
  </main>
</template>

<script>
import gsap from "gsap";

export default {
  name: 'HomeView',
  mounted() {
    this.animateElements();
  },
  methods: {
    animateElements() {
      gsap.to(this.$refs.textContainer, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out"
      });

      gsap.from(this.$refs.name, {
        opacity: 0,
        y: -50,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out"
      });

      gsap.from(this.$refs.title, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        delay: 0.4,
        ease: "power3.out"
      });

      gsap.from(this.$refs.subtitle, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        delay: 0.6,
        ease: "power3.out"
      });

      gsap.to(this.$refs.imageContainer, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        delay: 0.8,
        ease: "power3.out"
      });
    }
  }
};
</script>

<style>
body {
  overflow-y: scroll;
  overflow-x: hidden;
}

.wave {
  animation: wave-animation 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0%, 60%, 100% { transform: rotate(0deg); }
  10%, 30% { transform: rotate(14deg); }
  20%, 40% { transform: rotate(-8deg); }
  50% { transform: rotate(10deg); }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
}
</style>