// @ts-nocheck
import {
  redirect,
} from 'react-router-dom'
import { deleteContact } from '@/features/contacts/api/contacts'

// delete action
export async function action({ params }) {
  await deleteContact(params.contactId)
  return redirect(`/`)
}
