/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    httpGetAllNotes,
    httpAddNewNote,
    httpDeleteNote,
    httpGetNoteByQuery,
} from './notes.model.js';
import type { NoteType } from './notes.model.js';

const noteResolvers = {
    Query: {
        getAllNotes: () => httpGetAllNotes(),
        getNoteByQuery: (_: any, { query }: { query: string }) => {
            return httpGetNoteByQuery(query);
        },
    },
    Mutation: {
        addNewNote: (_: any, { title, text, done }: NoteType) => {
            return httpAddNewNote({ title, text, done });
        },
        deleteNote: (_: any, { id }: { id: string }) => {
            return httpDeleteNote(id);
        },
    },
};

export { noteResolvers };
