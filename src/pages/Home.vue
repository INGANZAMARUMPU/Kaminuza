<template>
	<div class="container">
  		<Topbar v-on="$listeners"/>
  		<router-view default="/"/>
  	</div>
</template>

<script>
import Topbar from "../components/Topbar";
export default {
	components: {
		Topbar,
	},
	data(){
		return{
		}
	}
};
</script>

<style>

</style>
