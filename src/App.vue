<template>
  <main>
    <div class="container"><creating-person-section /></div>
  </main>
</template>

<script>
import CreatingPersonSection from './components/CreatingPersonSection.vue'

export default {
  components: { CreatingPersonSection }
}
</script>

<style>
.container {
  width: 1280px;
  margin: 0 auto;
}
</style>
