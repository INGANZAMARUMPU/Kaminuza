import DashBoard from './pages/Dashboard.vue';
import Etudiants from './pages/Etudiants.vue';
import Classes from './pages/Classes.vue';
import Cours from './pages/Cours.vue';
import Examens from './pages/Examens.vue';
import Notes from './pages/Notes.vue';
import Fac from './pages/Fac.vue';
import Departement from './pages/Departement.vue';
import Campus from './pages/Campus.vue';
import Professeurs from './pages/Professeurs.vue';
import Niveaux from './pages/Niveaux.vue';

export const routes = [
    { path: '/', component: DashBoard },
    { path: '/etudiants', component: Etudiants },
    { path: '/classes', component: Classes },
    { path: '/cours', component: Cours },
    { path: '/examens', component: Examens },
    { path: '/notes', component: Notes },
    { path: '/professeurs', component: Professeurs },
    { path: '/facultes', component: Fac },
    { path: '/departements', component: Departement },
    { path: '/campus', component: Campus },
    { path: '/niveaux', component: Niveaux },
];