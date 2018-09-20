<template lang="html">
    <div class="container">
        <h1>PostsList</h1>
       <div class='list-group'>
            <list-item v-for="post in $store.state.post.posts" :post="post" :key="post.id"></list-item>
        </div>
        <router-view></router-view>
    </div>    
</template>

<script>
    import { mapState } from 'vuex'

   import ListItem from './ListItem.vue'
   export default{
       created () {
        this.$store.dispatch('getPosts', this.user.group)
       },
       components: {
          ListItem
       },
       
        computed: {
            ...mapState({
                user: state => state.user
            })
        },
        //methods :{
        //    getPosts() {
        //        console.log("in postslist.methods.getPosts")
        //        console.log(this.user.group)
        //        this.$store.dispatch('getPosts', this.user.group)
        //    }
        //}
       


   } 
</script>

<style lang="css">

</style>
