<template>
  <div class="container grid grid-cols-1 mx-auto divide-y-2 sm:mx-0 md:w-md">
    <WorkSection />
  </div>
</template>

<script>
import WorkSection from '~/components/WorkSection.vue'
export default {
  name: 'MyWork',
  components: { WorkSection },
}
</script>
