import { Note } from './schema.js';

import type { createNewNoteType, updateNoteType } from './types.js';

async function dbGetAllNotes() {
    return await Note.find({}, { __v: 0 });
}

async function createNewNote({ title, text, done }: createNewNoteType) {
    try {
        return await Note.create({ title, text, done });
    } catch (err) {
        console.error(err);
    }
}

async function deleteNote(id: string) {
    return Note.deleteOne({ _id: id });
}

async function getNoteByQuery(query: string) {
    if (!query.trim().length) return [];

    return await Note.find(
        { title: { $regex: `${query.trim()}`, $options: 'i' } },
        { __v: 0 }
    );
}

async function updateNote({ title, text, done, id }: updateNoteType) {
    const note = { title: title.trim(), text: text.trim(), done };

    return await Note.findByIdAndUpdate(
        { _id: id },
        { ...note },
        { upsert: true, returnDocument: 'after' }
    );
}

export { dbGetAllNotes, createNewNote, deleteNote, getNoteByQuery, updateNote };
