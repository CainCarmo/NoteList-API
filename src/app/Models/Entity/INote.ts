import { Schema } from "mongoose"

type Categories = {
    Name: String
    Color: String
}

interface INote
{
    Title: String
    Description: String
    Author: Schema.Types.ObjectId
    Categories: Array<Categories>
    Note: String
    CreateAt: Date
}

export default INote