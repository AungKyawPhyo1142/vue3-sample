<template>
        <div class="">
            <h1 class="text-dark">This is {{titleText}}</h1>
            <p class="text-muted">This is {{paraText}}</p>
        </div>

    <div class="shadow-sm my-3 p-3 text-danger border rounded mx-3" v-for="(item,index) in tasks" :key="index">
        {{item.name}}
    </div>
</template>

<script>
    export default {
        name: 'TaskList',
        props: {
            titleText: {
                type: String,
                required: true,
                default: 'default text'
            },
            paraText: {
                type: Number,
                default: 10,
                validator(value){
                    return value>10
                }
            }
        },
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