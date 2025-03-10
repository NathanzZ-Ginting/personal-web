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
      title: "General Mentor at CompeteMate GDGoC Gunadarma University",
      company: "Google Developer Grups On Campus",
      year: "Feb 2025 - Mar 2025",
      status: "Part-time",
      description: "Mentoring students in software engineering and development."
    },
    {
      title: "Mobile Programming Mentor and Instructor",
      company: "DuniaCoding",
      year: "Jan 2025 - Present",
      status: "Part-Time",
      description: "I have been teaching and guiding participants for one year, providing consultations technical support, and preparation to help them enhance their skills in technology"
    },
    {
      title: "Information Technology Instructor",
      company: "Superprof",
      year: "Dec 2024 - Present",
      status: "Freelance",
      description: "   I provide interactive, project-based learning in programming, mobile development, and software engineering. With real-world experience, I guide students through practical lessons, industry case studies, and personalized mentoring to help them grow and achieve their career goals."
    },
    {
      title: "Web Application Developer",
      company: "FundEx",
      year: "Feb 2023 - Jan 2025",
      status: "Freelance",
      description: "Engineered custom web applications from concept to deployment, ensuring scalability and performance."
    },
    {
    title: "Fullstack Web Application Developer",
    company: "FundEx",  
    year: "Feb 2025 - Present",
    status: "Freelance",
    description: "As a Fullstack Developer, I have worked extensively with various technologies, including HTML, CSS, JavaScript, Bootstrap, React Native (for mobile), PHP Laravel, and Git. During my in-class training, I completed three significant projects, notably developing a library website using PHP Laravel, React.js, and React Native for mobile applications. Over the course of three months, I focused on frontend development, mastering HTML, CSS, JavaScript, and Bootstrap to create responsive and visually appealing user interfaces (UI) for web applications.."
    },
    {
      title: "Mobile Apps Engineer",
      company: "Modeza",
      year: "Mei 2024 - Present",
      status: "Contract",
      description: "Building and maintaining high-performance web applications."
    },
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