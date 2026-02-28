<template>
  <div class="pt-40 md:pt-56 pb-0 bg-white min-h-screen overflow-x-hidden">
    <!-- Page Header -->
    <section class="container mx-auto px-4 mb-24 text-center reveal">
      <h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic mb-6 text-slate-900 leading-tight break-words">
        L'Accompagnement <br class="hidden md:block" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-600 inline-block">Sur-Mesure</span>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed mt-6">
        Des séances adaptées à vos besoins spécifiques, pour progresser, vous dépasser et atteindre vos objectifs.
      </p>
    </section>

    <!-- Detailed Offers Content -->
    <section class="container mx-auto px-4 mb-32 space-y-32">
      
      <!-- Particuliers -->
      <div id="particuliers" class="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal reveal-delay-100 scroll-mt-32">
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
      <div id="entreprises" class="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 reveal reveal-delay-200 scroll-mt-32">
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
       <div id="professionnels" class="flex flex-col md:flex-row items-center gap-12 lg:gap-24 reveal reveal-delay-300 scroll-mt-32">
        <div class="w-full md:w-1/2 relative">
          <div class="absolute inset-0 bg-red-900/10 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
          <div class="relative z-10 bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl aspect-square flex flex-col justify-center text-white">
            <h3 class="text-brand-red font-bold uppercase tracking-widest mb-4">Pour Les Athlètes</h3>
            <h4 class="text-3xl sm:text-4xl md:text-5xl font-black italic uppercase mb-8 break-words">Professionnels</h4>
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
                <input type="text" id="name" v-model="form.nom" required
                  class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none disabled:opacity-50"
                  placeholder="Jean Dupont" :disabled="isSubmitting" />
              </div>
              
              <!-- Téléphone -->
              <div>
                <label for="phone" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Téléphone *</label>
                <input type="tel" id="phone" v-model="form.telephone" required
                  class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none disabled:opacity-50"
                  placeholder="06 12 34 56 78" :disabled="isSubmitting" />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Email *</label>
              <input type="email" id="email" v-model="form.email" required
                class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none disabled:opacity-50"
                placeholder="jean@exemple.com" :disabled="isSubmitting" />
            </div>

            <!-- Type de prestation -->
            <div>
              <label for="service" class="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">Vous êtes intéressé(e) par... *</label>
              <select id="service" v-model="form.prestation" required :disabled="isSubmitting"
                class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none text-slate-700 appearance-none disabled:opacity-50">
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
              <textarea id="message" v-model="form.message" rows="5" required :disabled="isSubmitting"
                class="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all outline-none resize-none disabled:opacity-50"
                placeholder="Parlez-moi de vos objectifs, de votre niveau actuel, ou de votre projet s'il s'agit d'une entreprise..."></textarea>
            </div>

            <!-- Réponse du formulaire -->
            <div v-if="submitStatus === 'success'" class="p-4 bg-green-50 rounded-xl border border-green-200 text-green-700">
              <p class="font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                Message bien envoyé !
              </p>
              <p class="text-sm mt-1">Merci pour votre message, je vous recontacterai très vite.</p>
            </div>
            <div v-if="submitStatus === 'error'" class="p-4 bg-red-50 rounded-xl border border-red-200 text-red-700">
              <p class="font-bold flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                Une erreur est survenue.
              </p>
              <p class="text-sm mt-1">Une erreur réseau s'est produite lors de l'envoi du message. Veuillez réessayer.</p>
            </div>

            <!-- Bouton Submit -->
            <div class="pt-4 text-center">
              <button type="submit" :disabled="isSubmitting"
                class="w-full md:w-auto px-12 py-5 bg-brand-red hover:bg-red-700 text-white font-black uppercase tracking-widest text-lg rounded-xl transition-all shadow-lg shadow-brand-red/30 hover:-translate-y-1 disabled:opacity-75 disabled:cursor-not-allowed disabled:hover:-translate-y-0 flex items-center justify-center gap-3 mx-auto">
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande' }}
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
import { ref } from 'vue'

const form = ref({
  nom: '',
  telephone: '',
  email: '',
  prestation: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null

// TODO: REMPLACER PAR L'URL GOOGLE APPS SCRIPT DÈS QUE CREÉ
const GOOGLE_SCRIPT_URL = ''

const submitForm = async () => {
  if (!GOOGLE_SCRIPT_URL) {
    alert("Le formulaire n'est pas encore connecté à la base de données. L'envoi est simulé.")
    isSubmitting.value = true
    setTimeout(() => {
      isSubmitting.value = false
      submitStatus.value = 'success'
      form.value = { nom: '', telephone: '', email: '', prestation: '', message: '' }
    }, 1500)
    return
  }

  isSubmitting.value = true
  submitStatus.value = null

  try {
    const formData = new FormData()
    formData.append('date', new Date().toLocaleString())
    formData.append('nom', form.value.nom)
    formData.append('telephone', form.value.telephone)
    formData.append('email', form.value.email)
    formData.append('prestation', form.value.prestation)
    formData.append('message', form.value.message)

    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Essentiel pour contourner les erreurs CORS ave Google Script
    })

    // no-cors renvoie un objet de réponse opaque, mais s'il n'y a pas eu d'erreur réseau, on suppose que le POST a réussi
    submitStatus.value = 'success'
    form.value = { nom: '', telephone: '', email: '', prestation: '', message: '' }

  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>
