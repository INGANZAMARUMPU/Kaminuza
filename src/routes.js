import DashBoard from './pages/Dashboard.vue';
import Etudiants from './pages/Etudiants.vue';
import Classes from './pages/Classes.vue';
import Cours from './pages/Cours.vue';
import Examens from './pages/Examens.vue';
import Notes from './pages/Notes.vue';
import Professeurs from './pages/Professeurs.vue';

export const routes = [
    { path: '/', component: DashBoard },
    { path: '/etudiants', component: Etudiants },
    { path: '/classes', component: Classes },
    { path: '/cours', component: Cours },
    { path: '/examens', component: Examens },
    { path: '/notes', component: Notes },
    { path: '/professeurs', component: Professeurs },
];