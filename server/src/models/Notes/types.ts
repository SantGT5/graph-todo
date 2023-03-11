type createNewNoteType = {
    title: string;
    text: string;
    done?: boolean;
};

type NoteType = {
    title: string;
    text: string;
    done: boolean;
};

type updateNoteType = {
    title: string;
    text: string;
    done: boolean;
    id: string;
};

export type { createNewNoteType, updateNoteType, NoteType };
