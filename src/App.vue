<template>
  <div id="app">
  	<home v-if="logged_in" @logout="logged_in=false"/>
  	<login-page @login="logged_in=true" v-else/>
  </div>
</template>

<script>
import Login from "./pages/Login";
import Home from "./pages/Home";

export default {
	components:{
		Home,
		"login-page": Login
	},
	data(){
		return{
			logged_in: false,
		}
	}
};
</script>

<style src="./css/styles.css">

</style>
