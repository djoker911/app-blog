<template lang="html">
    <div class="container">
        <h1>Count: {{$store.state.count}}</h1> 
        <button type="button" name="button" @click="add">add</button>
        <button type="button" name="button" @click="minus">minus</button>
    </div>
    

</template>
<script>
export default {
    methods: {
        add() {
            this.$store.dispatch('add1')
        },
        minus() {
           this.$store.dispatch('minus1')
        }
    }
}
</script>
<style lang="css">

</style>

