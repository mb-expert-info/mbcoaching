<template>
  <section id="offres" class="min-h-screen w-full flex items-center justify-center bg-white/50 backdrop-blur-sm py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal">
        <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4">Mes Offres</h2>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 italic uppercase">
          Choisissez votre <span class="text-brand-red">Combat</span>
        </h3>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-8 rounded-2xl bg-white border border-red-100 hover:border-brand-red/30 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all group reveal reveal-delay-100">
          <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
            <span class="text-brand-red group-hover:text-white font-bold">01</span>
          </div>
          <h3 class="text-2xl font-bold uppercase italic mb-4 text-slate-900">Entreprises</h3>
          <p class="text-slate-600 mb-6">Boostez la cohésion et la performance de vos équipes grâce à la boxe.</p>
          <NuxtLink to="/coaching" class="text-brand-red font-bold flex items-center gap-2">
            En savoir plus <span>&rarr;</span>
          </NuxtLink>
        </div>
        <div class="p-8 rounded-2xl bg-white border border-red-100 hover:border-brand-red/30 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all group reveal reveal-delay-200">
            <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
            <span class="text-brand-red group-hover:text-white font-bold">02</span>
          </div>
          <h3 class="text-2xl font-bold uppercase italic mb-4 text-slate-900">Particuliers</h3>
          <p class="text-slate-600 mb-6">Coaching 100% personnalisé pour atteindre vos objectifs.</p>
            <NuxtLink to="/coaching" class="text-brand-red font-bold flex items-center gap-2">
            En savoir plus <span>&rarr;</span>
          </NuxtLink>
        </div>
        <div class="p-8 rounded-2xl bg-white border border-red-100 hover:border-brand-red/30 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all group reveal reveal-delay-300">
            <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
            <span class="text-brand-red group-hover:text-white font-bold">03</span>
          </div>
          <h3 class="text-2xl font-bold uppercase italic mb-4 text-slate-900">Professionnels</h3>
          <p class="text-slate-600 mb-6">Préparation physique spécifique et accompagnement mental.</p>
            <NuxtLink to="/coaching" class="text-brand-red font-bold flex items-center gap-2">
            En savoir plus <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
