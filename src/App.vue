<template>
  <Navbar />
  <Homepage />
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Homepage from '@/components/Homepage.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Homepage,
    Footer
  }
}
</script>

<style>
 

</style>
