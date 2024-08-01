Un fichier est un "Component" s'il est réutilisable à d'autres endroits de l'application
Sinon c'est une "Scene"

Une "Scene" peut contenir une autre "Scene" si elle rempli la même condition, on garde alors la même structure
Il faut cependant que la "Scene" enfant ne soit utiliser QUE dans son composant parent, s'il est utiliser ailleurs elle doit être mise au même niveau.