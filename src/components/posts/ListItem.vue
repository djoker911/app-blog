<template>
    <h1>
        {{post.id}},{{post.domainName}}, {{timeStamp}}
    </h1>
    
</template>
<script>
import moment from 'moment'

export default {
    props: ['post'],
    computed: {
        timeStamp() {
            return moment(this.post.cTime).format('YYYY/MM/DD hh:mm:ss');
        }
    }
}    
</script>
<style lang="css">

</style>
