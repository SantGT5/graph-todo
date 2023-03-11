const APOLLO_SERVER = 'http://localhost:4000';

const GetAllNotes = {
    query: `query GetAllNotes {
        getAllNotes {
          title
          text
          _id
        }
      }`,
};

const AddNewNote = (title: 'My title', text: 'My text') => {
    return {
        query: `mutation AddNewNote($title: String!, $done: Boolean, $text: String!) {
      addNewNote(title: $title, done: $done, text: $text) {
        title
        text
        done
      }
    }`,
        variables: {
            title,
            text,
            done: true,
        },
    };
};

const DeleteNote = (id: string) => {
    return {
        query: `mutation DeleteNote($deleteNoteId: ID!) {
    deleteNote(id: $deleteNoteId) {
      _id
    }
  }`,
        variables: {
            deleteNoteId: id,
        },
    };
};

export { APOLLO_SERVER, GetAllNotes, AddNewNote, DeleteNote };
