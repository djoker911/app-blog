<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/" class="navbar-brand" tag="a">Home Page</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
             <router-link v-for="item in menuItems" :to="item.link" class="nav-item" :key="item.title">
                 <a class="nav-link" href="#">{{item.title}}</a>
             </router-link>               
            </ul>
            <form class="form-inline" v-if="userIsAuthenticed">
                <button type="button" name="button" class="btn btn-outline-success" @click="onLogout">Logout</button>
            </form>
        </div> 
    </div>
  
</nav>  
</template>
<script>
export default {
    computed: {
        menuItems(){
            var menuItems;
            if(this.userIsAuthenticed) {
                menuItems = [
                    {title: 'Profile', link: '/profile'},
                    {title: 'Posts', link: '/postsList'}
                ]
            }else{
                menuItems = [
                    {title: 'Signin', link: '/signin'},
                    {title: 'Signup', link: '/signup'}
                ]
            }
            
            return menuItems;
        },
        userIsAuthenticed() {
            console.log(this.$store.getters.getUser)
            return this.$store.getters.getUser !== null && this.$store.getters.getUser !== undefined
        }       
    },
    methods: {
        onLogout() {
            this.$store.dispatch('onUserLogout').then(() => {
                this.$router.push('/signin')
            }).catch(() => {
                this.$router.push('/')
            })
        }
    }  
}
</script>
<style lang="css">

</style>

