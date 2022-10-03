<template>
    <div class="contact">
        <h1>This is contact page</h1>

         <!-- get name and age from url -->
        <h2 class="text-danger">{{this.$route.params.name}}</h2>
        <h2 class="text-danger">{{this.$route.params.age}}</h2>
        <button class="btn btn-primary" @click="printData()">Get URL Data</button>
    </div>
</template>

<script>
    export default {
        name: 'ContactView',
        methods: {
            printData () {
                console.log("NAME: ",this.$route.params.name);
                console.log("AGE: ",this.$route.params.age);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>