require('dotenv').config()
import express, { Express } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

export const token = process.env.DATABASE_USERNAME
const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

const Admin = mongoose.mongo.Admin;

app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri: string = `mongodb+srv://Ramona:1234@cluster0.azwzwo3.mongodb.net/Foodstyles_todos?retryWrites=true&w=majority`
// const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // poolSize: parseInt(process.env.POOL_SIZE!),
}
// mongoose.set("useFindAndModify", false)

mongoose
    //   .connect(process.env.MONGO_URI!, options as ConnectOptions)
    .connect(uri, options as ConnectOptions)
    .then((MongooseNode) => {
    const nativeConnetion = MongooseNode.connections[0]
        /* I use the default nativeConnection object since my connection object uses a single hostname and port. Iterate here if you work with multiple hostnames in the connection object */
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )


        //now call the list databases function
        new Admin(nativeConnetion.db).listDatabases(function (err, results) {
            console.log(results)  //store results and use
        });

    })
    .catch(error => {
        throw error
    })


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Ramona:<password>@cluster0.azwzwo3.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
