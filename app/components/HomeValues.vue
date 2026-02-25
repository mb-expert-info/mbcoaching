<template>
  <section id="valeurs" class="min-h-screen w-full flex items-center justify-center bg-slate-50 relative py-24">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4">Mes Valeurs</h2>
        <h3 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase italic">
          Plus qu'un sport, <br/> un <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">État d'Esprit</span>
        </h3>
        <p class="text-slate-600 text-lg">
          Que ce soit sur le ring ou dans la vie professionnelle, les mêmes principes guident la réussite. C'est cette philosophie que je transmets à travers mes coachings.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Value 1 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal reveal-delay-100">
          <div class="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-slate-900 mb-4 uppercase">Performance</h4>
          <p class="text-slate-600 leading-relaxed">
            Viser l'excellence, optimiser chaque mouvement, chaque action. La performance n'est pas un hasard, c'est le résultat d'une préparation minutieuse.
          </p>
        </div>

        <!-- Value 2 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal reveal-delay-200">
          <div class="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-slate-900 mb-4 uppercase">Discipline</h4>
          <p class="text-slate-600 leading-relaxed">
            La motivation vous lance, la discipline vous fait durer. Apprendre à rester constant, même quand c'est difficile, est la clé de tout succès durable.
          </p>
        </div>

        <!-- Value 3 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal reveal-delay-300">
          <div class="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-brand-red group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-slate-900 mb-4 uppercase">Dépassement</h4>
          <p class="text-slate-600 leading-relaxed">
            Sortir de sa zone de confort, repousser ses limites mentales et physiques. C'est dans l'inconfort que se trouve la progression.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
