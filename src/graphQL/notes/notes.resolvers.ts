/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    httpGetAllNotes,
    httpAddNewNote,
    httpDeleteNote,
    httpGetNoteByQuery,
    httpUpdateNote,
} from './notes.model.js';

import type { NoteType, updateNoteType } from './notes.model.js';

const noteResolvers = {
    Query: {
        getAllNotes: async () => await httpGetAllNotes(),
        getNoteByQuery: async (_: any, { query }: { query: string }) => {
            return await httpGetNoteByQuery(query);
        },
    },
    Mutation: {
        addNewNote: async (_: any, { title, text, done }: NoteType) => {
            return await httpAddNewNote({ title, text, done });
        },
        deleteNote: async (_: any, { id }: { id: string }) => {
            return await httpDeleteNote(id);
        },
        updateNote: async (
            _: any,
            { title, text, done, id }: updateNoteType
        ) => {
            return await httpUpdateNote({ title, text, done, id });
        },
    },
};

export { noteResolvers };
