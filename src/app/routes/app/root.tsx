import {
  Outlet,
  Form,
  useLoaderData,
  redirect,
  NavLink,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getContacts, createContact } from "../../contacts";
import { RootState } from '../../store'

// auth
import { useSelector } from 'react-redux'

// @ts-ignore
export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function action() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export function Component() {
  // @ts-ignore
  const { contacts, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('q');

  const { isAuthenticated } = useSelector((state: RootState) => state.Auth);

  // @ts-ignore
  const changeHandler = (event) => {
		const isFirstSearch = q === null;
		console.log('isFirstSearch: ', isFirstSearch);
		submit(event.currentTarget.form, { replace: !isFirstSearch });
	};

  return (
    <>
      {
        isAuthenticated ?
          (
            <div id='sidebar'>
              <h1>React Router Contacts</h1>
              <div>
                <Form id='search-form' role='search'>
                  <input
                    id='q'
                    className={searching ? 'loading' : ''}
                    aria-label='Search contacts'
                    placeholder='Search'
                    type='search'
                    name='q'
                    defaultValue={q}
                    onChange={changeHandler}
                  />
                  <div id='search-spinner' aria-hidden hidden={!searching} />
                  <div className='sr-only' aria-live='polite'></div>
                </Form>
                <Form method='post'>
                  <button type='submit'>New</button>
                </Form>
              </div>
              <nav>
                {contacts.length ? (
                  <ul>
                    {contacts.map((contact: any) => (
                      <li key={contact.id}>
                        <NavLink
                          to={`contacts/${contact.id}`}
                          className={({ isActive, isPending }) =>
                            isActive ? 'active' : isPending ? 'peding' : ''
                          }
                        >
                          {contact.first || contact.last ? (
                            <>
                              {contact.first} {contact.last}
                            </>
                          ) : (
                            <i>No Name</i>
                          )}{' '}
                          {contact.favorite && <span>★</span>}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>
                    <i>No contacts</i>
                  </p>
                )}
              </nav>
            </div>
          ) :
          (
            <div id="sidebar">
              <h1>Login to manage accounts</h1>
              <nav>
                <ul>
                  <NavLink
                    to={`login`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    Login Page
                  </NavLink>
                  <NavLink
                    to={`register`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    Registration Page
                  </NavLink>
                </ul>
              </nav>

            </div>
          )
      }
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}


Component.displayName = "Root";
