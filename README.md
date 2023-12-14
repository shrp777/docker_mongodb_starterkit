# Docker + MongoDB + Python Starter Kit

## Installation

- Créez les fichiers .env sur la base des fichiers .env.example fournis (./app/.env et ./mongo_db/.env),
- Les valeurs des variables d'environnement prennent effet au démarrage des services Docker. Si vous modifiez les valeurs des variables d'environnement, stoppez les services et redémarrez-les,
- En cas de modification du projet Python, reconstruire l'image Docker via `docker compose up --build`

- Consultez les logs du service _app_ pour vérifier le bon fonctionnement de votre application Python

## Connexion à la base de données MongoDB

```SH
mongosh admin --username <user> --password <password> --port <port>
```

- Exemple :

```SH
mongosh admin --username us3r --password ap4ssw0rd --port <port>
```

## Sauvegarde de la base de données MongoDB

```SH
docker exec -i <docker-mongodb-service> /usr/bin/mongodump --username <user> --password <password> --authenticationDatabase admin --db <db> --archive > ./mongodb.dump
```

- Exemple :

```SH
docker exec -i mongo_db /usr/bin/mongodump --username us3r --password ap4ssW0rd --authenticationDatabase admin --db books_db --archive > ./mongodb.dump
```

## Restauration de la base de données MongoDB

```SH
docker exec -i <docker-mongodb-service> /usr/bin/mongorestore --username <user> --password <password> --authenticationDatabase admin --nsInclude="<database_name>.*" --archive < ./mongodb.dump
```

- Exemple :

```SH
docker exec -i mongo_db /usr/bin/mongorestore --username us3r --password ap4ssW0rd --authenticationDatabase admin --nsInclude="books_db.*" --archive < ./mongodb.dump
```

## Crédits

Collection "books" (./mongo_db/import/data.json) : <https://www.mongodbtutorial.org/>

--

!["Logotype Shrp"](https://shrp.dev/images/shrp.png)

__Alexandre Leroux__  
_Enseignant / Formateur_  
_Développeur logiciel web & mobile_

Nancy (Grand Est, France)

<https://shrp.dev>
