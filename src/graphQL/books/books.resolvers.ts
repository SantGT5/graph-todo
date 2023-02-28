import { getAllNotes, addNewNote } from './books.model.js';
import type { NoteType } from './books.model.js';

const noteResolvers = {
    Query: {
        notes: () => getAllNotes(),
    },
    Mutation: {
        addNewNote: (_: any, { title, text, done }: NoteType) => {
            return addNewNote({ title, text, done });
        },
    },
};

export { noteResolvers };
