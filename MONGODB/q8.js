

db.posts.insertMany([{_id:"p1", post:"Post 1"}, {_id:"p2", post: "Post 2"}])

db.comments.insertMany([
    {
        _id:"c1",
        pid: "p1",
        comment: "This is Comment 1 of Post 1"
    },
    {
        _id:"c2",
        pid: "p1",
        comment: "This is Comment 2 of Post 1"
    },
    {
        _id:"c3",
        pid: "p2",
        comment: "This is Comment 1 of Post 2"
    },
    {
        _id:"c4",
        pid: "p2",
        comment: "This is Comment 2 of Post 2"
    },
    {
        _id:"c5",
        pid: "p2",
        comment: "This is Comment 3 of Post 2"
    }
])

db.posts.aggregate({
    $lookup:
    {
        from: "comments",
        localField: "_id",
        foreignField: "pid",
        as: "comments"
    }
},
    {$project: {post:1, "comments.comment":1}}
)

db.posts.aggregate({
    $lookup:
    {
        from:"comments",
        localField:"_id", 
        foreignField: "pid", 
        as: "comments"
    }
},
{$unwind: "$comments"}, 
{$project: {post:1, "comments.comment":1}
})



db.marks.insertOne({name:"John",term:"t1",subject:"Maths",marks:95})

db.marks.insertMany([
    {
        name:"John",
        term:"t2",
        subject:"Maths",
        marks:80
    },
    {
        name:"John",
        term:"t3",
        subject:"Maths",
        marks:70
    },
    {
        name:"John",
        term:"t1",
        subject:"Science",
        marks:50
    },
    {
        name:"John",
        term:"t2",
        subject:"Science",
        marks:60
    },
    {
        name:"John",
        term:"t3",
        subject:"Science",
        marks:90
    },
    {
        name:"Cathy",
        term:"t1",
        subject:"Maths",
        marks:91
    },
    {
        name:"Cathy",
        term:"t2",
        subject:"Maths",
        marks:81
    },
    {
        name:"Cathy",
        term:"t3",
        subject:"Maths",
        marks:71
    },
    {
        name:"Cathy",
        term:"t1",
        subject:"Science",
        marks:51
    },
    {
        name:"Cathy",
        term:"t2",
        subject:"Science",
        marks:61
    },
    {
        name:"Cathy",
        term:"t3",
        subject:"Science",
        marks:91
    }
])

db.marks.find({},{_id:0, name:1, term:1, subject:1, marks:1})

db.marks.find({},{_id:0, name:1, term:1, subject:1, marks:1}).sort({name:1})

db.marks.find({},{_id:0, name:1, term:1, subject:1, marks:1}).sort({name:1, term:1})

db.marks.find({},{_id:0, name:1, term:1, subject:1, marks:1}).sort({ term:1})

db.marks.aggregate([
    {$group: {_id:"$name",total:{$sum:"$marks"}}}
])

db.marks.aggregate([{$group:{_id:{name:"$name",subject:"$subject"}, total: {$sum: "$marks"}}}])


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
    

