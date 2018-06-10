/*Ce document contient toutes les routes pour LEARNER*/


import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilLearner from '@/components/Learner/Profil/Profil'



import AppLearner from '@/components/Learner/AppLearner'


export default [
	{
    	path: '/AppLearner/',
    	name: 'AppLearner',
    	component : AppLearner,
    	children : [
    		{
    			path: '/profil',
    			name: 'ProfilLearner',
    			component : ProfilLearner,
    		},

    	]
    }
]