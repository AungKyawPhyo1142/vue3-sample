<template>
    <div>
        <h1>Login Page</h1>
        <div class="m-5 border rounded p-5">
            <label for="" class="my-2 ">E-mail: </label>
            <input type="email" v-model="user.email" name="" class="my-2 form-control" id="">
            <label for="" class="my-2 ">Password: </label>
            <input type="password" v-model="user.password" name="" class="my-2 form-control" id="">
            <button class="my-2 btn btn-primary" @click="login()">Login</button>
            <button class="my-2 btn btn-danger" @click="logout()">Logout</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginPage',
        data () {
            return {
                user : {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            login () {
                if(this.user.email != '' && this.user.password != ''){
                    localStorage.setItem('vueAuth',"true");
                }
                else {
                    alert('Empty informations');
                }
            },
            logout(){
                localStorage.setItem('vueAuth',"false");
            }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
