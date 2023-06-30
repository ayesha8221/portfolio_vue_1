<template>
  <NavbarComp/>
  <FooterComp/>
  <CartModalComp/>
  <router-view/>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import FooterComp from '@/components/FooterComp.vue';
import CartModalComp from './components/CartModalComp.vue';

export default {
  components: {
     NavbarComp, FooterComp, CartModalComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}


</style>
