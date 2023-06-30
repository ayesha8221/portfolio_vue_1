<template>
    <div v-if="category" class="category-details">
        <img :src="category.img" :alt="category.name">
        <div>
            <h2> {{ category.name }}</h2>
        </div>
        
    </div>
</template>
<script>
export default {
    props: ["id"],

computed: {
  categories () {
    return this.$store.state.category
  }
},
mounted () {
  this.$store.dispatch("getCategory", this.id)
},
    
}
</script>
<style>
    
</style>