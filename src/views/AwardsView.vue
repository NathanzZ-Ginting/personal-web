<template>
  <div class="max-w-4xl mx-auto p-6">
    <div class="flex items-center space-x-4 mb-8">
      <h1 class="text-3xl font-bold text-white">Awards & Achievements 🏆</h1>
      <div class="flex-1 border-t border-[#ffdb70]"></div>
    </div>
    
    <div class="space-y-6">
      <div 
        v-for="(award, index) in awards" 
        :key="index" 
        class="relative p-6 bg-[#121212] shadow-lg rounded-lg border border-gray-700 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out"
        :class="{'opacity-100 translate-y-0': isVisible}"
      >
        <div class="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#ffdb70] rounded-full"></div>
        <div class="flex flex-col items-center text-center">
          <h2 class="text-xl font-semibold text-white">{{ award.title }}</h2>
          <span class="text-sm font-bold px-3 py-1 rounded-full mt-2 bg-[#ffdb70] text-black">
            {{ award.year }}
          </span>
        </div>
        <p class="text-gray-400 text-center">{{ award.organization }}</p>
        <p class="mt-2 text-gray-300 text-center">{{ award.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});

const awards = [
  {
    title: "Kompetisi Sains Akademik Nasional",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "I am honored to have received the 𝐒𝐢𝐥𝐯𝐞𝐫 𝐌𝐞𝐝𝐚𝐥 in the Informatics Olympiad, where I demonstrated my expertise in developing innovative solutions, including a website dedicated to preserving and sharing historical narratives."
  },
  {
    title: "Festival Olimpiade Nasional",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "I am proud to have received the 𝐆𝐨𝐥𝐝 𝐌𝐞𝐝𝐚l in the Informatics Olympiad, a recognition of my dedication to mastering the intricacies of computational problem-solving."
  },
  {
    title: "Indonesian Youth Science Medical Olympiad",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "I was honored with the 𝐆𝐨𝐥𝐝 𝐌𝐞𝐝𝐚𝐥 in the Informatics Olympiad for demonstrating exceptional problem-solving skills, advanced algorithm design, and programming expertise."
  },
  {
    title: "INDONESIAN ADVANCE SCIENCE COMPETITION",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "Awarded the 𝐒𝐢𝐥𝐯𝐞𝐫 𝐌𝐞𝐝𝐚𝐥 in the Informatics Olympiad for developing an innovative application that promotes eco-friendly transportation."
  },
  {
    title: "National Olympiad Of Academic",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "proud to have been awarded the 𝐆𝐨𝐥𝐝 𝐌𝐞𝐝𝐚𝐥 in the National Olympiad of Academy, where I showcased my skills in mobile app development and innovative thinking."
  },
  {
    title: "Kompetisi Sains Nasional",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "honored to have been awarded the 𝐆𝐨𝐥𝐝 𝐌𝐞𝐝𝐚𝐥 in the Informatics Olympiad, a prestigious recognition of my proficiency in computational problem-solving and algorithmic design. This achievement highlights my ability to approach complex challenges with analytical precision and deliver optimal solutions under time constraints."
  },
  {
    title: "Olimpiade Sains Pelajar Nasional",
    organization: "Pusat Prestasi Nasional",
    year: "2024",
    description: "proud to have earned the 𝐒𝐢𝐥𝐯𝐞𝐫 𝐌𝐞𝐝𝐚𝐥 in the Informatics Olympiad, a testament to my strong foundation in algorithmic thinking and programming. This achievement reflects my ability to solve challenging computational problems efficiently and effectively, while maintaining a high level of performance under competitive conditions."
  }
];
</script>

<style scoped>
</style>
