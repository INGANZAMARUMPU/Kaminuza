<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <AddCard @clicked="addFaculte"/>
        <UserCard v-for="item in items" :item="item" v-on="$listeners"/>
    </div>
    <DialogFac @done="shown=false" v-if="shown"/>
</div>
</template>

<script>
import UserCard from '../components/cards/user_card'
import AddCard from '../components/cards/add_card'
import DialogFac from '../components/dialogs/dialog_fac'
export default {
    components: {
        UserCard, AddCard, DialogFac
    },
    data(){
    	return {
    		shown: false,
    		items:[],
    	}
    },
    methods:{
    	addFaculte(){
    		console.log("=============")
    		this.shown=true;
    	}
    }
};
</script>

<style scoped>
</style>
