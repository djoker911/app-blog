<template lang="html">
    <div class="container">
        <h1>PostsList</h1>
        <div class="control-btn">
            <button name="add">ADD</button>
            <button name="delete">DELETE</button>
            <button name="copy">COPY</button>
        </div>
         <div class="divTable">
        <div class="divTableBody">
        <div class="divTableRow">
        <div class="divTableCell" style="width:5%">&nbsp;</div>
        <div class="divTableCell" style="width:10%">id</div>
        <div class="divTableCell">&nbsp;domain</div>
        <div class="divTableCell" style="width:20%">&nbsp;create_time</div>
        <div class="divTableCell">&nbsp</div>
        </div>
        <list-item v-for="post in $store.state.post.posts" :post="post" :key="post.id"
            @change="checkedItem" @onClickedItem="updateItem"></list-item>
        </div>
       <!--<div class='list-group'>
            <list-item v-for="post in $store.state.post.posts" :post="post" :key="post.id"
            @onClickedItem="updateItem"></list-item>
        </div>
        <router-view></router-view>-->   
    </div>
        <p>Checked Ids: {{ checkboxValue }}</p>
    </div> 
       
</template>

<script>
    import { mapState } from 'vuex'

   import ListItem from './ListItem.vue'
   export default{
       data() {
           return {
               checkboxValue:[],
               checkedVals: ['bar']
           }
       },
       created () {
        this.$store.dispatch('getPosts', this.user.group)
       },
       components: {
          ListItem
       },
       
        computed: {
            ...mapState({
                user: state => state.user
            })
        },
        methods :{
            updateItem (payload) {
                console.log("updating post "+ payload)
            },
            checkedItem(value, checked) {
                console.log("checked "+checked)
                console.log("checked value "+value)
                if (checked) {
                    console.log("checked is true")
                    this.checkboxValue.push(value)
                } else {
                    console.log('index is '+this.checkboxValue.indexOf(value))
                    this.checkboxValue.splice(this.checkboxValue.indexOf(value), 1)
                }
            }
        }

       


   } 
</script>

<style lang="css">
/* DivTable.com */
.divTable{
	display: table;
	width: 100%;
}
.divTableRow {
	display: table-row;
}
.divTableHeading {
	background-color: #EEE;
	display: table-header-group;
}
.divTableCell, .divTableHead {
	border: 1px solid #999999;
	display: table-cell;
	padding: 3px 10px;
}
.divTableHeading {
	background-color: #EEE;
	display: table-header-group;
	font-weight: bold;
}
.divTableFoot {
	background-color: #EEE;
	display: table-footer-group;
	font-weight: bold;
}
.divTableBody {
	display: table-row-group;
}
</style>
