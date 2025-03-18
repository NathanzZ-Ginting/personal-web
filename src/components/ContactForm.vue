<template>
  <div class="max-w-lg mx-auto bg-[#121212] p-8 rounded-2xl shadow-2xl text-white border border-[#383838]">
    <h2 class="text-3xl font-bold mb-6 text-center text-[#ffdb70]">Hubungi Saya</h2>
    
    <form @submit.prevent="sendMessage" class="space-y-6">
      <div class="relative">
        <input 
          v-model="formData.name"
          type="text"
          placeholder="Nama"
          required
          class="w-full p-4 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffdb70] focus:ring-opacity-50 transition duration-300"
        />
      </div>

      <div class="relative">
        <input 
          v-model="formData.email"
          type="email"
          placeholder="Email"
          required
          class="w-full p-4 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffdb70] focus:ring-opacity-50 transition duration-300"
        />
      </div>

      <div class="relative">
        <textarea 
          v-model="formData.message"
          placeholder="Pesan"
          required
          class="w-full p-4 h-32 rounded-lg bg-[#1e1e1e] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ffdb70] focus:ring-opacity-50 transition duration-300"
        ></textarea>
      </div>

      <button 
        type="submit" 
        class="w-full p-4 bg-[#ffdb70] hover:bg-amber-500 transition duration-300 rounded-lg font-semibold text-[#121212] shadow-lg hover:shadow-2xl">
        Kirim Pesan
      </button>
    </form>

    <p v-if="successMessage" class="mt-6 text-center text-green-400 font-semibold">
      {{ successMessage }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
      successMessage: ''
    };
  },
  methods: {
    async sendMessage() {
      try {
        const response = await fetch("https://formspree.io/f/xpwpwjby", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          this.successMessage = "Pesan berhasil dikirim!";
          this.formData = { name: '', email: '', message: '' }; // Reset form
        } else {
          this.successMessage = "Gagal mengirim pesan!";
        }
      } catch (error) {
        this.successMessage = "Terjadi kesalahan!";
      }
    },
  },
};
</script>

<style scoped>
</style>
