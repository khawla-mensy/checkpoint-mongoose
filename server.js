const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const Person = require("./models/Person");

connectDB();

// Person.create([
//     { name: "medali", age: 36, favoriteFoods: ["cupcake", "burritos"] },
//     { name: "ahmed", age: 35, favoriteFoods: ["salade", "burritos"] },
//     {
//         name: "yosra",
//         age: 29,
//         favoriteFoods: ["kouskous", "salade", "burritos"],
//     },
//     { name: "john", age: 1, favoriteFoods: ["pomme"] },
// ])
//     .then((doc) => console.log(doc))
//     .catch((err) => console.log(err));

//search database with user.find

//Person.find().then((doc) => console.log(doc));

//Person.findOne({ favoriteFoods: "kouskous" }).then((doc) => console.log(doc));
// Person.findById("6086b7e0aac9f524bc62f889").then((doc) => console.log(doc));

//Perform Classic Updates by Running Find, Edit, then Save

// Person.findOne({ name: "khawla" })
//     .then((user) => {
//         user.favoriteFoods.push("humberger");
//         user.save();
//     })
//     .catch((err) => console.log(err));

//Perform New Updates on a Document Using model.findOneAndUpdate()

// Person.findOneAndUpdate(
//     { name: "khawla" },
//     { $set: { name: "NOUR" } }
// ).then((doc) => console.log(doc));

//find by id and remove

// Person.findByIdAndRemove({ _id: "6086b7e0aac9f524bc62f889" }).then((doc) =>
//     console.log(doc)
// );

//Delete Many Documents with model.remove()

// Person.deleteMany({ name: "medali" }).then((doc) => console.log(doc));

Person.find({ favoriteFoods: "burritos" })

    .sort({ name: "asc" })
    .limit(2)
    .select({ age: 0 })
    .then((doc) => console.log(doc));

const port = 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});
