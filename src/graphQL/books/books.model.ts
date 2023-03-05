import { ErrorHandler } from '../ErrorHandler.js';
import type { NoteType } from '../../models/Notes/notes.mongo.js';

import {
    createNewNote,
    dbGetAllNotes,
    deleteNote,
} from '../../models/Notes/notes.model.js';

async function httpGetAllNotes() {
    return await dbGetAllNotes();
}

async function httpAddNewNote({ title, text, done }: NoteType) {
    try {
        return await createNewNote({ title, text, done });
    } catch (err: any) {
        ErrorHandler(err);
    }
}

async function httpDeleteNote(id: string) {
    try {
        return deleteNote(id);
    } catch (err) {
        ErrorHandler(err);
    }
}

export { httpGetAllNotes, httpAddNewNote, httpDeleteNote };
export type { NoteType };
