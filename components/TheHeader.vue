<template>
  <header
    class="font-serif flex justify-between w-full shadow-md sm:justify-center sm:flex-col md:flex-col"
  >
    <TheLogo />
    <TheNavigation />
  </header>
</template>
<script>
import TheNavigation from './TheNavigation.vue'
import TheLogo from './TheLogo.vue'
export default {
  name: 'TheHeader',
  components: { TheNavigation, TheLogo },
  mounted() {
    const button = document.querySelector('.menu-button')
    const menu = document.querySelector('.mobile-menu')
    button.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  },
}
</script>
