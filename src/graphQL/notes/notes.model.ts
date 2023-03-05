import type { NoteType, updateNoteType } from './type.js';
import { ErrorHandler } from '../ErrorHandler.js';

import {
    createNewNote,
    dbGetAllNotes,
    deleteNote,
    getNoteByQuery,
    updateNote,
} from '../../models/Notes/model.js';

async function httpGetAllNotes() {
    return await dbGetAllNotes();
}

async function httpAddNewNote({ title, text, done }: NoteType) {
    try {
        return await createNewNote({ title, text, done });
    } catch (err) {
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

async function httpGetNoteByQuery(query: string) {
    try {
        return await getNoteByQuery(query);
    } catch (err) {
        ErrorHandler(err);
    }
}

async function httpUpdateNote({ title, text, done, id }: updateNoteType) {
    try {
        const data = await updateNote({ title, text, done, id });

        return data;
    } catch (err) {
        ErrorHandler(err);
    }
}

export {
    httpGetAllNotes,
    httpAddNewNote,
    httpDeleteNote,
    httpGetNoteByQuery,
    httpUpdateNote,
};
export type { NoteType, updateNoteType };
