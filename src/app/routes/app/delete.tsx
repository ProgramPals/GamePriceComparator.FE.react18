// @ts-nocheck
import {
  redirect,
} from "react-router-dom";
import { deleteContact } from "../../contacts";

// delete action
export async function action({ request, params }) {
  await deleteContact(params.contactId);
  return redirect(`/`);
}
