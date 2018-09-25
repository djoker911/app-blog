<template>
    <div id="container">User {{ $route.params.id }}
         <div>{{domainName}}</div>
         <form @submit.prevent="onSubmitEdit">
            <div class="form-group">
                <label for="domainName">Domain Name</label>
                <input type="text" class="form-control" id="domainName"  v-model="domainName" required>
            </div>
             <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
   
</template>
<script>
    import { mapState } from 'vuex'

    export default {
        data () {
            return {
                domainName:'',
            }
        },
        mounted () {
            this.axios
            .get('/api/v1/getByDomainInfoId?id='+this.$route.params.id)
            .then(response => {
                this.domainName = response.data.data.domainName
            })
        },
        computed: {
            ...mapState({
                user: state => state.user
            })
        },
        
        methods: {
            onSubmitEdit () {
                let isValidDomain = require('is-valid-domain')
                let domainAfterClean = this.domainName.replace(/^(?:https?:\/\/)?/i, "").split('/')[0];
                console.log(this.domainName)
                console.log(domainAfterClean)
                console.log(isValidDomain(this.domainName))
                console.log(isValidDomain(domainAfterClean))
                console.log(this.user.group)
                console.log(this.$route.params.id)
                if(isValidDomain(domainAfterClean)===true){
                this.$store.dispatch('editPost', {userGroupId:this.user.group, domainName:domainAfterClean, id:this.$route.params.id})
                    .then(() => {
                        console.log('edit done')
                        this.$router.push('/postsList')
                    }).catch(() => {
                        console.log('edit it failed')
                        this.$router.push('/postsList')
                    })
                }else{
                    console.log('wrong format')
                }
            }
        }
    }
</script>
<style>

</style>

