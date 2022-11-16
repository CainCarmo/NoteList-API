import mongoose from "mongoose"
import bcrypt   from "bcryptjs"

class UserSchema
{
    public User()
    {
        const UserSchema = new mongoose.Schema({
            Name: {
                type: String,
                required: true
            },
            Surname: {
                type: String,
                required: true
            },
            Email: {
                type: String,
                unique: true,
                required: true
            },
            Password: {
                type: String,
                required: true,
                select: false
            },
            BirthDate: {
                type: Date,
                required: true
            },
            CreateAt: {
                type: Date,
                default: Date.now()
            }
        })

        UserSchema.pre("save", async function(next) {
            const hashPassword = await bcrypt.hash(this.Password, 12)

            this.Password = hashPassword

            next()
        })

        return mongoose.model("User", UserSchema)
    }
}

export default new UserSchema()