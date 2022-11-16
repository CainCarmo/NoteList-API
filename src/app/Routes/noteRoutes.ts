import { Router }     from "express"
import NoteController from "../Controllers/NoteController.js"

const routesNote: Router = Router()

routesNote.post("/create", NoteController.NoteCreate)
routesNote.get ("/", NoteController.NotesFind)
routesNote.get ("/:id", NoteController.NoteFind)

export default routesNote