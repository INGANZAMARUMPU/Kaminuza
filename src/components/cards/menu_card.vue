<template>
    <router-link :to="menu.url">
        <div class="user-card" qr-data="client.qr">
            <div class="img-user">
                <img src='client.avatar' alt="photo de profile" width="30px">
            </div>
            <div class="user-info firstname">
                {{ menu.name }}
            </div>
            <div class="user-info lastname">
                {{ menu.infos }}
            </div>
            <div class="user-info tickettype">
                {{ menu.details }}
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        menu:{
            type:Object,
            required: true
        },
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
    padding: 10px 5px 10px 5px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    color: #000;
}
.username{
    max-width: 130px;
    overflow: hidden;
}
.user-card:hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
</style>
