<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/profile" class="navbar-brand" tag="a">Home Page</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
             <router-link v-for="item in menuItems" :to="item.link" class="nav-item" :key="item.title">
                 <a class="nav-link" href="#">{{item.title}}</a>
             </router-link>               
            </ul>
        </div> 
    </div>
  
</nav>  
</template>
<script>
export default {
    computed: {
        menuItems(){
            var menuItems = [
                {title: 'Signin', link: '/signin'},
                {title: 'Signup', link: '/signup'}
            ]
            return menuItems;
        }       
    }    
}
</script>
<style lang="css">

</style>

