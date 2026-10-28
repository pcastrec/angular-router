# Enoncé
Vous devez développer une petite application Angular permettant à un utilisateur de se connecter à l’aide d’identifiants prédéfinis.

## L’application doit comporter trois pages :

### 1. Page d’accueil — /
- Accessible à tous les visiteurs.
- Afficher un message de bienvenue.
- Afficher un lien vers la page de connexion si l’utilisateur n’est pas authentifié.
- Afficher un lien vers le tableau de bord si l’utilisateur est authentifié.
### 2. Page de connexion — /login
- Accessible à tous les visiteurs.
- Afficher un formulaire avec deux champs : email et mot de passe.
- Vérifier les identifiants à l’aide du service d’authentification.
- En cas de succès, rediriger l’utilisateur vers le tableau de bord.
- En cas d’échec, afficher un message d’erreur.
### 3. Tableau de bord — /dashboard
- Accessible uniquement aux utilisateurs authentifiés.
- Afficher un message de bienvenue personnalisé.
- Afficher l’email de l’utilisateur connecté.
- Proposer un bouton de déconnexion.
- Après la déconnexion, rediriger vers la page d’accueil.


## Créer le service AuthService
Le service doit centraliser toute la logique d’authentification :
- Il doit permettre de :
- Vérifier les identifiants saisis.
- Enregistrer l’état de connexion de l’utilisateur.
- Savoir si un utilisateur est authentifié.
- Récupérer les informations de l’utilisateur connecté.
- Déconnecter l’utilisateur.

### Pour cet exercice, utilisez des identifiants fictifs définis directement dans le service :

| Champ | Valeur attendue |
| :-------------- | :----: |
| Email | admin@test.fr|
| Password | @ngul@r |