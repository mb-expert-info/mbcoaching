<template>
  <section class="relative min-h-screen w-full flex items-center justify-center overflow-hidden mt-28 md:mt-40">
    <!-- Background placeholder (would be an image) -->
    <!-- Background Video -->
    <div class="absolute inset-0 z-0 w-full h-full overflow-hidden">
      <video
        src="/coach/mb_highlights.mov"
        autoplay
        loop
        muted
        playsinline
        class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 scale-150 md:scale-100"
      >
        Your browser does not support the video tag.
      </video>
      <!-- Overlay for text readability -->
      <div class="absolute inset-0 bg-black/40 z-10"></div>
    </div>

    <div class="container mx-auto px-4 relative z-20 text-center">
      <h1 class="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter italic mb-6 leading-none reveal text-white drop-shadow-lg">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">Melissa</span>
        <br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Bounoua</span>
      </h1>
      <p class="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto font-light reveal reveal-delay-200 drop-shadow-md">
        Boxeuse de Haut Niveau & Coach Sportive <br/>
        <span class="text-brand-red font-bold">Performance . Discipline . Dépassement</span>
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center reveal reveal-delay-500">
        <NuxtLink to="/coaching" class="px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded transition-all hover:scale-105 shadow-lg shadow-red-600/20">
          Découvrir mes offres
        </NuxtLink>
        <NuxtLink to="/biographie" class="px-8 py-4 bg-white border border-transparent hover:border-brand-red text-slate-900 hover:text-brand-red font-bold uppercase tracking-widest rounded transition-all hover:bg-slate-50 shadow-lg shadow-white/10">
          Mon Parcours
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
