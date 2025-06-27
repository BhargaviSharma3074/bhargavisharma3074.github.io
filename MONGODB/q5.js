db.employees.updateOne({},{$set:{}})

db.employees.updateMany({},{$set:{}})

db.employees.updateOne({email:"john@gmail.com"},{$set: {salary:2000}});

db.employees.updateMany({},{$set: {points: 1}})

db.employees.updateMany({department: "IT"},{$inc: {points: 1}}) // inc => increment

db.employees.updateMany({},{$rename: {points: "score"}})

db.employees.updateMany({},{$unset: {score: ""}}) // unset => removes the field

db.employees.updateMany({},{$push: {skills: "Java"}}) // push => sets value in array, unlike set

db.employees.updateMany({email: "john@gmail.com"},{$pull: {skills: "MERN"}}) 

db.employees.updateMany({email: "john@gmail.com"},{$pull: {skills: "MERN"}}) // pull => removes the value from array

db.employees.updateMany({email: "john@gmail.com"},{$addToSet: {skills: "MERN"}}) // addToSet => adds only if not present

db.employees.updateMany({email: "john@gmail.com"},{$pop: {skills: 1}}) // pop => last value gets removed

db.employees.updateMany({email: "john@gmail.com"},{$pop: {skills: -1}}) // first value is removed

db.employees.updateOne({email:"brian@gmail.com"},{$set: {name:"Brian"}}, {upsert: true}) // upsert => update + insert

db.employees.deleteOne({email: "brian@gmail.com"})

db.employees.deleteOne({department: "IT"})