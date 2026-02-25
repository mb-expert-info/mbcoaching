<template>
  <section id="biographie" class="min-h-screen w-full flex items-center justify-center bg-white py-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center gap-16">
        <!-- Image Side (Left) -->
        <div class="w-full md:w-1/2 relative reveal">
          <div class="absolute inset-0 bg-red-100 rounded-3xl transform rotate-3 scale-105 z-0"></div>
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
             <!-- Placeholder for athlete photo -->
            <img src="/coach/mb.png" alt="Melissa Bounoua" class="w-full h-full object-cover" />
          </div>
          <!-- Quote Badge -->
          <div class="absolute -bottom-8 -right-8 bg-brand-red p-8 rounded-tr-3xl rounded-bl-3xl shadow-xl z-20 max-w-xs hidden md:block">
            <p class="text-white font-serif italic text-lg leading-relaxed">
              "La boxe n'est pas qu'un sport, c'est une école de la vie où chaque coup reçu vous apprend à vous relever."
            </p>
          </div>
        </div>

        <!-- Content Side (Right) -->
        <div class="w-full md:w-1/2">
          <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4 reveal reveal-delay-100">Mon Histoire</h2>
          <h3 class="text-4xl md:text-5xl font-black text-slate-900 mb-8 italic uppercase leading-tight reveal reveal-delay-200">
            De la passion <br/> au <span class="text-brand-red">Haut Niveau</span>
          </h3>
          
          <div class="space-y-6 text-slate-600 text-lg leading-relaxed reveal reveal-delay-300">
            <p>
              Tout a commencé par une simple envie de me défouler. Très vite, la salle de boxe est devenue ma deuxième maison. J'y ai découvert bien plus qu'un sport : une discipline, une rigueur et une force mentale insoupçonnée.
            </p>
            <p>
              Année après année, combat après combat, j'ai gravi les échelons. Des championnats régionaux aux podiums nationaux, chaque victoire a été le fruit d'un travail acharné et d'une détermination sans faille.
            </p>
            <p>
              Aujourd'hui, mon objectif est double : continuer à performer sur le ring et transmettre cette passion. Je veux vous montrer que les limites que nous nous fixons sont souvent mentales.
            </p>
          </div>

          <div class="mt-12 pt-8 border-t border-red-100 flex items-center justify-between reveal reveal-delay-500">
            <div>
              <span class="block text-4xl font-black text-brand-red mb-1">10+</span>
              <span class="text-sm font-bold uppercase text-slate-500 tracking-wider">Années d'expérience</span>
            </div>
             <div>
              <span class="block text-4xl font-black text-brand-red mb-1">50+</span>
              <span class="text-sm font-bold uppercase text-slate-500 tracking-wider">Combats</span>
            </div>
             <div>
              <span class="block text-4xl font-black text-brand-red mb-1">100%</span>
              <span class="text-sm font-bold uppercase text-slate-500 tracking-wider">Détermination</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
