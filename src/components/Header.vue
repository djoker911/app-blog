<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/profile" class="navbar-brand" tag="a">Home Page</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
             <router-link v-for="item in menuItems" :to="item.link">
                 <a class="nav-link" href="#">{{item.title}}</a>
             </router-link>   
            
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
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
                {title: 'Signip', link: '/signup'}
            ]
            return menuItems;
        }       
    }    
}
</script>
<style lang="css">

</style>

