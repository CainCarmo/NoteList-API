import dotenv     from "dotenv"
import express    from "express"
import ConfigDB   from "./app/Models/Database/Connection/configDB.js"
import routesNote from "./app/Routes/noteRoutes.js"
import routesUser from "./app/Routes/userRoutes.js"

const Port: Number                = 8080
const Server: express.Application = express()

const Init = async (): Promise<void> => {

    dotenv.config()

    Server.use(
        express.json(),
        express.urlencoded({
            extended: true
        })
    )

    Server.use("/user", routesUser)
    Server.use("/note", routesNote)

    new ConfigDB()

    Server.listen(Port, () => {
        console.log(`Servidor rodando na porta: http://localhost:${Port}`)
    })
}

Init()