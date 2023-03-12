import { gql } from '@apollo/client'
import { useQuery, useMutation } from '@apollo/client'

const GetAllNotes = gql`
  query GetAllNotes {
    getAllNotes {
      title
      text
      _id
      done
    }
  }
`

const AddNewNote = gql`
  mutation AddNewNote($title: String!, $text: String!, $done: Boolean) {
    addNewNote(title: $title, text: $text, done: $done) {
      title
      text
      done
      _id
    }
  }
`

const DeleteNote = gql`
  mutation DeleteNote($deleteNoteId: ID!) {
    deleteNote(id: $deleteNoteId) {
      _id
    }
  }
`

export { GetAllNotes, AddNewNote, DeleteNote }
