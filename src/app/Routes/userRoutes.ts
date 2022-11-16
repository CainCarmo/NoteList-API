import { Router }     from "express"
import UserController from "../Controllers/UserController.js"

const routesUser: Router = Router()

routesUser.post("/register", UserController.UserCreate)

export default routesUser