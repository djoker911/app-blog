<template lang="html">
    <div class="container">
        <h1>{{$store.state.user.name}}</h1>
        <h1>{{$store.state.name}}</h1>
        <h1>Count: {{$store.state.count}}</h1> 
        <h3>Click: {{$store.getters.getCountClick}}</h3>
        <button type="button" name="button" @click="add">add</button>
        <button type="button" name="button" @click="minus">minus</button>
        <button type="button" name="button" @click="add10">add10</button>
        <button type="button" name="button" @click="minus10">minus10</button>
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
        },
        add10() {
            this.$store.dispatch('add10', 10)
        },
        minus10() {
           this.$store.dispatch('minus10', 10)
        }
    }
}
</script>
<style lang="css">

</style>

