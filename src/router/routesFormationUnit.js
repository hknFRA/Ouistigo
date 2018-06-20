/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilTeacher from '@/components/Teacher/Profil/ProfilTeacher'

import AppSecretariat from '@/components/Secretariat/AppSecretariat'
import DonnerNote from '@/components/Secretariat/DonnerNote/DonnerNote'
import GererNotes from '@/components/Secretariat/DonnerNote/GererNotes'



import AppFormationUnit from '@/components/FormationUnit/AppFormationUnit'


export default [
	{
    	path: '/app-sfc/',
    	name: 'AppFormationUnit',
    	component : AppFormationUnit,
    	children : [
    		{
    			path: '',
    			name: 'AccueilSFC',
    			component: Accueil
    		},
    		
    		

    	]
    }
]