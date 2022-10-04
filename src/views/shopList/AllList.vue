<template>
    <div class="">
        <div class="">
            <SlotList>This is a slot text.</SlotList>
            <sg-list :titleText="Title" :paraText="200"></sg-list>
            <about></about>
        </div>
    </div>
</template>

<script>
    import sgList from "../shopList/TaskList.vue";
    import about from  "../AboutView.vue";
    import slotList from "./slotList.vue";

    export default {
        name: 'AllList',
        components: {
            sgList, about, slotList
        }
    }
</script>

<style lang="stylus" scoped>

</style>
