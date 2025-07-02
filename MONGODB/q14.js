// use Admin
db.createUser({user:"admin",pwd:"admin",roles:[{role:"root",db:"admin"}]})

//.cfg file in Server/8.0/bin
security:
    authentication:enabled

// mongosh --username admin --authenticationDatabase

db.createUser({user:"user1",pwd:"1234", roles:[{role:"read", db:"mern"}]})
// mongosh --username user1 --authenticationDatabase mern



