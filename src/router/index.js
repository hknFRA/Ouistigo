import Vue from 'vue'
import Router from 'vue-router'

/*Import de tous les composants*/
import HelloWorld from '@/components/HelloWorld'
import Accueil from '@/components/Composants_Generaux/Accueil'



import Connexion from '@/components/Composants_Generaux/Connexion'
import Deconnexion from '@/components/Composants_Generaux/Deconnexion'
import Erreur from '@/components/Composants_Generaux/Erreur'
import Copyrights from '@/components/Composants_Generaux/Copyrights'



import routesHeadTeacher from './routesHeadTeacher'
import routesLearner from './routesLearner'



Vue.use(Router)


export default new Router({
  routes: [
    

 	/*Toutes les routes de HEADTEACHER*/
	...routesHeadTeacher,

	...routesLearner,

    /*Route par défaut*/
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
