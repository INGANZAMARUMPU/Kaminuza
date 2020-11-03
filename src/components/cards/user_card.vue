<template>
<div class="user-card" :qr-data="user.qr">
    <div class="img-user">
        <img :src='user.avatar' alt="photo de profile" width="30px">
    </div>
    <div class="user-info firstname">
        {{ user.first_name }}
    </div>
    <div class="user-info lastname">
        {{ user.last_name }}
    </div>
    <div class="user-info tickettype">
        {{ user.ticket.name }}
    </div>
    <div class="hidden-infos">
        <div class="user-info quarter">{{ user.quarter}}</div>
        <div class="user-info place">{{ evenmt.place}}</div>
        <div class="user-info ticket-date">{{ evenmt.date }}</div>
    </div>
    <div class="user-hover">
        <div class="user-info phone">{{ user.phone}}</div>
        <div class="user-info email">{{ user.email}}</div>
        <div class="user-info date">{{ user.date }}</div>
        <!-- <PrintButton :user="user">Imprimer</PrintButton> -->
        <a @click="emitEdit" href="#" class="commands-btn">Modifier</a>
        <a @click="emitDelete" href="#" class="commands-btn">Supprimer</a>
    </div>
</div>
</template>

<script>
// import PrintButton from "./print_button"
export default {
    props:{
        user:{
            type:Object,
            required: true
        },
        card:{
            type:Object,
            required: true
        }
    },
    // components: {
    //     PrintButton
    // },
    methods: { 
        emitEdit(){
            this.$emit('modifier', this.user); 
        },
        emitDelete(){
            this.$emit('suppr', this.user); 
        }
    }
};
</script>

<style scoped>
.user-card{
    display: inline-flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 140px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 5px 5px 10px 5px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.username{
    max-width: 130px;
    overflow: hidden;
}
.user-card:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.hidden-infos{
    display: none;
}
.img-user{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ddd;
    overflow: hidden;
}
.img-user img{
    width: 100%;
    margin:auto;
}
.user-hover a{
    display: block;
    margin: 3px;
    padding: 3px;
    font-size: 16px;
    font-weight: bold;
    border: 2px solid #37e;
    color: #37e;
    border-radius: 5px;
}
.user-hover{
    width: 130px;
    height: 100%;
    background-color: rgba(255,255,255,0.8);
    position: absolute;
    display: none;
}
.user-card:hover .user-hover{
    display: block;
}
</style>
