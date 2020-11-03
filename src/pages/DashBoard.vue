<template>
    <div class="container">
        <div class="liste">
            <menu-card v-for="menu in menus" :menu="menu"/>
        </div>
    </div>
</template>

<script>
import MenuCard from "../components/cards/menu_card.vue"
export default {
    data:function(){
        return {
            menus :[
                {name:"Étudiants", url:"/etudiants", infos:"gerer Étudiants", details:""},
                {name:"Classes", url:"/classes", infos:"gerer Classes", details:""},
                {name:"Cours", url:"/cours", infos:"gerer Cours", details:""},
                {name:"Examens", url:"/examens", infos:"gerer Examens", details:""},
                {name:"Notes", url:"/notes", infos:"gerer Notes", details:""},
                {name:"Professeurs", url:"/professeurs", infos:"gerer Professeurs", details:""}
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
    width: 500px;
    margin: auto;
}
.liste{
    display: inline-block;
}
</style>
