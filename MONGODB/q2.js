// db.users.insertOne({name: "Bhargavi", age: 21})
// db.users.find()
// db.users.findOne()
// db.users.drop()

db.users.insertOne({name: "Anirudh", age: 25});

db.users.insertMany([
    {name: "Keshav", age: 23},
    {name: "Madhav", age: 24},
    {name: "Ananya", age: 21},
    {name: "Aradhya", age: 23},
]);