<template>
	<div class="background" @click="exitModal">
		<div class="body" @click.prevent.stop="">
			<h3>Faculté</h3>
			<hr>
			<br>
			<div class="champ">
				<label for="fac">Nom de la Faculté</label>
				<input type="text" id="fac"
					v-model="fac.name">
			</div>
			<div class="buttons">
				<button @click.prevent.stop="">Valider</button>
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
			default:{
		        "id": 0,
		        "name": ''
		    }
		},
	},
	methods:{
		exitModal(){
			this.$emit('done', {})
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
}
input{
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