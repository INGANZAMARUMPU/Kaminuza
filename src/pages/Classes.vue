<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <AddCard @clicked="addClass"/>
        <ClassCard v-for="classe in classes" :classe="classe" v-on="$listeners"/>
    </div>
    <DialogClass @done="shown=false" v-if="shown"/>
</div>
</template>

<script>
import ClassCard from '../components/cards/class_card'
import AddCard from '../components/cards/add_card'
import DialogClass from '../components/dialogs/dialog_class'
export default {
    components: {
        ClassCard, AddCard, DialogClass
    },
    data(){
    	return {
    		shown: false,
    		classes:this.$store.state.classes,
    	}
    },
    methods:{
    	addClass(){
    		this.shown=true;
    	}
    }
};
</script>

<style scoped>
.recycler{
    display: flex;
    align-items: center;
}
</style>
