#!/bin/bash
set -e

## Création d'une Base de données et d'une collection par défaut
## basées sur les valeurs renseignées dans les variables d'environnement

mongosh -- "$MONGO_INITDB_DATABASE" <<EOF
    
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var admin = db.getSiblingDB($MONGO_INITDB_DATABASE);

    admin.auth(rootUser, rootPassword);

    var user = '$MONGO_INITDB_USERNAME';
    var passwd = '$MONGO_INITDB_PASSWORD';

    db.createUser({user: user, pwd: passwd, roles: ["dbOwner"]});

    var defaultCollection = '$MONGO_INITDB_COLLECTION'; 

    db.createCollection(defaultCollection, {capped:false});

    db.getCollection(defaultCollection).insertOne({});
 
EOF