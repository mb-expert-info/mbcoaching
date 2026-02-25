<template>
  <section class="py-24 bg-slate-50 w-full overflow-hidden relative">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal relative">
        <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4">Témoignages</h2>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 italic uppercase">
          Ce qu'ils <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">en pensent</span>
        </h3>
        
        <!-- Navigation Arrows (Desktop) -->
        <div class="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 gap-4">
          <button @click="scrollLeft" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="scrollRight" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Scrollable Container for Cards -->
      <div ref="slider" class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar reveal reveal-delay-200 scroll-smooth">
        <!-- Spacer for initial padding on scroll -->
        <div class="w-4 flex-shrink-0 md:hidden"></div>

        <!-- Review Card 1 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 w-[85vw] md:w-96 snap-center flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
          <div>
            <div class="text-brand-red text-4xl font-serif italic mb-4">"</div>
            <p class="text-slate-600 italic mb-6 leading-relaxed">
              J’ai été marqué par sa capacité à renforcer la confiance en
soi et à aider chacun à repousser ses limites, toujours dans
un cadre bienveillant. Elle crée une vraie dynamique de
groupe, où l’entraide et l’énergie collective permettent de
progresser ensemble. 
Son accompagnement va bien au-
delà du sport : il développe l’engagement, la cohésion et
l’estime de soi. Une coach qui fait grandir, individuellement
et collectivement.
            </p>
          </div>
          <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
              DM
            </div>
            <div>
              <div class="font-bold text-slate-900">David M.</div>
              <div class="text-sm text-brand-red font-medium">Directeur Administratif au LOSC</div>
            </div>
          </div>
        </div>

        <!-- Review Card 2 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 w-[85vw] md:w-96 snap-center flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
          <div>
            <div class="text-brand-red text-4xl font-serif italic mb-4">"</div>
            <p class="text-slate-600 italic mb-6 leading-relaxed">
              Juste un petit message pour te remercier du fond du
cœur, tu m’as permis de sortir de ma zone de confort et d’atteindre mes objectifs en très peu 
de temps. Le contenu des séances était vraiment top et varié, impossible de s’ennuyer.
Merci, tu es une personne en or, ne change pas !
            </p>
          </div>
          <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
              NE
            </div>
            <div>
              <div class="font-bold text-slate-900">Nesryne E.</div>
              <div class="text-sm text-brand-red font-medium">Joueuse Professionnelle au LOSC</div>
            </div>
          </div>
        </div>

        <!-- Review Card 3 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 w-[85vw] md:w-96 snap-center flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
          <div>
            <div class="text-brand-red text-4xl font-serif italic mb-4">"</div>
            <p class="text-slate-600 italic mb-6 leading-relaxed">
              Les séances de boxe et les stages avec Melissa me
permettent de dépasser mes limites, d'avoir plus
confiance en mes capacités et cela renforce aussi
mon mental. La cohésion de groupe que met en place
Melissa permet également de passer un bon moment et de prendre un véritable plaisir durant les séances.
            </p>
          </div>
           <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
              NM
            </div>
            <div>
              <div class="font-bold text-slate-900">Naïma M.</div>
              <div class="text-sm text-brand-red font-medium">Femme au foyer</div>
            </div>
          </div>
        </div>

         <!-- Review Card 4 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 w-[85vw] md:w-96 snap-center flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
          <div>
            <div class="text-brand-red text-4xl font-serif italic mb-4">"</div>
            <p class="text-slate-600 italic mb-6 leading-relaxed">
              Mélissa a su m’apporter le goût de la difficulté et le
dépassement de soi-même, même dans les moments les
plus difficiles pendant les séances de sport. Elle m’a aidé à
développer mon mental et surtout mon explosivité. Avec
une très bonne pédagogie, Mélissa m’a appris la boxe
anglaise ainsi que la course à pied.
            </p>
          </div>
          <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
              MB
            </div>
            <div>
              <div class="font-bold text-slate-900">Maël B.</div>
              <div class="text-sm text-brand-red font-medium">Ambulancier</div>
            </div>
          </div>
        </div>

        <!-- Review Card 5 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex-shrink-0 w-[85vw] md:w-96 snap-center flex flex-col justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
          <div>
            <div class="text-brand-red text-4xl font-serif italic mb-4">"</div>
            <p class="text-slate-600 italic mb-6 leading-relaxed">
              J'ai commencé la boxe avec Mélissa en tant que coach.
C’est elle qui m'a appris les bases et elle m’a
énormément apporté, autant sur le plan technique que
mental. Grâce à son professionnalisme et à sa pédagogie,
j’ai pu progresser rapidement et prendre confiance
dans ma pratique. Mélissa est une coach investie,
bienveillante et passionnée, sans qui je n'aurais jamais
pu autant me dépasser.
            </p>
          </div>
          <div class="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500 uppercase">
              JB
            </div>
            <div>
              <div class="font-bold text-slate-900">Jenna B.</div>
              <div class="text-sm text-brand-red font-medium">Etudiante</div>
            </div>
          </div>
        </div>

        <!-- Spacer for trailing padding on scroll -->
        <div class="w-4 flex-shrink-0 md:hidden"></div>
      </div>
      
      <!-- Navigation Arrows (Mobile) -->
      <div class="flex md:hidden justify-center gap-4 mt-4">
          <button @click="scrollLeft" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="scrollRight" class="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-colors focus:outline-none">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const slider = ref(null)

const scrollLeft = () => {
  if (slider.value) {
    slider.value.scrollBy({ left: -400, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (slider.value) {
    slider.value.scrollBy({ left: 400, behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
