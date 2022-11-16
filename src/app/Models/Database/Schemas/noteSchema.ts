import mongoose from "mongoose"

class NoteSchema
{
    public Note()
    {
        const NoteSchema = new mongoose.Schema({
            Title: {
                type: String,
                required: true
            },
            Description: {
                type: String
            },
            Author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            Categories: {
                type: [{
                    Name: String,
                    Color: String
                }],
                default: undefined
            },
            Note: {
                type: String,
                required: true
            },
            CreateAt: {
                type: Date,
                default: Date.now()
            }
        })

        return mongoose.model("Note", NoteSchema)
    }
}

export default new NoteSchema()