<script>
export default {
  data() {
    return {
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: 'HTML',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
          status: 'Advanced'
        },
        {
          id: 2,
          name: 'CSS',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
          status: 'Advanced'
        },
        {
          id: 3,
          name: 'PHP',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-php-2038871-1720084.png',
          status: 'Advanced'
        },
        {
          id: 4,
          name: 'Javascript',
          imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AJavaScript-logo.png&psig=AOvVaw0ceaUB4Eddx-sOAaMNo6V4&ust=1737895413719000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCayYjzkIsDFQAAAAAdAAAAABAE',
          status: 'Advance'
        },
        {
          id: 5,
          name: 'Laravel',
          imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
          status: 'Advance'
        },
        {
          id: 6,
          name: 'Codeigniter',
          imageUrl: 'https://cdn-peanutsquare.b-cdn.net/wp-content/uploads/2022/11/codeigniter-logo.png',
          status: 'Intermediate'
        },
        {
          id: 7,
          name: 'VueJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
          status: 'Intermediate'
        },
        {
          id: 8,
          name: 'AlpineJS',
          imageUrl: 'https://avatars.githubusercontent.com/u/59030169?s=200&v=4',
          status: 'Beginner'
        },
        {
          id: 9,
          name: 'NodeJS',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png',
          status: ' Intermediate'
        },
        {
          id: 10,
          name: 'Tailwind',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
          status: 'Advanced'
        },
        {
          id: 11,
          name: 'Bootstrap',
          imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
          status: 'Intermediate'
        },
        {
          id: 12,
          name: 'ReactJS',
          imageUrl: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
          status: 'Advanced'
        },
        {
          id: 13,
          name: 'Flutter',
          imageUrl: 'data:image/png;base64,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',
          status: 'Advanced'
        },
        {
          id: 14,
          imageUrl: 'data:image/png;base64,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',
          name: 'Java',
          status: 'Intermediate'
        },
        {
          id: 15,
          name: 'Kotlin',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/K ,kotlin-logo.svg/1200px-Kotlin-logo.svg.png',
          status: 'Beginner'
        },
      ],
      tools: [
        {
          id: 1,
          name: 'Git',
          imageUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
          status: 'Version Control'
        },
        {
          id: 2,
          name: 'GitHub',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
          status: 'Git Hosting'
        },
        {
          id: 3,
          name: 'NPM',
          imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-npm-3-1175132.png',
          status: 'Package Manager'
        },
        {
          id: 4,
          name: 'MySQL',
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
          status: 'Database'
        },
      ]
    };
  }
}
</script>
<template>
  <div
    class="bg-[#1e1e1f] px-5 py-5 md:px-12 md:py-10 text-left border border-[#383838] rounded-3xl text-amber-50 mx-3 mb-5">
    <article data-page="about">

      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          About Me &nbsp;
          <div class="h-[1px] w-32 bg-amber-200 md:w-96 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
        </div>
      </header>

      <section
        class="text-sm md:text-lg text-justify flex flex-col gap-4 md:flex-row md:gap-8 md:justify-left md:items-center">
        <div class="flex justify-center">
          <img class="w-9/12 rounded-full mb-3 fadein-up"
            src="ink.png" alt="Foto">
        </div>
        <div class="md:w-7/12">
          <p class="mb-3 md:mb-7 fadein-left fadeins-1">
            &nbsp; &nbsp; &nbsp; I am Joenathan Haganta Ginting, a Fullstack Developer, Software Engineer, Instructor & Mentor, and Tech Enthusiast with extensive experience in both mobile and web development.

As a technology professional, I have actively contributed as a Mobile Programming Mentor & Instructor at Dunia Coding and an Information Technology Instructor at Superprof. Additionally, I serve as a General Mentor at the CompeteMate GDGOC Gunadarma University competition, guiding participants in enhancing their skills and strategies in programming and software engineering.
          </p>
          <p class="mb-3 fadein-left fadeins-2">
            &nbsp; &nbsp; &nbsp; Currently, I work as a Full-time Mobile Developer while also handling various projects as a Freelance Web Application Developer and Fullstack Web Developer. With a strong technical background, I have earned several professional certifications, including:
✅ Fullstack Web Developer – Rakamin
✅ Mobile Apps Engineer – Amazon Web Services (AWS)
✅ Cloud Engineer – Alibaba Cloud
✅ Software Developer – Microsoft Azure

Beyond software development, I have published several articles on software engineering and received multiple awards in technology Olympiads.

With a passion for knowledge-sharing and continuous growth, I am committed to delivering innovative solutions in technology and helping fellow developers unlock their full potential. 🚀
          </p>
        </div>

      </section>

    </article>
  </div>

  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-amber-50 mx-3">
    <article data-page="about">
      <header>
        <div class="text-2xl font-bold text-white mb-5 fadein-bot title-section flex items-center">
          <div class="h-[1px] w-10 bg-amber-200 md:w-20 aos-init aos-animate" data-aos="zoom-in-left"
            data-aos-duration="600"></div>
          &nbsp; Skills
        </div>
      </header>
      <section>
        <div>
          <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mb-5">
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 1 }" @click="activeTab = 1">Tech Stack</button>
            </li>
            <li class="mr-2">
              <button class="inline-block px-4 py-3 rounded-lg hover:text-white"
                :class="{ 'text-amber-200 bg-amber-200 bg-opacity-10': activeTab === 2 }" @click="activeTab = 2">Tools</button>
            </li>
          </ul>
        </div>
        <div v-show="activeTab === 1">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tech" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="activeTab === 2">
          <div class="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
            <div v-for="item in tools" :key="item.id">
              <div
                class="item-tech flex cursor-pointer items-center gap-2 rounded border border-amber-200 px-2 py-2 hover:bg-amber-200 hover:bg-opacity-10 md:gap-3 lg:px-3">
                <div class="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2 zoom-in">
                  <img alt="HTML" loading="lazy" width="32" height="32" decoding="async" data-nimg="1"
                    class="img-tech drop-shadow-xl transition-all duration-300 h-[65%] w-[65%] lg:h-[85%] lg:w-[85%]  "
                    :src="item.imageUrl" style="color: transparent;">
                </div>
                <div class="flex items-center text-sm md:text-base lg:text-lg">
                  <div class="tech font-medium text-secondary transition-all duration-300 translate-y-0 ">{{ item.name }}
                  </div>
                  <div
                    class="status-tech opacity-0 absolute mt-5 text-[10px] text-amber-200 transition-all duration-300 md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}
</style>
