import { gql } from '@apollo/client'

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

export { GetAllNotes }