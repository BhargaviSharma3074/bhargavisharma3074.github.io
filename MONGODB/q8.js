

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