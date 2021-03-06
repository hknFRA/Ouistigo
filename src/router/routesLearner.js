/*Ce document contient toutes les routes pour l'apprenant*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilLearner from '@/components/Learner/Profil/Profil'
import ConsulterNotes from '@/components/Learner/Notes/Notes'


import AppLearner from '@/components/Learner/AppLearner'


export default [
	/*C'est la route parent*/
    /*On ne lui donne pas de nom afin de ne pas pouvoir l'utiliser*/
    {
    	path: '/app-learner/',
    	component : AppLearner,
    	children : [
            {
                path: '',
                name: 'AccueilLearner',
                component : Accueil,
            },

    		{
    			path: 'profil',
    			name: 'ProfilLearner',
    			component : ProfilLearner,
    		},

            {
                path: 'consulter-notes',
                name: 'ConsulterNotes',
                component : ConsulterNotes,
            },
            
            




    	]
    }
]