<template>
    <div>
        <slot></slot>
        <h1 class="text-danger"><slot>This is empty value</slot></h1>
    </div>
</template>

<script>
    export default {
        name: 'slotList',

    }
</script>

<style lang="stylus" scoped>

</style>
