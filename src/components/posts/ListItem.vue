<template>
    <a class="weeeee" @click="onClicked">
        <div>
            {{post.id}},{{post.domainName}}, {{timeStamp}}
        </div>
    </a>
    
    
</template>
<script>
import moment from 'moment'

export default {
    props: ['post'],
    computed: {
        timeStamp() {
            return moment(this.post.cTime).format('YYYY/MM/DD hh:mm:ss');
        }
    },
    methods: {
        onClicked () {
            this.$emit('onClickedItem', this.post.id)
        }
    }
}    
</script>
<style lang="css">

</style>
