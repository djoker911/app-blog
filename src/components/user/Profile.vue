<template lang="html">
    <div class="container">
        <h1>Profile</h1>
        <h3>ID: {{user}}</h3>
    </div>
    

</template>
<script>
import { mapState } from 'vuex'
export default {
    methods: {
        
    },
    computed: {
        ...mapState({
            user: state => state.user
        })
    }
}
</script>
<style lang="css">

</style>

