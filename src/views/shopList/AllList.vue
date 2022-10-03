<template>
    <sg-list></sg-list>
    <about></about>
</template>

<script>
    import sgList from "../shopList/TaskList.vue";
    import about from  "../AboutView.vue";

    export default {
        name: 'AllList',
        components: {
            sgList, about
        }
    }
</script>

<style lang="stylus" scoped>

</style>
