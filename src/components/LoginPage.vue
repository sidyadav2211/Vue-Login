<template>
    <h1> Login Page </h1>
    <form class="form-data" @submit.prevent="onSubmit">
        <div class="user-name">
            <label for="username">Username : </label>
            <input type="email" placeholder="Enter Username" v-model="username" id="username" required >

        </div>
        <div class="user-name">
        <label for="password">Password : </label>
        <input type="password" id="password" placeholder="Enter Password" v-model="password" required >
        </div>
        <button type="submit" :disabled="isDisabled"> Login</button>
    </form>
    <!-- <div v-if="localStorageUserName">
    <h3>Welcome, {{ localStorageUserName }} --{{ localStoragePassword }}</h3></div> -->
</template>
<script>
export default {
    
    name:'LoginPage',
    components:{
    },
    data (){
        return {
            
            username:'',
            password:'',
            localStorageUserName:'',
            localStoragePassword:'',
            
        }
    },
    computed: {
        isDisabled(){
            return !this.username  || !this.password  ? true : false
        }
    },
    mounted(){
        this.localStorageUserName = localStorage.getItem('username');
        this.localStoragePassword = localStorage.getItem('password');
    },
    methods:{
        
        onSubmit(){
            
            localStorage.setItem('username', this.username);
            localStorage.setItem('password', this.password);
            this.localStorageUserName = this.username;
            this.localStoragePassword = this.password;
            this.$router.push('/products')
            this.username = '';
            this.password ='';
        }
    }

}
</script>
<style scoped>

.form-data {
    border: 2px solid gray;
    border-radius: 10px ;
    width: 400px;
    height: 200px;
    justify-content: center;
    align-items: center;
    margin: auto;
    

}

.user-name {
    margin: 10px;
    padding: 5px;
}
input{
    height: 10px;
    margin: 10px;
    padding: 5px;
}
</style>