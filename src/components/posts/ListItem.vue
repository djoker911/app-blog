<template>
    <!--<a class="weeeee">
        <div>
            {{post.id}},{{post.domainName}}, {{timeStamp}}, <button name="subject" type="submit" value="fav_HTML" @click="onClicked">EDIT</button>
        </div>
    </a>-->
    <div class="divTableRow">
        <div class="divTableCell"><input type="checkbox" :id="post.id" :value="post.id" @change="onChange($event.target)"></div>
        <div class="divTableCell">{{post.id}}</div>
        <div class="divTableCell">{{post.domainName}}</div>
        <div class="divTableCell">{{timeStamp}}</div>
        <div class="divTableCell"><button name="subject" type="submit" value="fav_HTML" @click="onClicked">EDIT</button></div>
    </div>
    
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
        },
        onChange(val) {
            console.log(val.id);
            console.log(val.checked);
            this.$emit("change", val.id, val.checked)
        }
    }
}    
</script>
<style lang="css">

</style>
