// Create folder dbshards and then create sub folders: conf, rconf, s1, s1r, s2, s2r
// Start Config servers on separate tabs of command prompt


mongod --configsvr --port 27018 --replSet cf --dbpath C:\Users\itsbh\Desktop\dbshards\conf
mongod --configsvr --port 27019 --replSet cf --dbpath C:\Users\itsbh\Desktop\dbshards\rconf
rs.initiate({_id:'cf',members:[{_id:0,host:'localhost:27018'},{_id:1,host:'localhost:27019'}]})


mongod --shardsvr --port 27020 --replSet rs1 --dbpath C:\Users\itsbh\Desktop\dbshards\s1
mongod --shardsvr --port 27021 --replSet rs1 --dbpath C:\Users\itsbh\Desktop\dbshards\s1r
rs.initiate({_id:'rs1',members:[{_id:0,host:'localhost:27020'},{_id:1,host:'localhost:27021'}]})


mongod --shardsvr --port 27022 --replSet rs2 --dbpath C:\Users\itsbh\Desktop\dbshards\s2
mongod --shardsvr --port 27023 --replSet rs2 --dbpath C:\Users\itsbh\Desktop\dbshards\s2r
rs.initiate({_id:'rs2',members:[{_id:0,host:'localhost:27022'},{_id:1,host:'localhost:27023'}]})

mongos --configdb cf/localhost:27018,localhost:27019 --port 27050
sh.addShard("rs1/localhost:27020,localhost:27021")
sh.addShard("rs2/localhost:27022,localhost:27023")
sh.status()
use mydatabase
sh.enableSharding("mydatabase")
sh.shardCollection("mydatabase.customers", { _id: 1 })
sh.status()
sh.getShardedDataDistribution() //run this after running the node js file (q.13.mjs)

