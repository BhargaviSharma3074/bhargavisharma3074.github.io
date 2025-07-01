db.employees.aggregate([
    {$project:{
        _id:0,
        name: 1,
        salary: 1,
        grade: {
            $cond:[
                {$gte:["$salary",2000]},
                "Grade A",
                "Grade B"
            ]}
    }}
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name: 1,
        salary: 1,
        grade: {
            $cond:{
                if: {$gt:["$salary",2000]}, 
                then: "Grade A", 
                else: "Grade B"}
    }}
}])

db.employees.updateMany(
    {$department:"IT"},
    {$strSalary: "2500"}
)

db.employees.updateMany({department:"IT"},{$set:{strSalary:"2500"}})

db.employees.updateMany({department:{$ne:"IT"}},{$set:{strSalary:"1000"}})

db.employees.aggregate([
    {$project:{
        _id:0, 
        name:1, 
        department:1, 
        sal:{$convert:{input:"$strSalary", to:"int"}}}},
        {$group:{_id:"$department", total:{$sum:"$sal"}}}
    ]
)

db.employees.aggregate([
    {$project:{
        _id:0, 
        name:1, 
        department:1, 
        sal:{$convert:{input:"$strSalary", to:"int"}}}
    },
    {$group:{_id:"$department", total:{$sum:"$sal"}}},
    {$out:"depWiseSalary"}
    ]
)

    db.createView("depWiseSalaryView", "employees",[
        {$project:{
            _id:0, 
            name:1, 
            salary:1,
            department:1,
            sal:{$convert:{input:"$strSalary", to:"int"}}}},
            {$group:{_id:"$department", total:{$sum:"$sal"}}},
    ]
)
    

db.employees.find({name:{$regex:"cathy"}})
   

// mongodump -d mern -o C:\Users\itsbh\Desktop\MDB_Backup
// mongorestore -d mern C:\Users\itsbh\Desktop\MDB_Backup\mern

db.employees.find({name:{$regex:"cathy"}})
db.employees.find({name:{$regex:"Cathy",$options:"i"}}) //for case sensitivity
db.employees.find({name:{$regex:"^C"}}) //starts with C
db.employees.find({name:{$regex:"y$"}}) //ends with y
