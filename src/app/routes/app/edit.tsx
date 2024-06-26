// @ts-nocheck
import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from 'react-router-dom'
import { updateContact } from '../../contacts'
import { getContact } from '../../contacts'

export async function loader({ params }) {
  const contact = await getContact(params.contactId)
  if (!contact) {
    throw new Response('', {
      status: 404,
      statusText: 'Not Found',
    })
  }
  return { contact }
}
export async function action({ request, params }) {
  const formData = await request.formData()
  const first = formData.get('first')
  const last = formData.get('last')
  const updates = Object.fromEntries(formData)
  console.log(updates, request, params, '\n', first, last)
  await updateContact(params.contactId, updates)
  return redirect(`/contacts/${params.contactId}`)
}

export function Component() {
  const { contact } = useLoaderData()
  const navigate = useNavigate()
  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          defaultValue={contact.first}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          defaultValue={contact.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          defaultValue={contact.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button
          type="button"
          onClick={() => {
            navigate(-1)
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  )
}

Component.displayName = 'Edit'