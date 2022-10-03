<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button class="m-3 btn btn-primary" @click="goHome()">Go Home</button>
    <button class="m-3 btn btn-dark" @click="goList()">Go All List</button>
  </div>
</template>

<script>
  export default {
    name:'AboutView',    
    methods: {
      goHome () {
        // using path(URL) route
        this.$router.push('/');
      },
      goList(){
        // using name route
        this.$router.push({name:'allList'})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>