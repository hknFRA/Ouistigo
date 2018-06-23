/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import Profil from '@/components/Secretariat/Profil/Profil'

import AppSecretariat from '@/components/Secretariat/AppSecretariat'
import DonnerNote from '@/components/Secretariat/DonnerNote/DonnerNote'
import GererNotes from '@/components/Secretariat/DonnerNote/GererNotes'



export default [
	
    /*C'est la route parent*/
    /*On ne lui donne pas de nom afin de ne pas pouvoir l'utiliser*/    
    {
    	path: '/app-secretariat/',
    	component : AppSecretariat,
    	children : [
    		{
    			path: '',
    			name: 'AccueilSecretariat',
    			component: Accueil
    		},
    		
    		{
    			path: 'profil',
    			name: 'ProfilSecretariat',
    			component : Profil,
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