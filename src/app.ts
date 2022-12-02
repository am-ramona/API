import express, { Express } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 4000

const Admin = mongoose.mongo.Admin;

app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri: string = `mongodb+srv://Ramona:1234@cluster0.azwzwo3.mongodb.net/Foodstyles_todos?retryWrites=true&w=majority`
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // poolSize: parseInt(process.env.POOL_SIZE!),
}
// mongoose.set("useFindAndModify", false)

mongoose
    .connect(uri, options as ConnectOptions)
    .then(() => {
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    })
    .catch(error => {
        throw error
    })

