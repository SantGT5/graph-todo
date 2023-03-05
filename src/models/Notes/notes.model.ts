import { Note } from './notes.mongo.js';

type createNewNoteType = {
    title: string;
    text: string;
    done?: boolean;
};

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

export { dbGetAllNotes, createNewNote, deleteNote };
