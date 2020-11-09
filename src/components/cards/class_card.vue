<template>
<div class="classe-card">
    <div class="classe-info">
        {{ classe.departement }}
    </div>
    <div info>
        {{ classe.period }}
    </div>
    <div info>
        {{ classe.campus }}
    </div>
    <div info>
        {{ classe.niveau }}
    </div>
    <button @click="emitDelete" href="#" classe="commands-btn">
        Supprimer
    </button>
    <button @click="emitEdit" href="#" classe="commands-btn">
        Modifier
    </button>
</div>
</template>

<script scoped>
export default {
    props:{
        classe:{
            type:Object,
            required: true
        }
    },
    // components: {
    //     PrintButton
    // },
    methods: { 
        emitEdit(){
            this.$emit('modifier', this.classe); 
        },
        emitDelete(){
            this.$emit('suppr', this.classe); 
        }
    }
};
</script>

<style scoped>
.classe-card{
    width: 140px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 5px;
    margin: 10px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
}
.classe-info{
    text-align: center;
    padding: 0;
    font-size: 16px;
    font-weight: bold;
}
[info]{
    text-align: center;
}
button{
    border: 2px solid #37e;
    color: #37e;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    background: white;
    padding: 0;
    margin: 0;
    margin-top: 3px;
}

button:active{
    background: #37e;
    color: white;
}
</style>
