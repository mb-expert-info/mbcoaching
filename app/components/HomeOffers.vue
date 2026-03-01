<template>
  <section id="offres" class="min-h-screen w-full flex items-center justify-center bg-white/50 backdrop-blur-sm py-24">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16 reveal">
        <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4">Mes Offres</h2>
        <h3 class="text-4xl md:text-5xl font-black text-slate-900 italic uppercase mb-8">
          Choisissez votre <span class="text-brand-red">Combat</span>
        </h3>
        <div class="max-w-3xl mx-auto space-y-4 text-slate-600 text-lg mb-8">
          <p>
            J'encadre <strong>tout public, dès 4 ans</strong>, en adaptant chaque séance aux besoins, aux capacités et aux objectifs de chacun.
          </p>
          <p>
            Engagée pour le sport féminin, j'œuvre à <strong>renforcer la confiance et la place des femmes à travers la pratique sportive</strong>.
          </p>
        </div>

        <!-- Highlighted Services Badges -->
        <div class="mb-4">
          <p class="text-sm font-bold uppercase tracking-widest text-slate-400 italic">Quelques exemples de prestations :</p>
        </div>
        <div class="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          <button @click="openModal('boxe')" class="px-4 py-2 bg-white border border-red-100 rounded-full text-brand-red font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">Boxe Anglaise</button>
          <button @click="openModal('bag')" class="px-4 py-2 bg-white border border-red-100 rounded-full text-brand-red font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">Boxing Bag</button>
          <button @click="openModal('circuit')" class="px-4 py-2 bg-white border border-red-100 rounded-full text-brand-red font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">Circuit Training</button>
          <button @click="openModal('individuel')" class="px-4 py-2 bg-white border border-red-100 rounded-full text-brand-red font-bold text-sm tracking-wide shadow-sm hover:shadow-md hover:bg-brand-red hover:text-white hover:-translate-y-0.5 transition-all focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2">Coaching Individuel</button>
        </div>
      </div>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-8 rounded-2xl bg-white border border-red-100 hover:border-brand-red/30 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all group reveal reveal-delay-100">
          <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
            <span class="text-brand-red group-hover:text-white font-bold">01</span>
          </div>
          <h3 class="text-2xl font-bold uppercase italic mb-4 text-slate-900">Entreprises</h3>
          <p class="text-slate-600 mb-6">Boostez la cohésion et la performance de vos équipes.</p>
          <NuxtLink to="/coaching#entreprises" class="text-brand-red font-bold flex items-center gap-2">
            En savoir plus <span>&rarr;</span>
          </NuxtLink>
        </div>
        <div class="p-8 rounded-2xl bg-white border border-red-100 hover:border-brand-red/30 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all group reveal reveal-delay-200">
            <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
            <span class="text-brand-red group-hover:text-white font-bold">02</span>
          </div>
          <h3 class="text-2xl font-bold uppercase italic mb-4 text-slate-900">Particuliers</h3>
          <p class="text-slate-600 mb-6">Coaching 100% personnalisé pour atteindre vos objectifs.</p>
            <NuxtLink to="/coaching#particuliers" class="text-brand-red font-bold flex items-center gap-2">
            En savoir plus <span>&rarr;</span>
          </NuxtLink>
        </div>
        <div class="p-8 rounded-2xl bg-white border border-red-100 hover:border-brand-red/30 shadow-sm hover:shadow-xl hover:shadow-red-900/5 transition-all group reveal reveal-delay-300">
            <div class="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-red transition-colors">
            <span class="text-brand-red group-hover:text-white font-bold">03</span>
          </div>
          <h3 class="text-2xl font-bold uppercase italic mb-4 text-slate-900">Professionnels</h3>
          <p class="text-slate-600 mb-6">Préparation physique spécifique sur-mesure pour atteindre votre plus haut niveau de performance.</p>
            <NuxtLink to="/coaching#professionnels" class="text-brand-red font-bold flex items-center gap-2">
            En savoir plus <span>&rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Service Detail Modal -->
    <Teleport to="body">
      <div v-if="activeModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" @click.self="closeModal">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"></div>
        
        <!-- Modal Content -->
        <div class="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-fade-in-up">
          <!-- Close Button -->
          <button @click="closeModal" class="absolute top-4 right-4 z-10 w-10 h-10 bg-black/10 hover:bg-brand-red text-slate-800 hover:text-white rounded-full flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="flex flex-col md:flex-row h-full">
            <!-- Video/Image Section -->
            <div class="w-full md:w-1/2 bg-slate-900 relative aspect-video md:aspect-auto min-h-[250px] md:min-h-[400px]">
              <video v-if="services[activeModal].videoUrl" :src="services[activeModal].videoUrl" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover"></video>
              
              <img v-else-if="services[activeModal].imageUrl" :src="services[activeModal].imageUrl" :alt="services[activeModal].title" class="absolute inset-0 w-full h-full object-cover" />
              
              <!-- Video Placeholder (For services without video or image yet) -->
              <div v-else class="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-8 text-center bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="text-sm">Vidéo de démonstration bientôt disponible : <br/><span class="font-bold text-white mt-2 block">{{ services[activeModal].title }}</span></p>
              </div>
            </div>

            <!-- Text Content Section -->
            <div class="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <h4 class="text-brand-red font-bold uppercase tracking-widest mb-2">Découvrir l'exercice</h4>
              <h3 class="text-3xl md:text-4xl font-black italic text-slate-900 mb-6 uppercase">{{ services[activeModal].title }}</h3>
              <p class="text-slate-600 leading-relaxed mb-8">
                {{ services[activeModal].description }}
              </p>
              <NuxtLink to="/coaching" @click="closeModal" class="inline-flex w-max px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-widest text-sm rounded transition-all shadow-md">
                Voir mes offres
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeModal = ref(null)

const services = {
  boxe: {
    title: "Boxe Anglaise",
    description: "L'apprentissage du noble art. Travaillez votre technique, vos appuis, l'esquive et la précision. Que vous soyez débutant ou confirmé, chaque leçon est conçue pour améliorer votre coordination et votre compréhension tactique du combat, le tout dans un cadre sécurisant.",
    videoUrl: "/coach/boxe_anglaise.mov"
  },
  bag: {
    title: "Boxing Bag",
    description: "L'exutoire par excellence. Un entraînement intense axé sur la frappe au sac. Parfait pour se défouler, brûler un maximum de calories et améliorer sa force de frappe ainsi que son cardio sans aucune opposition physique.",
    videoUrl: "/coach/boxing_bag.mov"
  },
  circuit: {
    title: "Circuit Training",
    description: "Un enchaînement d'exercices fonctionnels à haute intensité (HIIT). Conçu pour solliciter l'ensemble du corps, ce format dynamique est idéal pour développer simultanément votre endurance musculaire, votre souffle et votre explosivité en un temps record.",
    videoUrl: "/coach/circuit_training.mov"
  },
  individuel: {
    title: "Coaching Individuel",
    description: "Un face-à-face privilégié où 100% de mon attention vous est dédiée. Leçons aux pattes d'ours, correction biomécanique, ou préparation physique spécifique. C'est le format le plus rapide pour franchir des paliers techniques et physiques personnalisés.",
    videoUrl: null,
    imageUrl: "/coach/coaching_prive.png"
  }
}

const openModal = (id) => {
  activeModal.value = id
  document.body.style.overflow = 'hidden' // Empêche le scroll derrière la modale
}

const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.3s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
