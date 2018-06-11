/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilTeacher from '@/components/Teacher/Profil/ProfilTeacher'

import AppTeacher from '@/components/Teacher/AppTeacher'

export default [
	{
    	path: '/AppTeacher/',
    	name: 'AppTeacher',
    	component : AppTeacher,
    	children : [
    		{
    			path: '/profil',
    			name: 'ProfilTeacher',
    			component : ProfilTeacher,
    		},

    	]
    }
]