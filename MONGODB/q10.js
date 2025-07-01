// create a folder mongo-replica and sub folders data1 data2 and data3

// mongod -replSet rs1 -logpath "C:\Users\itsbh\Desktop\mongo-replica\data1\1.log" --dbpath "C:\Users\itsbh\Desktop\mongo-replica\data1" --port 27018
// mongod -replSet rs1 -logpath "C:\Users\itsbh\Desktop\mongo-replica\data2\2.log" --dbpath "C:\Users\itsbh\Desktop\mongo-replica\data2" --port 27019
// mongod -replSet rs1 -logpath "C:\Users\itsbh\Desktop\mongo-replica\data3\3.log" --dbpath "C:\Users\itsbh\Desktop\mongo-replica\data3" --port 27020

// mongosh --port 27018

// rs.initiate({_id:"rs1", members:[{_id:0, host:"127.0.0.1:27018"},{_id:1, host:"127.0.0.1:27019"}, {_id:2, host: "127.0.0.1:27020"}]})

// rs.status()
// rs.config()

// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// use mytestdb
db.customers.insertOne({name:"John"})

//to shutdown
// go to primary server
// use admin
// db.shutdownServer()