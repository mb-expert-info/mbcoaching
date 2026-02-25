<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100 text-brand-black font-sans selection:bg-brand-red selection:text-white">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Global styles if needed, though Tailwind covers most */
body {
  @apply bg-white;
}
</style>
