<template>
    <div class="shadow-sm my-3 p-3 text-danger border rounded mx-3" v-for="(item,index) in tasks" :key="index">
        {{item.name}}
    </div>
</template>

<script>
    export default {
        name: 'TaskList',
        data () {
            return {
                title: 'This is all list page',
                tasks: [
                    {name: 'Wash dishes', status: false},
                    {name: 'Wash clothes', status: false},
                    {name: 'Buy shirt', status: false},
                    {name: 'Charge Phone', status: false},
                    {name: 'Watch netflix', status: false}
                ]
            }
        },
    }
</script>