<template>
    <div class="">
        <div class="">
            <sg-list :titleText="Title" :paraText="200"></sg-list>
            <about></about>
        </div>
    </div>
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
