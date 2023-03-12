import './HomePage.style.scss'
import React from 'react'

import { useQuery, useMutation } from '@apollo/client'
import { GetAllNotes, AddNewNote, DeleteNote } from '../../Graphql/Query'

// components
import { Input, InputCheckBox, Button } from '../../components'

// type
import { initInputState } from './type'
import type { inputStateType, inputActionType } from './type'

const formHandler = (state: inputStateType, newState: inputActionType) => ({
  ...state,
  ...newState,
})

export const HomePage = () => {
  const [deleteId, setDeleteId] = React.useState<string>()
  const [input, dispatch] = React.useReducer(formHandler, initInputState)
  const [addNewNote, { loading, data, error }] = useMutation(AddNewNote, {
    variables: input,
    refetchQueries: () => [
      {
        query: GetAllNotes,
      },
    ],
  })
  const [deleteNote, {}] = useMutation(DeleteNote, {
    variables: { deleteNoteId: deleteId },
    refetchQueries: () => [
      {
        query: GetAllNotes,
      },
    ],
  })

  const {
    loading: queryLoading,
    data: queryData,
    error: queryError,
  } = useQuery(GetAllNotes)

  const handleChangeValue = (event: React.SyntheticEvent) => {
    const { name, value } = event.target as HTMLInputElement

    dispatch({ [name]: value })
  }

  const submitHandler = (evt: React.SyntheticEvent) => {
    evt.preventDefault()
    addNewNote()
  }

  React.useEffect(() => {
    if (deleteId) deleteNote()
  }, [deleteId])

  return (
    <div className="wrapper-home-page">
      <Input
        placeholder="Title .."
        value={input.title}
        name="title"
        onChange={handleChangeValue}
      />
      <Input
        placeholder="Description .."
        value={input.text}
        name="text"
        onChange={handleChangeValue}
      />
      <InputCheckBox
        name="done"
        checked={input.done}
        onChange={({ currentTarget }) =>
          dispatch({ [currentTarget.name]: currentTarget.checked })
        }
      />
      <Button label="Submit" onClick={submitHandler} />
      {error ? <p>Oh no! {error.message}</p> : null}
      {queryLoading ? <p>Loading Notes</p> : null}
      {queryError ? <p>Error Notes</p> : null}
      <div className="card">
        {queryData
          ? queryData?.getAllNotes.map((note: any, i: number) => {
              return (
                <div className="note-card text-color" key={i}>
                  <p>Title: {note.title}</p>
                  <p>Note: {note.text}</p>
                  <p>Done: {note.done.toString()}</p>
                  <Button
                    label="Delete"
                    onClick={() => setDeleteId(note._id)}
                  />
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}
