import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";

test("renders NavBar", () => {
    render(
        <Router>
        <NavBar />
        </Router>
    );

    // screen.debug works like console.log it can be placed wherever you want and
    // will render the components in the terminal
    // it requires an import as well
    // screen.debug();

    const signInLink = screen.getByRole('link', {name: 'Sign in'})
    expect(signInLink).toBeInTheDocument();
    })

    // this test needs to async as we need to await changes in the document

test("renders link to the user profile for a logged in user", async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );

    // As we need to target elements that aren’t there on mount, because they appear as a result of an async
    // function, we should use one of the find query methods with the await keyword.

    const profileAvatar = await screen.findByText("Profile");
    expect(profileAvatar).toBeInTheDocument();

    })


test("renders sign in and sign up buttons again on log out ", async () => {
    render(
        <Router>
            <CurrentUserProvider>
                <NavBar />
            </CurrentUserProvider>
        </Router>
    );


    const signOutLink = await screen.findByRole('link', {name: 'Sign out'})
    fireEvent.click(signOutLink)

    const signInLink = await screen.findByRole('link', {name: 'Sign in'});
    const signUpLink = await screen.findByRole('link', {name: 'Sign up'});

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
    })