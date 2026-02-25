<template>
  <div class="pt-28 md:pt-40 pb-0 bg-white min-h-screen">
    <!-- Page Header -->
    <section class="container mx-auto px-4 mb-24 text-center reveal">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic mb-6 text-slate-900 leading-tight">
        L'Accompagnement <br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">Sur-Mesure</span>
      </h1>
      <p class="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
        Des séances adaptées à vos besoins spécifiques, pour progresser, vous dépasser et atteindre vos objectifs.
      </p>
    </section>

    <!-- Detailed Offers Content -->
    <section class="container mx-auto px-4 mb-32 space-y-32">
      
      <!-- Particuliers -->
      <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal reveal-delay-100">
        <div class="w-full md:w-1/2 relative">
          <div class="absolute inset-0 bg-red-50 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
          <div class="relative z-10 bg-white rounded-3xl p-8 border border-red-100 shadow-xl shadow-red-900/5 aspect-square flex flex-col justify-center">
            <h3 class="text-brand-red font-bold uppercase tracking-widest mb-4">Pour Vous</h3>
            <h4 class="text-4xl md:text-5xl font-black text-slate-900 italic uppercase mb-8">Particuliers</h4>
            <ul class="space-y-4 text-slate-600 text-lg">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Remise en forme totale</strong> (perte de poids, tonification, cardio)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Apprentissage de la boxe</strong> de A à Z (technique et tactique)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Gestion du stress</strong> et renforcement de la confiance en soi</span>
              </li>
               <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Séances adaptées</strong> de l'enfant (dès 4 ans) à l'adulte</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            Quel que soit votre niveau de départ, nous construisons ensemble un programme qui vous ressemble. Mon objectif est de vous accompagner à votre rythme, en vous poussant au-delà des limites que vous pensiez avoir.
          </p>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            Chaque séance est pensée comme un moment pour vous, un espace sécurisant où l'effort physique rencontre le lâcher-prise mental.
          </p>
          <a href="#contact" class="inline-flex px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold uppercase tracking-widest rounded transition-all shadow-lg hover:-translate-y-1">
            Réserver une séance
          </a>
        </div>
      </div>

      <!-- Entreprises -->
      <div class="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 reveal reveal-delay-200">
        <div class="w-full md:w-1/2 relative">
          <div class="absolute inset-0 bg-slate-100 rounded-3xl transform rotate-3 scale-105 z-0"></div>
          <div class="relative z-10 bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-900/5 aspect-square flex flex-col justify-center">
            <h3 class="text-slate-500 font-bold uppercase tracking-widest mb-4">Pour Vos Équipes</h3>
            <h4 class="text-4xl md:text-5xl font-black text-slate-900 italic uppercase mb-8">Entreprises</h4>
            <ul class="space-y-4 text-slate-600 text-lg">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Team Building</strong> : Renforcer la cohésion et l'esprit d'équipe</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Bien-être au travail (QVT)</strong> : Sas de décompression et santé</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Incentive & Dépassement</strong> : Challenges internes, gestion de l'effort</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span><strong>Salles partenaires</strong> ou intervention sur le lieu de travail</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            Les parallèles entre le monde de l'entreprise et la boxe sont nombreux : stratégie, gestion du stress, engagement, et résilience face à l'adversité. 
          </p>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            Je mets en place des expériences immersives et fédératrices pour vos collaborateurs. Les gants permettent de briser les barrières hiérarchiques et de construire des liens forts, durables et basés sur l'entraide.
          </p>
          <a href="#contact" class="inline-flex px-8 py-4 bg-slate-900 hover:bg-black text-white font-bold uppercase tracking-widest rounded transition-all shadow-lg hover:-translate-y-1">
            Demander un devis
          </a>
        </div>
      </div>

       <!-- Professionnels & Athlètes -->
       <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal reveal-delay-300">
        <div class="w-full md:w-1/2 relative">
          <div class="absolute inset-0 bg-red-900/10 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
          <div class="relative z-10 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl aspect-square flex flex-col justify-center text-white">
            <h3 class="text-brand-red font-bold uppercase tracking-widest mb-4">Pour Les Athlètes</h3>
            <h4 class="text-4xl md:text-5xl font-black italic uppercase mb-8">Professionnels</h4>
             <ul class="space-y-4 text-slate-300 text-lg">
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-slate-100"><strong>Préparation physique spécifique</strong> pour atteindre votre plus haut niveau de performance</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-slate-100"><strong>Développement de l'explosivité</strong>, vitesse et force</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-slate-100"><strong>Développement de la résilience mentale</strong> (dépassement de soi, gestion de l'effort)</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-6 h-6 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-slate-100"><strong>Cross-training et transferts</strong> de compétences via la boxe</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            Issue du très haut niveau, je connais parfaitement les exigences physiques et mentales requises pour performer le jour J, quelle que soit votre discipline de prédilection.
          </p>
          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            La boxe est un outil redoutable en préparation athlétique : elle renforce les appuis, la chaîne cinétique, le temps de réaction visuel et la résistance à l'acide lactique. L'intensité y est reine.
          </p>
          <a href="#contact" class="inline-flex px-8 py-4 bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-widest rounded transition-all shadow-lg hover:-translate-y-1 shadow-brand-red/20">
            Me contacter
          </a>
        </div>
      </div>

    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="bg-slate-50 border-t border-slate-200 py-24 relative overflow-hidden reveal">
      <div class="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 z-0"></div>
      
      <div class="container mx-auto px-4 relative z-10 max-w-4xl">
        <div class="text-center mb-16">
          <h2 class="text-brand-red font-bold uppercase tracking-widest mb-4">On commence quand ?</h2>
          <h3 class="text-4xl md:text-5xl font-black text-slate-900 italic uppercase">
            Réserver <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600">une séance</span>
          </h3>
          <p class="mt-6 text-slate-600 text-lg max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous pour m'en dire plus sur vos objectifs. Je reviendrai vers vous rapidement pour que l'on fixe notre premier entraînement ou discuter de votre projet d'entreprise.
          </p>
        </div>

        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Nom -->
              <div>
                <label for="name" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Nom complet *</label>
                <input type="text" id="name" required
                  class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none"
                  placeholder="Jean Dupont" />
              </div>
              
              <!-- Téléphone -->
              <div>
                <label for="phone" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Téléphone *</label>
                <input type="tel" id="phone" required
                  class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none"
                  placeholder="06 12 34 56 78" />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email *</label>
              <input type="email" id="email" required
                class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none"
                placeholder="jean@exemple.com" />
            </div>

            <!-- Type de prestation -->
            <div>
              <label for="service" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Vous êtes intéressé(e) par... *</label>
              <select id="service" required
                class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none text-slate-700 appearance-none">
                <option value="" disabled selected>Choisir une option</option>
                <option value="particulier">Coaching Particulier (Remise en forme, Initiation...)</option>
                <option value="entreprise">Coaching Entreprise (Team Building, Séminaire...)</option>
                <option value="pro">Préparation Athlète Professionnel</option>
                <option value="autre">Autre demande</option>
              </select>
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Votre Message *</label>
              <textarea id="message" rows="5" required
                class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none resize-none"
                placeholder="Parlez-moi de vos objectifs, de votre niveau actuel, ou de votre projet s'il s'agit d'une entreprise..."></textarea>
            </div>

            <!-- Bouton Submit -->
            <div class="pt-4 text-center">
              <button type="submit"
                class="w-full md:w-auto px-12 py-5 bg-brand-red hover:bg-red-700 text-white font-black uppercase tracking-widest text-lg rounded-xl transition-all shadow-lg shadow-brand-red/30 hover:-translate-y-1">
                Envoyer ma demande
              </button>
              <p class="text-sm text-slate-400 mt-4 italic">* Champs obligatoires</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const submitForm = () => {
  // Ici on gérera l'envoi du formulaire (Netlify Forms, Formspree, API backend, etc.)
  alert("Merci pour votre message ! Je reviendrai vers vous très prochainement.")
}
</script>
