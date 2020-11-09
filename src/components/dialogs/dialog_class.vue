<template>
	<div class="background" @click="exitModal">
		<div class="body" @click.prevent.stop="">
			<h3>Faculté</h3>
			<hr>
			<br>
			<div class="champ">
				<label for="id_a_a">Année Accademique</label>
	            <select name="a_a" required id="id_a_a" v-model="classe.a_a">
					<option value="" selected value="-1">---------</option>
					<option v-for="a_a in AA" :value="a_a.id">
						{{ a_a.label }}
					</option>
				</select>
			</div>
			<div class="champ">
				<label for="id_departement">Département</label>
	            <select name="departement" required id="id_departement" v-model="classe.departement_id">
					<option value="" selected value="-1">---------</option>
					<option v-for="departement in departements" :value="departement.id">
						{{ departement.label }}
					</option>
				</select>
			</div>
			<div class="champ">
				<label for="id_niveau">Niveau</label>
	            <select name="niveau" required id="id_niveau" v-model="classe.niveau_id">
					<option value="" selected value="-1">---------</option>
					<option v-for="niveau in niveaux" :value="niveau.id">
						{{ niveau.name }}
					</option>
				</select>
			</div>
			<div class="champ">
				<label for="id_cam">Campus</label>
	            <select name="cam" required id="id_cam" v-model="classe.campus_id">
					<option value="" selected value="-1">---------</option>
					<option v-for="cam in campus" :value="cam.id">
						{{ cam.name }}
					</option>
				</select>
			</div>
			<div class="id_periode">
				<label for="fac">Periode</label>
	            <select name="periode" required id="id_periode" v-model="classe.periode_id">
					<option value="" selected value="-1">---------</option>
					<option v-for="periode in periodes" :value="periode.id">
						{{ periode.name }}
					</option>
				</select>
			</div>
			<div class="buttons">
				<button @click.prevent.stop="addClass">Valider</button>
				<button @click="exitModal">Annuler</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props:{
		fac:{
			type:Object,
			required:false
		},
		is_edition:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {
			AA : this.$store.state.A_A,
			departements: this.$store.state.departements,
			periodes: this.$store.state.periodes,
			campus: this.$store.state.campus,
			niveaux: this.$store.state.niveaux,
			classe: {}
		}
	},
	methods:{
		exitModal(){
			this.$emit('done', {})
		},
		addClass(){
			this.classe.id = this.periodes.length+1;
			this.classe.departement = this.departements
				.find(x => x.id == this.classe.departement_id).label;
			this.classe.period = this.periodes
				.find(x => x.id == this.classe.periode_id).name;
			this.classe.campus = this.campus
				.find(x => x.id == this.classe.campus_id).name;
			this.classe.niveau = this.niveaux
				.find(x => x.id == this.classe.niveau_id).name;
			this.$store.state.classes.unshift(this.classe);
			this.$emit('done', {});
		}
	}
};
</script>
<style scoped>
.background{
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: #0005;
	z-index: 5;
}
.body{
	position: absolute;
	background-color: white;
	border-radius: 10px;
	width: 300px;
	padding: 10px;
	display: inline-block;
	left: 50%;
	top: 100px;
	transform: translateX(-50%);
}
.champ{
	margin-bottom: 5px;
	color: black;
	text-align: left;
}
.buttons{
	display: flex;
    flex-direction: row-reverse;
    margin-top: 5px;
}
select{
	width: 100%;
	height: 30px;
}
button{
	padding: 2px 10px;
	margin: 0 3px;
}
h3{
	text-align: center;
}
</style>