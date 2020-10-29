<template>
    <div class="navbar">
        <ul>
            <li><a href="/">Acceuil</a></li>
            <li><a @click.prevent="logout">logout</a></li>
        </ul>
    </div>
</template>

<script>
export default {
	methods:{
		logout(){
			// axios codes
			this.$emit("logout", {});
		}
	}
};
</script>

<style scoped>
.navbar{
	background-color: #37e;
	display: inline-block;
	width: 100%;
    position: sticky;
    z-index: 3;
}
ul{
	float: right;
}
a{
	text-decoration: none;
	color: white;
	font-family: sans-serif;
	font-size: 20px;
	padding: 0 5px;
}
li{
	display: inline-block;
	padding: 5px 0;
}
li:hover{
	background-color: #15a;
}
</style>
