use hdfc
db.customers.insertMany([{_id:1, name:"John", bal: 500}, {_id:2, name:"Mike", bal: 100}])

const session = db.getMongo().startSession();
session.startTransaction()
var custCollection = session.getDatabase("hdfc").customers
custCollection.updateOne({_id:1},{$inc:{bal:-100}})
custCollection.updateOne({_id:2},{$inc:{bal:100}})
session.commitTransaction()
session.endSession()
db.customers.find()

const session = db.getMongo().startSession();
session.startTransaction()
var custCollection = session.getDatabase("hdfc").customers
custCollection.updateOne({_id:1},{$inc:{bal:-100}})
// custCollection.updateOne({_id:2},{$inc:{bal:100}})
session.abortTransaction()
session.endSession()
db.customers.find()