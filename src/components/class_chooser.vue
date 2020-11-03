<template>
	<div class="component profile">
	    <form action="." accept-charset="utf-8" enctype="multipart/form-data">
	        <div class="item">
	            <label for="id_ticket_type">Annee Academique</label>
	            <select name="ticket_type" required="" id="id_ticket_type">
					<option value="" selected="">---------</option>
					<option v-for="ticket in tickets" value="ticket.id"
						 :selected="ticket.id == client.ticket.id">
						{{ ticket.name }}
					</option>
				</select>  
	        </div>
	        <div class="item">
	            <label for="id_ticket_type">Departement</label>
	            <select name="ticket_type" required="" id="id_ticket_type">
					<option value="" selected="">---------</option>
					<option v-for="ticket in tickets" value="ticket.id"
						 :selected="ticket.id == client.ticket.id">
						{{ ticket.name }}
					</option>
				</select>  
	        </div>
	        <div class="item">
	            <label for="id_ticket_type">Classe</label>
	            <select name="ticket_type" required="" id="id_ticket_type">
					<option value="" selected="">---------</option>
					<option v-for="ticket in tickets" value="ticket.id"
						 :selected="ticket.id == client.ticket.id">
						{{ ticket.name }}
					</option>
				</select>  
	        </div>
	        <div style="display: flow-root;">
	            <div style="float:right;">
	                <button type="reset" @click="method=''">reset</button>
	                <button type="submit" submit="">{{ getSubmitTxt }}</button>
	            </div>
	        </div>
	    </form>
	</div>
</template>

<script>
;
</script>

<style scoped>

</style>
