use("CRUD")

db.createCollection("courses")

// db.courses.insertOne({
//     name: "asir",
//     price: 0,
//     assignment: 12,
//     project: 45
// })

// db.courses.insertMany([
//     { name: "c#", price: 220, assignment: 11, project: 45 },
//     { name: "c", price: 20, assignment: 10, project: 41 },
//     { name: "ruby", price: 340, assignment: 16, project: 35 },
//     { name: "node", price: 30, assignment: 22, project: 15 },
//     { name: "python", price: 10, assignment: 20, project: 25 },
// ])

// console.log(db.courses.find({price: 0}))

db.courses.updateOne({price:0}, {$set:{price:100}})