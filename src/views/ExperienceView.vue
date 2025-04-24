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
        <div class="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-5 h-5">
          <!-- Menampilkan logo jika ada -->
          <img v-if="exp.logo" :src="exp.logo" alt="Logo" class="w-full h-full object-contain rounded-full" />
          <div v-else class="w-full h-full bg-[#ffdb70] rounded-full"></div>
        </div>
        <div class="flex flex-col items-center text-center">
          <h2 class="text-xl font-semibold text-white">{{ exp.title }}</h2>
          <sp222an class="text-sm font-bold px-3 py-1 rounded-full mt-2" :class="getStatusClass(exp.status)">
            {{ exp.status }}
          </sp222an>
        </div>
        <p class="text-gray-400 text-center">{{ exp.company }} • {{ exp.year }}</p>
        <p class="mt-2 text-gray-300 text-center">{{ exp.description }}</p>

        <!-- Menampilkan Bahasa Pemrograman -->
        <div v-if="exp.languages.length > 0" class="mt-4">
          <h3 class="text-sm text-white font-semibold">Languages Used:</h3>
          <ul class="flex flex-wrap justify-center space-x-2 mt-2">
            <li 
              v-for="(language, index) in exp.languages" 
              :key="index" 
              class="px-4 py-2 text-xs bg-red-700 text-white rounded-full"
            >
              {{ language }}
            </li>
          </ul>
        </div>
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
    year: "Feb 2024 - Mar 2024",
    status: "Part-Time",
    description: "Mentoring students in software engineering and mobile development.",
    languages: ["Java", "JavaScript", "Dart"],
    logo: "/img/g.png"
  },
  {
    title: "Mobile Programming Mentor and Instructor",
    company: "DuniaCoding",
    year: "Jan 2024 - Present",
    status: "Part-Time",
    description: "Teaching mobile programming skills in Flutter.",
    languages: ["Dart", "Flutter"],
    logo: "/img/dc.jpeg"
  },
  {
    title: "Information Technology Instructor",
    company: "Superprof",
    year: "Dec 2023 - Present",
    status: "Freelance",
    description: "Instructing students in various IT topics, including web development.",
    languages: ["JavaScript", "HTML", "CSS"],
    logo: "/img/superprof.png"
  },
  {
    title: "Web Developer Mentor",
    company: "Universitas Islam Negeri Syarif Hidayatullah Jakarta",
    year: "Apr 2024 - Present",
    status: "Freelance",
    description: "Mentoring students in web development projects.",
    languages: ["JavaScript", "PHP", "Node.js"],
    logo: "/img/uin.jpg"
  },
  {
    title: "Mobile Application Developer",
    company: "UpWork",
    year: "Jan 2024 - Present",
    status: "Contract",
    description: "Developing mobile apps for clients.",
    languages: ["Java", "Kotlin", "Flutter"],
    logo: "/img/upwork.png"
  },
  {
    title: "Fullstack Web Developer",
    company: "UpWork",
    year: "Jun 2023 - Jan 2024",
    status: "Contract",
    description: "Building fullstack web applications for various clients.",
    languages: ["JavaScript", "Node.js", "React", "MongoDB"],
    logo: "/img/upwork.png"
  },
  {
    title: "Frontend Web Developer",
    company: "UpWork",
    year: "Jan 2023 - Jun 2023",
    status: "Contract",
    description: "Developing front-end components and interfaces.",
    languages: ["HTML", "CSS", "JavaScript", "Vue.js"],
    logo: "/img/upwork.png"
  },
  {
    title: "Fullstack Web Application Developer",
    company: "FundEx",
    year: "Feb 2024 - Present",
    status: "Freelance",
    description: "Developing both the front-end and back-end of the web application.",
    languages: ["JavaScript", "Node.js", "React", "Express"],
    logo: "/img/fund.jpeg"
  },
  {
    title: "Web Application Developer",
    company: "FundEx",
    year: "Feb 2023 - Jan 2024",
    status: "Freelance",
    description: "Building web applications and APIs.",
    languages: ["PHP", "JavaScript", "MySQL"],
    logo: "/img/fund.jpeg"
  },
  {
    title: "Mobile Apps Engineer",
    company: "Modeza-Sorex",
    year: "Feb 2024 - Present",
    status: "Full-time",
    description: "Designing and developing mobile applications.",
    languages: ["Kotlin", "Java"],
    logo: "/img/images-3.png"
  },
  {
    title: "Mobile Developer",
    company: "PT Bank Mandiri (Persero) Tbk",
    year: "Oct 2023 - Jan 2024",
    status: "Internship",
    description: "Developing mobile applications during my internship.",
    languages: ["Java", "Android"],
    logo: "/img/images-2.png"
  },
  {
    title: "Founder",
    company: "Tech Education IDN",
    year: "Jan 2024 - Present",
    status: "Chief Executive Officer",
    description: "Running a tech education platform and providing training for students.",
    languages: ["JavaScript", "Node.js", "React"],
    logo: "/img/tech.jpeg"
  },
  {
    title: "Frontend Web Developer",
    company: "Core Initiative Studio",
    year: "Jan 2023 - Apr 2023",
    status: "Internship",
    description: "Developing frontend components for web applications.",
    languages: ["HTML", "CSS", "JavaScript", "React"],
    logo: "/img/crs.jpeg"
  }
];

const getStatusClass = (status) => {
  switch (status) {
    case "Contract":
      return "bg-blue-500 text-white";
    case "Full-time":
      return "bg-green-500 text-white";
    case "Internship":
      return "bg-purple-500 text-white";
    case "Freelance":
      return "bg-yellow-400 text-black";
    case "Part-Time":
      return "bg-orange-500 text-white";
    case "Chief Executive Officer":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};
</script>

<style scoped>
/* Animasi smooth masuk saat scroll */
</style>