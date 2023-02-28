import { ErrorHandler } from '../ErrorHandler.js';
import { Note } from '../../models/Notes/notes.mongo.js';
import type { NoteType } from '../../models/Notes/notes.mongo.js';

async function getAllNotes() {
    return await Note.find({}, { __v: 0 });
}

async function addNewNote({ title, text, done }: NoteType) {
    try {
        const createNote = await Note.create({ title, text, done });

        return createNote;
    } catch (err: any) {
        ErrorHandler(err);
    }
}

export { getAllNotes, addNewNote };
export type { NoteType };
