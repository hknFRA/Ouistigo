/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilTeacher from '@/components/Teacher/Profil/ProfilTeacher'

import AppTeacher from '@/components/Teacher/AppTeacher'

export default [
	{
    	path: '/app-teacher/',
    	name: 'AppTeacher',
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