import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state:{
		logged_in: false,
		A_A : [ 
			{'id': '15', 'label': '2015-2016'},
			{'id': '16', 'label': '2016-2017'}, 
			{'id': '17', 'label': '2017-2018'},
			{'id': '18', 'label': '2018-2019'}, 
			{'id': '19', 'label': '2019-2020'}
		],
		departements:[
			{"id":"2", "faculte":"7", "label":"Telecommunication et Reseaux"},
			{"id":"2", "faculte":"7", "label":"Finance et comptabilité"},
			{"id":"2", "faculte":"7", "label":"Banque et Assurance"},
			{"id":"2", "faculte":"7", "label":"Developpement Comunautaire"},
			{"id":"2", "faculte":"7", "label":"Marketing-Management"},
			{"id":"4", "faculte":"2", "label":"Administration et Gestion des Affaires"},
			{"id":"5", "faculte":"4", "label":"Informatique de Gestion"},
			{"id":"6", "faculte":"5", "label":"Psychologie Clinique et social"},
			{"id":"7", "faculte":"6", "label":"Soins Infirmiers"},
			{"id":"7", "faculte":"6", "label":"Sage Femme"},
		],
		facultes:[
			{"id":"2", "name":"FSGI", "responsables":1},
			{"id":"4", "name":"Science et Technologies", "responsables":1},
			{"id":"5", "name":"Science humaines et Social", "responsables":1},
			{"id":"6", "name":"Sience de la santé", "responsables":1},
			{"id":"7", "name":"Instituts", "responsables":1},
		],
		campus:[
			{"id":"1", "name":"Kiremba"},
			{"id":"2", "name":"Saint Michel"},
			{"id":"3", "name":"Ngagara"},
			{"id":"4", "name":"Bururi"},
			{"id":"5", "name":"Makamba"},
			{"id":"6", "name":"Rutana"},
		], 
		periodes:[
			{"id":"1", "name":"Jours"},
			{"id":"2", "name":"Soir"},
		], 
		niveaux:[
			{"id":"1", "name":"Bac I"},
			{"id":"2", "name":"Bac II"},
			{"id":"3", "name":"Bac III"},
			{"id":"4", "name":"Institut I"},
			{"id":"5", "name":"Institut II"},
			{"id":"6", "name":"Institut III"},
		],
		classes:[]    
    },
	mutations: {},
	actions: {},
	// getters:{
 //        loggedIn(state){
 //            return state.logged_in;
 //        }
 //    }
})