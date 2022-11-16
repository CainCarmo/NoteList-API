import INote                 from "../Models/Entity/INote.js"
import NoteSchema            from "../Models/Database/Schemas/noteSchema.js"
import { Request, Response } from "express"

class NoteController
{
    public async NoteCreate(request: Request, response: Response): Promise<Response>
    {
        const Note: INote = request.body

        try
        {
            await NoteSchema.Note().create(Note)

            return response.status(200).json(Note)
        }
        catch(error)
        {
            return response.status(500).json({
                error: "Note create failed",
                message: `Error => ${error}`
            })
        }
    }

    public async NotesFind(request: Request, response: Response): Promise<Response>
    {
        try
        {
            const Notes = await NoteSchema.Note().find()
            
            return response.status(200).json(Notes)
        }
        catch(error)
        {
            return response.status(500).json({
                error: "Notes find failed",
                message: `Error => ${error}`
            })
        }
    }

    public async NoteFind(request: Request, response: Response): Promise<Response>
    {
        const NoteID = request.params.id

        try
        {
            const Note = NoteSchema.Note().findOne({_id: NoteID})

            return response.status(200).json(Note)
        }
        catch(error)
        {
            return response.status(500).json({
                error: "Note find failed",
                message: `Error => ${error}`
            })
        }
    }
    
    public async NoteModify?(request: Request, response: Response): Promise<Response>

    public async NoteDelete?(request: Request, response: Response): Promise<Response>
}

export default new NoteController()