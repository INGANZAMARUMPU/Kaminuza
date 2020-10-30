<template>
    <div class="container">
        <div class="liste">
            <menu-card v-for="menu in menus" :menu="menu"/>
        </div>
        <hr>
    </div>
</template>

<script>
import MenuCard from "../components/cards/menu_card.vue"
export default {
    data:function(){
        return {
            menus :[
                {name:"Étudiants", infos:"gerer Étudiants", details:""},
                {name:"Classes", infos:"gerer Classes", details:""},
                {name:"Cours", infos:"gerer Cours", details:""},
                {name:"Examens", infos:"gerer Examens", details:""},
                {name:"Notes", infos:"gerer Notes", details:""},
                {name:"Professeurs", infos:"gerer Professeurs", details:""}
            ]
        }
    },
    components: {
        MenuCard
    }
};
</script>
<style scoped>
.container{
    width: 80%;
    margin: auto;
}
.liste{
    display: inline-block;
}
</style>
