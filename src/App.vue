<template>
  <Navbar />
  <Homepage />
  <footer>
  </footer>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Homepage from '@/components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Homepage
  }
}
</script>

<style>
 

</style>
