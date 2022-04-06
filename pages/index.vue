<template>
  <div class="container grid grid-cols-1 mx-auto divide-y-2 sm:mx-0 md:w-md">
    <AboutSection />
    <WorkSection />
  </div>
</template>

<script>
import AboutSection from '~/components/AboutSection.vue'
import WorkSection from '~/components/WorkSection.vue'
export default {
  name: 'IndexPage',
  components: { AboutSection, WorkSection },
}
</script>
