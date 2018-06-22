import Vue from 'vue'
import Router from 'vue-router'

/*Import de tous les composants*/
import Accueil from '@/components/Composants_Generaux/Accueil'


import Connexion from '@/components/Composants_Generaux/Connexion'
import Deconnexion from '@/components/Composants_Generaux/Deconnexion'
import Erreur from '@/components/Composants_Generaux/Erreur'
import Copyrights from '@/components/Composants_Generaux/Copyrights'


/*Imports des routes des diiférents utilisateurs*/
/*En ayant plusieurs fichier on évite d'avoir un seul gros fichier index*/
/*Améliore aussi la maintenance de l'application*/
import routesHeadTeacher from './routesHeadTeacher'
import routesLearner from './routesLearner'
import routesTeacher from './routesTeacher'
import routesSecretariat from './routesSecretariat'
import routesFormationUnit from './routesFormationUnit'


Vue.use(Router)


export default new Router({
  routes: [

 	/*Utilisations des routes*/
	...routesHeadTeacher,
	...routesLearner,
	...routesTeacher,
	...routesSecretariat,
	...routesFormationUnit,


    /*Route par défaut*/
    /*Le path est vide*/
    /*Il y en a forcement une sinon bug*/
    /*Page de Connexion*/
    {
      	path: '',
      	name : 'Connexion',
    	component : Connexion,
    	      
    },
  
    /*Route de déconnexion*/
    {
    	path: 'deconnexion',
    	name: 'Deconnexion',
    	component: Deconnexion
    },

    /*Route si l'utilisateur est sur une route non reconnue*/
    {
    	path: '*',
    	name: 'Erreur',
    	component: Erreur
    },
    
  ]
})
