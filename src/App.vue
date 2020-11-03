<template>
  <div id="app">
  	<home v-if="$store.state.logged_in" @logout="$store.state.logged_in=false"/>
  	<login-page v-else/>
  </div>
</template>

<script>
import Login from "./pages/Login";
import Home from "./pages/Home";

export default {
	components:{
		Home,
		"login-page": Login
	}
};
</script>

<style src="./css/styles.css">

</style>
