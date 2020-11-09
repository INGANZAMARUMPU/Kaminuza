<template>
    <div class="item" @click="clicked">
        <h1>+</h1>
    </div>  
</template>
<script>
export default{
    methods:{
        clicked(){
            this.$emit("clicked", {});
        }
    }
};
</script>
<style scoped>
.item{
    background: #37e;
    border-radius: 5px;
    width: 100px;
    height: 100px;
    margin: 0;
    display: flex;
    justify-content: center;
}
h1{
    position: relative;
    margin: auto;
    font-size: 60px;
    color: white;
}
.item:hover{
    background: #588;
}
</style>