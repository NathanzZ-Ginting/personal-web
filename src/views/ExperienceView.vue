<template>
    <div class="max-w-4xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-center mb-8">Experience</h1>
      <div class="space-y-6">
        <div v-for="(exp, index) in experiences" :key="index" class="relative p-4 bg-white shadow-lg rounded-lg border">
          <div class="absolute left-[-10px] top-4 w-5 h-5 bg-blue-500 rounded-full"></div>
          <h2 class="text-xl font-semibold">{{ exp.title }}</h2>
          <p class="text-gray-500">{{ exp.company }} • {{ exp.year }}</p>
          <p class="mt-2 text-gray-700">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const experiences = [
    {
      title: "Fullstack Web Developer",
      company: "Fundex",
      year: "2023 - Present",
      description: "Developing scalable web applications and ensuring smooth deployment."
    },
    {
      title: "Mobile Apps Engineer",
      company: "Modeza",
      year: "2023 - Present",
      description: "Building and maintaining high-performance mobile applications."
    },
    {
      title: "General Mentor",
      company: "Google Developers Group Gunadarma",
      year: "2024",
      description: "Providing guidance and mentoring for aspiring developers."
    },
    {
      title: "Instructor & Mentor",
      company: "Dunia Coding & Superprof",
      year: "2023 - Present",
      description: "Teaching and mentoring students in software engineering and development."
    }
  ];
  </script>
  
  <style scoped>
  /* Custom styling (if needed) */
  </style>
  