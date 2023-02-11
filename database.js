const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://Meweli:123MongoDB@flittercluster.gfolj5q.mongodb.net/?retryWrites=true&w=majority")
        .then(() => {
            console.log("database connection succesful");
        })
        .catch(() => {
            console.log("database connection error " + err);
        })
    }
}

module.exports = new Database();