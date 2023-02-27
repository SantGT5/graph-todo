import { Schema, model } from 'mongoose';
import type { Document } from 'mongoose';

type NoteType = {
    title: string;
    text: string;
    done: boolean;
};

const notesSchema = new Schema<NoteType>({
    title: {
        type: String,
        required: [true, 'title is required!'],
        min: [4, 'Min 4!'],
    },
    text: {
        type: String,
        required: [true, 'text is required!'],
    },
    done: {
        type: Boolean,
        default: false,
    },
});

const Note = model<NoteType & Document>('Notes', notesSchema);
export { Note };
