<template>
  <div v-if="categories" class="flex-container">
  <CardComp v-for="category of categories" :key="category.id" :categories="category"/>
</div>
<div v-else>Loading...</div>
  <CarouselComp/>
<CardComp/>
</template>

<script>
// @ is an alias to /src
import CardComp from '@/components/CardComp.vue'
import CarouselComp from '@/components/CarouselComp.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavbarComp,
    FooterComp,
    CarouselComp,
    CardComp
},

components: { CardComp },

computed: {
  tutorials () {
    return this.$store.state.categories
  }
},
mounted () {
  this.$store.dispatch("getCategories")
},

}
</script>
