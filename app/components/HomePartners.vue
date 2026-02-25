<script setup lang="ts">
const partners = [
  { name: 'LOSC', logo: '/partenaire/losc.svg' },
  { name: 'Apollo Sporting Club', logo: '/partenaire/logo_apollo.png' },
  { name: 'Action Boxe', logo: '/partenaire/Logo-Action-Boxe-BBG.png' },
  { name: 'Armée de Terre', logo: '/partenaire/armee_terre_2.png' },
  { name: 'Cross Training Femme', logo: '/partenaire/cross_training_femme.png' },
]
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 mb-10 text-center">
      <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-2">Ils me font confiance</h3>
      <div class="w-12 h-0.5 bg-brand-red mx-auto"></div>
    </div>
    
    <div class="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
      <div v-for="(partner, i) in partners" :key="`logo-${i}`" class="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
        <img :src="partner.logo" :alt="partner.name" class="h-16 w-auto object-contain" />
      </div>
    </div>
  </section>
</template>
