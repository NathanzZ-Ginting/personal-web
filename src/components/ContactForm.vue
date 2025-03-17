<template>
  <div class="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-white">
    <h2 class="text-2xl font-semibold mb-4 text-center">Hubungi Saya</h2>
    
    <form @submit.prevent="sendMessage" class="space-y-4">
      <input 
        v-model="formData.name"
        type="text"
        placeholder="Nama"
        required
        class="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <input 
        v-model="formData.email"
        type="email"
        placeholder="Email"
        required
        class="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <textarea 
        v-model="formData.message"
        placeholder="Pesan"
        required
        class="w-full p-3 h-32 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      ></textarea>

      <button 
        type="submit" 
        class="w-full p-3 bg-yellow-500 hover:bg-yellow-600 transition rounded-lg font-semibold text-gray-900"
      >
        Kirim
      </button>
    </form>

    <p v-if="successMessage" class="mt-4 text-center text-green-400 font-semibold">
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