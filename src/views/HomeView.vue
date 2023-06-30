<template>
<<<<<<< HEAD
  <CarouselComp/>
=======
  <div v-if="categories" class="flex-container">
  <CardComp v-for="category of categories" :key="category.id" :categories="category"/>
</div>
<div v-else>Loading...</div>
  <CarouselComp/>
<CardComp/>
>>>>>>> bd7d5ba2cf1295672b6a910625452f725bb14369
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import CarouselComp from '@/components/CarouselComp.vue';
=======
import CardComp from '@/components/CardComp.vue'
import CarouselComp from '@/components/CarouselComp.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'
>>>>>>> bd7d5ba2cf1295672b6a910625452f725bb14369

export default {
  name: 'HomeView',
  components: {
<<<<<<< HEAD
    CarouselComp

  }
}

=======
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
>>>>>>> bd7d5ba2cf1295672b6a910625452f725bb14369
</script>
