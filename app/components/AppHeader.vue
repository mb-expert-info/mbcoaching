<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}
</script>

<template>
  <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm', isScrolled || isMenuOpen ? 'py-2' : 'py-4']">
    <div class="container mx-auto px-4 flex items-center justify-between relative z-50 transition-all duration-300">
      <NuxtLink to="/" class="flex items-center gap-2">
        <img src="/logo/logo_1.png" alt="Melissa Bounoua Logo" :class="['w-auto transition-all duration-300', isScrolled ? 'h-20' : 'h-32']" />
      </NuxtLink>
      
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink to="/" class="text-sm font-medium hover:text-brand-red transition-colors text-slate-800 uppercase tracking-widest">Accueil</NuxtLink>
        <NuxtLink to="/biographie" class="text-sm font-medium hover:text-brand-red transition-colors text-slate-800 uppercase tracking-widest">Parcours</NuxtLink>
        <NuxtLink to="/coaching" class="text-sm font-medium hover:text-brand-red transition-colors text-slate-800 uppercase tracking-widest">Coaching</NuxtLink>
        <NuxtLink to="/contact" class="text-sm font-medium hover:text-brand-red transition-colors text-slate-800 uppercase tracking-widest">Contact</NuxtLink>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden p-2 text-slate-800 hover:text-brand-red transition-colors z-50 relative">
        <div class="w-6 h-5 flex flex-col justify-between">
          <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? 'opacity-0' : '']"></span>
          <span :class="['w-full h-0.5 bg-current transition-all duration-300', isMenuOpen ? '-rotate-45 -translate-y-2.5' : '']"></span>
        </div>
      </button>

      <!-- Desktop Call to Action -->
      <NuxtLink to="/contact" class="hidden md:block px-6 py-2 bg-brand-red hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider rounded transition-colors duration-300 shadow-lg shadow-red-500/20">
        Réserver
      </NuxtLink>
    </div>

    <!-- Mobile Menu Overlay -->
    <client-only>
      <div v-show="isMenuOpen" class="fixed inset-0 h-screen w-screen bg-white z-40 md:hidden flex flex-col items-center justify-start pt-32 overscroll-none touch-none">
        <nav class="flex flex-col items-center gap-8 text-center">
          <NuxtLink @click="closeMenu" to="/" class="text-3xl font-bold uppercase italic text-slate-900 hover:text-brand-red transition-colors">Accueil</NuxtLink>
          <NuxtLink @click="closeMenu" to="/biographie" class="text-3xl font-bold uppercase italic text-slate-900 hover:text-brand-red transition-colors">Parcours</NuxtLink>
          <NuxtLink @click="closeMenu" to="/coaching" class="text-3xl font-bold uppercase italic text-slate-900 hover:text-brand-red transition-colors">Coaching</NuxtLink>
          <NuxtLink @click="closeMenu" to="/contact" class="text-3xl font-bold uppercase italic text-slate-900 hover:text-brand-red transition-colors">Contact</NuxtLink>
          
          <NuxtLink @click="closeMenu" to="/contact" class="mt-8 px-8 py-4 bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-wider rounded transition-colors duration-300 shadow-xl shadow-red-500/20">
            Réserver une séance
          </NuxtLink>
        </nav>
      </div>
    </client-only>
  </header>
</template>
