<template>
  <section id="valeurs" class="min-h-screen w-full flex items-center justify-center bg-slate-50 relative py-24">
    <!-- Background Decor -->
    <div class="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-4xl mx-auto mb-16 reveal">
        <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4">Mon Approche</h2>
        <h3 class="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase italic">
          Bien plus <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">qu'un sport</span>
        </h3>
      </div>

      <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Card 1 : Pourquoi la boxe -->
        <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal reveal-delay-100 relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl transform translate-x-10 -translate-y-10 group-hover:bg-red-100 transition-colors duration-500"></div>
          <div class="relative z-10">
            <h4 class="text-2xl font-black text-brand-red mb-6 uppercase italic">Pourquoi la boxe ?</h4>
            <div class="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                La boxe, ce n'est pas seulement frapper. C'est <strong>s'exprimer</strong>, se <strong>libérer</strong>, se <strong>dépasser</strong>, <strong>prendre confiance</strong> et partir à la <strong>rencontre de soi-même</strong>.
              </p>
              <p>
                Sans même s'en rendre compte, on y travaille la <strong>stratégie</strong>, la <strong>détermination</strong>, la <strong>cohésion</strong>, la <strong>précision</strong>, <strong>l'analyse</strong> et surtout la <strong>gestion des émotions</strong>.
              </p>
            </div>
          </div>
        </div>

        <!-- Card 2 : Pourquoi MBCoaching -->
        <div class="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 reveal reveal-delay-200 relative overflow-hidden">
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl transform translate-x-10 translate-y-10 group-hover:bg-slate-100 transition-colors duration-500"></div>
           <div class="relative z-10">
            <h4 class="text-2xl font-black text-slate-900 mb-6 uppercase italic">Pourquoi MBCoaching ?</h4>
            <div class="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Pour son expertise mais surtout parce que chaque séance est un <strong>exutoire</strong>, un moment pour se <strong>défouler</strong>, se <strong>renforcer</strong> et <strong>prendre confiance</strong>.
              </p>
              <p>
                On en ressort fatigué(e)… mais surtout souriant(e), aligné(e) et rempli(e) d'une énergie positive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
