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
              "Réveille toi avec détermination, endors toi avec satisfaction."
            </p>
          </div>
        </div>

        <!-- Content Side (Right) -->
        <div class="w-full md:w-1/2">
          <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4 reveal reveal-delay-100">Qui suis-je ?</h2>
          <h3 class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-8 italic uppercase leading-tight reveal reveal-delay-200 break-words">
            Du Haut Niveau <br/> à <span class="text-brand-red inline-block">Votre Accompagnement</span>
          </h3>
          
          <div class="space-y-6 text-slate-600 text-lg leading-relaxed reveal reveal-delay-300">
            <p>
              <strong>Éducatrice et coach sportive</strong>, je mets mon parcours d'athlète au service de vos objectifs. Membre de l'<strong>Équipe de France de boxe anglaise</strong> et <strong>Championne de France 2025</strong>, l'exigence et le dépassement de soi sont au cœur de ma méthode.
            </p>
            <p>
              Je propose des prestations sportives adaptées à tous les profils : <strong>particuliers, groupes, entreprises et professionnels</strong>. Mon approche s'appuie sur les valeurs fortes du sport pour vous aider à atteindre vos buts.
            </p>
            <p>
              Chaque <strong>séance est sur mesure</strong> et s'adapte à vos besoins. Que vous cherchiez la <strong>progression, la performance, la cohésion d'équipe ou le développement de la confiance en soi</strong>, nous construisons ensemble le chemin vers votre réussite.
            </p>
          </div>

          <div class="mt-12 pt-8 border-t border-red-100 flex flex-wrap items-center justify-between gap-8 md:gap-4 reveal reveal-delay-500">
            <div class="w-[45%] md:w-auto">
              <span class="block text-4xl font-black text-brand-red mb-1">10+</span>
              <span class="text-sm font-bold uppercase text-slate-500 tracking-wider">Années d'expérience</span>
            </div>
             <div class="w-[45%] md:w-auto">
              <span class="block text-4xl font-black text-brand-red mb-1">100%</span>
              <span class="text-sm font-bold uppercase text-slate-500 tracking-wider">Sur mesure</span>
            </div>
             <div class="w-[45%] md:w-auto">
              <span class="block text-4xl font-black text-brand-red mb-1">+100</span>
              <span class="text-sm font-bold uppercase text-slate-500 tracking-wider">Personnes accompagnées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
