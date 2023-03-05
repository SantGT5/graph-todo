import {
    httpGetAllNotes,
    httpAddNewNote,
    httpDeleteNote,
} from './books.model.js';
import type { NoteType } from './books.model.js';

const noteResolvers = {
    Query: {
        getAllNotes: () => httpGetAllNotes(),
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
