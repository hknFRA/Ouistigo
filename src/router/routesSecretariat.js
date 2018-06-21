/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilTeacher from '@/components/Teacher/Profil/ProfilTeacher'

import AppSecretariat from '@/components/Secretariat/AppSecretariat'
import DonnerNote from '@/components/Secretariat/DonnerNote/DonnerNote'
import GererNotes from '@/components/Secretariat/DonnerNote/GererNotes'



export default [
	{
    	path: '/app-secretariat/',
    	name: 'AppSecretariat',
    	component : AppSecretariat,
    	children : [
    		{
    			path: '',
    			name: 'AccueilSecretariat',
    			component: Accueil
    		},
    		
    		{
    			path: '/profil',
    			name: 'ProfilTeacher',
    			component : ProfilTeacher,
    		},

            {
                path: 'donner-note',
                name: 'DonnerNote',
                component : DonnerNote,
            },

            {
                path: 'gerer-notes',
                name: 'GererNotes',
                component : GererNotes,
            },

    	]
    }
]