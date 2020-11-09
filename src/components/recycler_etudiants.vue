<template>
<div class="component profiles">
    <div style="display: flow-root;">
        <input type="text" placeholder="recherche..." style="float:right; height:2em">
    </div>
    <div class="recycler">
        <AddCard v-on="$listeners"/>
        <UserCard v-for="person in persons" :person="person" v-on="$listeners"/>
    </div>
</div>
</template>

<script>
import UserCard from './cards/user_card'
import AddCard from './cards/add_card'
export default {
    components: {
        UserCard, AddCard
    },
    props:{
        persons:{
            type : Array,
            default : [],
        },
    }
};
</script>

<style scoped>
</style>
