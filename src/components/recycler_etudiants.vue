<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <UserCard v-for="client in clients" :client="client" :evenmt="evenmt" v-on="$listeners"/>
    </div>
</div>
</template>

<script>
import UserCard from './cards/user_card'
export default {
    components: {
        UserCard
    },
    props:{
        clients:{
            type : Array,
            default : [],
        },
        evenmt:{
            type: Object,
            default: {}
        }
    }
};
</script>

<style scoped>
</style>
