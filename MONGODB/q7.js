db.employees.aggregate([
    {$match: {department: "IT"}},
    {$project: {name:1, salary:1}}
]) // equivalent of find(), with additional features

db.employees.aggregate([
    {$match: {department: "IT"}},
    {$project: {name:1, salary:1}},
    {$sort: {salary :-1}},
    {$limit: 2}
]) 

db.employees.aggregate([
    {$group: {_id: "department", total :{$sum: "$salary"}}}
])

db.employees.aggregate([
    {$project: {name:0}},
]) 

db.employees.aggregate([
    {$project: {empName:"$name"}},
]) 

db.employees.aggregate([
    {$project: {name:1, salary:1, bonus:{$multiply:["$salary",2]}}},
]) 

// display name email and salary for all the it employees
db.employees.aggregate({$match:{department:"IT"}},{$project:{_id:0,name:1, salary:1,email:1}})

// display annual salary of all employees
db.employees.aggregate({$project:{_id:0,name:1, salary:{$multiply:["$salary",12]}}})

// display salary that is gt than 3000 and show ctc instead of salary
db.employees.aggregate({$match:{salary: {$gt: 3000}}},{$project:{_id:0,ctc:"$salary"}})