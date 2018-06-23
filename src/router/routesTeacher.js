/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilTeacher from '@/components/Teacher/Profil/ProfilTeacher'

import AppTeacher from '@/components/Teacher/AppTeacher'

export default [
	/*C'est la route parent*/
    /*On ne lui donne pas de nom afin de ne pas pouvoir l'utiliser*/
    {
    	path: '/app-teacher/',
    	component : AppTeacher,
    	children : [
    		
            {
    			path: '',
    			name: 'AccueilTeacher',
    			component: Accueil
    		},
    		
    		{
    			path: 'profil',
    			name: 'ProfilTeacher',
    			component : ProfilTeacher,
    		},

    	]
    }
]