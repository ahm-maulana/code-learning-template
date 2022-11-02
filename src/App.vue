<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Partner from './components/Partner.vue'
import Feature from './components/Feature.vue'
import Pricing from './components/Pricing.vue'
import Faq from './components/Faq.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="font-lato text-primary">
    <Header></Header>
    <main>
      <Hero></Hero>
      <Partner></Partner>
      <Feature></Feature>
      <Pricing></Pricing>
      <Faq></Faq>
    </main>
    <Footer></Footer>
  </div>
</template>

<style>
body{
  @apply bg-body;
}

</style>
