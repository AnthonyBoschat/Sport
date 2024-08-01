Un fichier est une "Scenes" s'il n'est pas réutilisable à d'autres endroits de l'application
Sinon, c'est un "Components"

Un "Component" peut contenir une autre "Component" si il rempli la même condition, on garde alors la même structure
Il faut cependant que le "Component" enfant ne soit utiliser QUE dans son composant parent, s'il est utiliser ailleurs il doit être mis au même niveau.