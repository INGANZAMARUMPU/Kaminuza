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
                {name:"Étudiants", url:"/etudiants", infos:"gerer Étudiants", icon:"/assets/logo.png"},
                {name:"Classes", url:"/classes", infos:"gerer Classes", icon:"/assets/logo.png"},
                {name:"Cours", url:"/cours", infos:"gerer Cours", icon:"/assets/logo.png"},
                {name:"Examens", url:"/examens", infos:"gerer Examens", icon:"/assets/logo.png"},
                {name:"Notes", url:"/notes", infos:"gerer Notes", icon:"/assets/logo.png"},
                {name:"Professeurs", url:"/professeurs", infos:"gerer Professeurs", icon:"/assets/logo.png"},
                // {name:"Facultes", url:"/facultes", infos:"gerer facultes", icon:"/assets/logo.png"},
                // {name:"Departements", url:"/departements", infos:"gerer departements", icon:"/assets/logo.png"},
                // {name:"Campus", url:"/campus", infos:"gerer campus", icon:"/assets/logo.png"},
                // {name:"Niveaux", url:"/niveaux", infos:"gerer les niveaux", icon:"/assets/logo.png"},
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
    max-width: 500px;
    margin: auto;
}
.liste{
    display: inline-block;
}
</style>
