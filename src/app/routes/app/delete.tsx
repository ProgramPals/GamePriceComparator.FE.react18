// @ts-nocheck
import {
  redirect,
} from 'react-router-dom'
import { deleteContact } from '../../contacts'

// delete action
export async function action({ params }) {
  await deleteContact(params.contactId)
  return redirect(`/`)
}
