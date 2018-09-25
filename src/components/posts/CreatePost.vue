<template>
<div class="container">
   <h1>Create Domain</h1> 
   <p>
    <form @submit.prevent="onSubmit">
         <div class="form-group">
            <label for="text">Domain Name</label>
            <input type="text" id="domainName" class="form-control" placeholder="Enter domainName" v-model="domainName" required></input>
        </div>
         <button type="submit" class="btn btn-primary">
                <span>submit</span>
        </button>
    </form>
    </p>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    
    data() {
        return {
            domainName:''
        }
    },
    computed: {
            ...mapState({
                user: state => state.user
            })
    },
    methods: {
        onSubmit() {
            let isValidDomain = require('is-valid-domain')
            let domainAfterClean = this.domainName.replace(/^(?:https?:\/\/)?/i, "").split('/')[0];
            console.log(this.domainName)
            console.log(domainAfterClean)
            console.log(isValidDomain(this.domainName))
            console.log(isValidDomain(domainAfterClean))
            console.log(this.user.group)
            if(isValidDomain(domainAfterClean)===true){
                this.$store.dispatch('createPost', {userGroupId:this.user.group, domainName:domainAfterClean})
                .then(() => {
                    console.log('create done')
                    this.$router.push('/postsList')
                }).catch(() => {
                    console.log('damn it failed')
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
