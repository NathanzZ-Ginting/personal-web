<template>
    <div class="max-w-4xl mx-auto p-6">
      <div class="flex items-center space-x-4 mb-8">
        <h1 class="text-3xl font-bold text-white">Experience</h1>
        <div class="flex-1 border-t border-[#ffdb70]"></div>
      </div>
      <div class="space-y-6">
        <div 
          v-for="(exp, index) in experiences" 
          :key="index" 
          class="relative p-6 bg-[#121212] shadow-lg rounded-lg border border-gray-700 opacity-0 transform translate-y-10 transition-all duration-700 ease-in-out"
          :class="{'opacity-100 translate-y-0': isVisible}"
        >
          <div class="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5 bg-[#ffdb70] rounded-full"></div>
          <div class="flex flex-col items-center text-center">
            <h2 class="text-xl font-semibold text-white">{{ exp.title }}</h2>
            <span class="text-sm font-bold px-3 py-1 rounded-full mt-2" :class="getStatusClass(exp.status)">
              {{ exp.status }}
            </span>
          </div>
          <p class="text-gray-400 text-center">{{ exp.company }} • {{ exp.year }}</p>
          <p class="mt-2 text-gray-300 text-center">{{ exp.description }}</p>
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
  
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Core Initiative Studio",
      year: "Okt 2023 - Jan 2024",
      status: "Internship",
      description: "Developing scalable web applications and ensuring smooth deployment."
    },
    {
      title: "Mobile Apps Engineer",
      company: "Modeza",
      year: "2023 - Present",
      status: "Full-time",
      description: "Building and maintaining high-performance mobile applications."
    },
    {
      title: "General Mentor at CompeteMate 2025",
      company: "Google Developers Group Gunadarma University",
      year: "2025 - Present",
      status: "Freelance",
      description: "Providing guidance and mentoring for aspiring developers."
    },
    {
      title: "Mobile Programming Mentor and Instructor ",
      company: "Dunia Coding",
      year: "Jan 2025 - Present",
      status: "Part-time",
      description: "Teaching and mentoring students in software engineering and development."
    },
    {
    title: "Information Technology Instructor",
    company: "Superprof",  
    year: "Feb 2025 - Present",
    status: "Part-time",
    description: "Teaching and mentoring students in software engineering and development."
    },
    {
      title: "Web Application Developer",
      company: "FundEx.ID",
      year: "Feb 2023 - Jan 2025",
      status: "Freelance",
      description: "Building and maintaining high-performance web applications."
    },
    {
      title: "Fullstack Web Application Developer",
      company: "FundEx.ID",
      year: "Jan 2025 - Present",
      status: "Freelance",
      description: "Building and maintaining high-performance web applications."
    }
  ];
  
  const getStatusClass = (status) => {
    switch (status) {
      case "Full-time":
        return "bg-green-500 text-white";
      case "Internship":
        return "bg-blue-500 text-white";
      case "Freelance":
        return "bg-yellow-500 text-black";
      case "Part-time":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };
  </script>
  
  <style scoped>
  /* Animasi smooth masuk saat scroll */
  </style>