<template>
  <footer class="bg-brand-dark text-white border-t border-white/5 pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <!-- Brand Column -->
        <div class="md:col-span-1">
          <NuxtLink to="/" class="inline-block mb-6">
            <h2 class="text-2xl font-black uppercase italic tracking-tighter">
              <span class="text-brand-red">Melissa</span> Bounoua
            </h2>
          </NuxtLink>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            Ancienne championne de boxe, aujourd'hui coach. Je vous accompagne pour atteindre vos objectifs physiques et mentaux avec la rigueur du haut niveau.
          </p>
          <a href="mailto:melissa.mbcoaching@gmail.com" class="inline-flex items-center gap-2 text-slate-300 hover:text-brand-red transition-colors mb-6 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            melissa.mbcoaching@gmail.com
          </a>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/melissa_bounoua?igsh=MWN5eGpjZnR1azQ5dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.linkedin.com/in/bounoua-melissa-024504139?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://www.tiktok.com/@missou59100?_r=1&_t=ZN-94K3edZDClT" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-red hover:text-white transition-all duration-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:stroke-white"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Navigation</h3>
          <nav class="flex flex-col gap-4">
            <NuxtLink to="/" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Accueil</NuxtLink>
            <NuxtLink to="/#biographie" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Qui Suis-Je</NuxtLink>
            <NuxtLink to="/#valeurs" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Mon Approche</NuxtLink>
            <NuxtLink to="/#offres" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Mes Offres</NuxtLink>
            <NuxtLink to="/coaching" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Coaching</NuxtLink>
            <NuxtLink to="/coaching#contact" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Contact</NuxtLink>
          </nav>
        </div>

        <!-- Offres -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Coachings</h3>
          <ul class="flex flex-col gap-4">
            <li><NuxtLink to="/coaching#particuliers" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Particuliers</NuxtLink></li>
            <li><NuxtLink to="/coaching#entreprises" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Entreprises</NuxtLink></li>
            <li><NuxtLink to="/coaching#professionnels" class="text-slate-300 hover:text-brand-red transition-colors w-fit">Professionnels</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact/CTA -->
        <div>
          <h3 class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Commencer</h3>
          <p class="text-slate-400 text-sm mb-6">
            Réservez votre séance dès maintenant.
          </p>
          <NuxtLink to="/coaching#contact" class="inline-block px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-bold uppercase tracking-wider rounded transition-all shadow-lg shadow-red-900/20 hover:shadow-red-900/40 transform hover:-translate-y-1">
            Réserver une séance
          </NuxtLink>
        </div>
      </div>

      <!-- Copyright -->
      <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>&copy; {{ new Date().getFullYear() }} Melissa Bounoua. Tous droits réservés.</p>
        <div class="flex gap-6">
          <NuxtLink to="/mentions-legales" class="hover:text-slate-400 transition-colors">Mentions Légales</NuxtLink>
          <NuxtLink to="/politique-confidentialite" class="hover:text-slate-400 transition-colors">Politique de Confidentialité</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
