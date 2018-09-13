<template lang="html">
    <div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <h1>Signup</h1>
            <form @submit.prevent="onSubmitSignup">
                <div class="form-group"></div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                    placeholder="Enter email" v-model.lazy="email" :class="{'is-valid':emailStatus}" required>
                     <div class="invalid-feedback" style="display: block;">
                         {{emailStatus}}
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" 
                    placeholder="Password" v-model="password" :class="{'is-valid':passwordStatus}" required>
                    <div class="invalid-feedback" style="display: block;">
                         {{passwordStatus}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" 
                    placeholder="ConfirmPassword" v-model="confirmPassword" :class="{'is-valid':confirmPassword}" required>
                    <div class="invalid-feedback" style="display: block;">
                         {{confirmPasswordStatus}}
                    </div>
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="name" v-model="name" required>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="col-md-4"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            name: '',
            emailStatus: null
        }
    },
    watch: {
        email (value) {
            // this.emailStatus = "bello"
            this.axios.get(`/api/v1/unique/user/mail/${value}`)
            .then((response) =>{
                console.log(response)
                console.log(response.data.data)
                if(response.data.data != null){
                    this.emailStatus = null
                }
                else{
                   this.emailStatus = response.data.msg
                }                
            }).catch((err) => {
                this.emailStatus = err.response.data
            })
        },
        password (value) {
            if(value.length >= 0 && value.length < 6) {
                this.passwordStatus = 'Length of password should over 6 characters'
            }
            else{
                this.passwordStatus = null
            }
        }
    },
    computed: {
        confirmPasswordStatus () {
            let confirmStatus;
            if (this.confirmPassword !== this.password) {
                confirmStatus = "Not same as password"
            }
            else {
                confirmStatus = null
            }
            return confirmStatus
        }
    },
    methods: {
        onSubmitSignup () {
            if (this.password == this.confirmPassword && !this.emailStatus 
            && !this.passwordStatus && !this.confirmPasswordStatus){
                console.log(this.password)
                console.log(this.email)
                console.log(this.name)

                this.$store.dispatch('onSubmitSignup', {account:this.name, password:this.password, domainName:"zioo.etu.im", mail:this.email})
                .then((result) => {
                    this.$router.push({path: '/'})
                }).catch((err) => {
                    this.$router.push({path: '/signin'})
                })
            }       
        }
    }
}
</script>
<style lang="css">

</style>

