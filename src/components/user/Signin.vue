<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
                <h1>SignIn</h1>
                <form @submit.prevent="onSubmitSignin">
                    <div class="form-group">
                        <label for="text"></label>
                        <input type="text" id="account" class="form-control" placeholder="Enter account" v-model="account" required></input>
                    </div>
                    <div class="form-group">
                        <label for="password"></label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password" v-model="password" required></input>
                    </div>
                    <button type="submit" class="btn btn-primary" :disable="$store.state.user.loading">
                        <!--<span v-if="!loading">Submit</span>
                        <span v-if="loading">
                            <i class="fa fa-spinner" aria-hidden="true"></i> Loading...
                        </span>-->
                        <span>submit</span>
                    </button>
                </form>
                <div class="alert alert-danger" v-if="status">
                    {{status}}
                </div>
            </div>
            <div class="col-md-4"></div>
        </div>             
    </div>   
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return  {
            account:'',
            password:'',
            status: null
        }
    },
    computed: {
        ...mapState({
            loading: state => state.user.loading
        })
    },
    methods :{
        onSubmitSignin() {
            this.$store.dispatch('onSubmitSignin', {account: this.account, password: this.password})
                .then(() => {
                    this.$router.push('/profile')
                }).catch((err) =>{
                    this.state = err
                })
        }
    }
    
}
</script>

<style lang="css">

</style>

