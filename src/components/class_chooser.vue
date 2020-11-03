<template>
	<div class="component profile">
	    <form action="." accept-charset="utf-8" enctype="multipart/form-data">
	        <div class="item">
	            <label for="id_a_a">Annee Academique</label>
	            <select name="a_a" required="" id="id_a_a" v-model="selected_a_a">
					<option value="" selected="" value="-1">---------</option>
					<option v-for="a_a in A_A" :value="a_a.id">
						{{ a_a.label }}
					</option>
				</select>  
	        </div>
	        <div class="item">
	            <label for="id_dep">Departement</label>
	            <select name="dep" required="" id="id_dep" v-model="selected_dep">
					<option value="" selected="" value="-1">---------</option>
					<option v-for="dep in deps" :value="dep.id">
						{{ dep.label }}
					</option>
				</select>  
	        </div>
	        <div class="item">
	            <label for="id_classe">Classe</label>
	            <select name="classe" required="" id="id_classe" v-model="selected_class">
					<option value="" selected="" value="-1">---------</option>
					<option v-for="classe in selectedClasses" :value="classe.id">
						{{ classe.label }}
					</option>
				</select>  
	        </div>
	        <div style="display: flow-root;">
	            <div style="float:right;">
	                <button type="reset" click="method=''">reset</button>
	                <button type="submit" submit="">Submit</button>
	            </div>
	        </div>
	    </form>
	</div>
</template>

<script>
export default{
	data(){
        return{
        	selected_a_a:-1,
        	selected_dep : -1,
        	selected_class : -1,
            A_A:this.$store.state.A_A,
            deps:this.$store.state.departements,
            classes: this.$store.state.classes
        }
    },
    computed:{
    	selectedClasses(){
    		if((this.selected_a_a != "-1") & (this.selected_dep!="-1")){
    			console.log(this.selected_a_a, this.selected_dep);
    			return this.classes.filter( x => (
    				(x.a_a == this.selected_a_a) & 
    				(x.dep == this.selected_dep)
    				)
    			);
    		}
    		return [];
    	}
    }
};
</script>

<style scoped>
.item{
	display: inline-flex;
}
</style>
