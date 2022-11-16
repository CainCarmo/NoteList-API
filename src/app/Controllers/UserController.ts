import IUser                 from "../Models/Entity/IUser.js"
import UserSchema            from "../Models/Database/Schemas/userSchema.js"
import { Request, Response } from "express"

class UserController
{
    public async UserCreate(request: Request, response: Response): Promise<Response>
    {
        const User: IUser = request.body

        try
        {
            await UserSchema.User().create(User)

            return response.json(User)
        }
        catch(error)
        {
            return response.status(500).json({
                error: "Create user failed",
                message: `Error => ${error}`
            })
        }
    }

    public async UserFind?(request: Request, response: Response): Promise<Response>

    public async UserModify?(request: Request, response: Response): Promise<Response>

    public async UserDelete?(request: Request, response: Response): Promise<Response>
}

export default new UserController()