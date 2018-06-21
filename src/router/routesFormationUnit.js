/*Ce document contient toutes les routes de tuteur*/
import Accueil from '@/components/Composants_Generaux/Accueil'
import ProfilSFC from '@/components/FormationUnit/Profil/Profil'


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
    		
            {
                path: 'profil',
                name: 'ProfilSFC',
                component: ProfilSFC
            },


    	]
    }
]