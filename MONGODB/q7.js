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
    {$project: {name:1, bonus:{$multiply:["$salary",2]}}},
]) 