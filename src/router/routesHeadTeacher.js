/*Ce document contient toutes les routes pour HEADTEACHER*/


import Accueil from '@/components/Composants_Generaux/Accueil'

import Apprenants from '@/components/HeadTeacher/Apprenants/Apprenants'
import ApprenantConsultation from '@/components/HeadTeacher/Apprenants/ApprenantConsultation'

import Utilisateurs from '@/components/HeadTeacher/Utilisateurs/Utilisateurs'
import UtilisateurConsultation from '@/components/HeadTeacher/Utilisateurs/UtilisateurConsultation'
import UtilisateursApprenants from '@/components/HeadTeacher/Utilisateurs/UtilisateursApprenants'
import UtilisateursTuteurs from '@/components/HeadTeacher/Utilisateurs/UtilisateursTuteurs'
import UtilisateursSecretariat from '@/components/HeadTeacher/Utilisateurs/UtilisateursSecretariat'
import UtilisateursServiceFormationContinue from '@/components/HeadTeacher/Utilisateurs/UtilisateursServiceFormationContinue'
import UtilisateursCreer from '@/components/HeadTeacher/Utilisateurs/UtilisateurCreer'
import UtilisateurModifier from '@/components/HeadTeacher/Utilisateurs/UtilisateurModifier'

import Modules from '@/components/HeadTeacher/Modules/Modules'
import ModulesConsulter from '@/components/HeadTeacher/Modules/ModulesConsulter'
import ModulesGerer from '@/components/HeadTeacher/Modules/ModulesGerer'

import Profil from '@/components/HeadTeacher/Profil/Profil'


import AppHeadTeacher from '@/components/HeadTeacher/AppHeadTeacher' 



export default [
{
    	path: '/appHeadTeacher/',
    	name: 'AppHeadTeacher',
    	component: AppHeadTeacher,
    	children : [
    		{
    			path: '',
    			name: 'Accueil',
    			component: Accueil
    		},

    		/*Route pour la liste de tous les apprenants*/
		    {
		    	path: 'apprenants',
		    	name: 'Apprenants',
		      	component: Apprenants
		    },	


		    /*Route pour voir le détail d'un seul apprenant*/
		    /*Elle prend en paramètre l'id de l'apprenant sur lequel on a cliqué*/
		    {
		    	path: 'apprenantconsult/:id',
		    	name: 'ApprenantConsultation',
		      	component: ApprenantConsultation
		    },



		    /*Route pour la liste de tous les utilisateurs*/
		    {
		    	path: 'utilisateurs/',
		    	name: 'Utilisateurs',
		      	component: Utilisateurs,
		      	children: [
		      		/*Consulter les apprenants*/
		      		{
		      		path: 'utilisateurs-apprenants',
		    		name: 'UtilisateursApprenants',
		      		component: UtilisateursApprenants
		      		},
		      		/*Consulter les tuteurs*/
		      		{
		      		path: 'utilisateurs-tuteurs',
		    		name: 'UtilisateursTuteurs',
		      		component: UtilisateursTuteurs
		      		},
		      		/*Consulter le secretariat*/
		      		{
		      		path: 'utilisateurs-secretariat',
		    		name: 'UtilisateursSecretariat',
		      		component: UtilisateursSecretariat
		      		},
		      		/*Consulter le service formation continue*/
		      		{
		      		path: 'utilisateurs-sfc',
		    		name: 'UtilisateursServiceFormationContinue',
		      		component: UtilisateursServiceFormationContinue
		      		},
		      	]
		    },


		    /*Créer un nouvel utilisateur*/
		    {
		      	path: 'utilisateurs-creer',
		    	name: 'UtilisateursCreer',
		      	component: UtilisateursCreer
		    },

			/*Modifier un utilisateur*/
		    {
		      	path: 'utilisateurs-modifier/:id',
		    	name: 'UtilisateurModifier',
		      	component: UtilisateurModifier
		    },


		    /*Route pour voir le détail d'un seul utilisateur*/
		    /*Elle prends en paramètre l'id de l'utilisateur sur lequel on a cliqué*/
		    {
		    	path: 'utilisateurconsult/:id',
		    	name: 'UtilisateurConsultation',
		    	component: UtilisateurConsultation,
		    },

		    /*Route pour voir les modules*/
		    {
		        path: 'modules',
		        name: 'Modules',
		        component: Modules,
		        
		    },

		    /*Route pour consulter les modules*/
		    {
		    	path: 'modules-consulter',
		    	name: 'ModulesConsulter',
		    	component: ModulesConsulter,
		   	},	

		   	/*Route pour gérer les modules*/
		   	{
		    	path: 'modules-gerer',
		    	name: 'ModulesGerer',
		    	component: ModulesGerer,
		   	},

		    /*Route pour voir son profil*/
		    {
		    	path: 'profil',
		    	name: 'Profil',
		      	component: Profil
		    },



    	]
    },


]