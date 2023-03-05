import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

import type { NoteType } from './types';

const notesSchema = new Schema<NoteType>({
    title: {
        type: String,
        required: [true, 'title is required!'],
        minlength: [4, 'Min 4!'],
    },
    text: {
        type: String,
        required: [true, 'text is required!'],
        minlength: [5, 'Min 5!'],
    },
    done: {
        type: Boolean,
        default: false,
    },
});

const Note = model<NoteType & Document>('Notes', notesSchema);
export { Note };
