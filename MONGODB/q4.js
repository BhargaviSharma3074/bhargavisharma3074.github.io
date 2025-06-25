db.employees.find({department:  "IT"});

db.employees.find({department:  {$eq: "IT"}});

db.employees.find({salary:  {$gt: 2000}});

db.employees.find({salary:  {$gte: 3000}});

db.employees.find({salary:  {$lt: 2000}});

db.employees.find({salary:  {$lte: 2000}});

db.employees.find({salary:  {$ne: 2000}});

db.employees.find({salary:  {$ne: 2000}},{_id: 0,name:1});

db.employees.find(
    {
    salary:  {$ne: 2000}, 
    department:{$eq: "IT"}
    },
    {name: 1}
);

db.employees.find({$and:[{salary: {$gt: 2000}, department: {$eq:"IT"}},{name:1}]})

db.employees.find({salary:  {$gt: 1000}, department:{$eq: "IT"}}, {name: 1});

db.employees.find({salary:  {$gt: 2000}, department:{$eq: "IT"}}, {name: 1}).limit(1);

db.employees.find({$and:[{salary: {$gt: 3000}, department: {$eq: "IT"}}]});


// display the top two highest paid employees
db.employees.find().sort({salary:-1}).limit(2)

// display name and email add of one name
db.users.find({name:"Bhargavi"},{_id:0,email:1,name:1})