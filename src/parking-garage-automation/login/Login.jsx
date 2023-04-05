import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Login } from "../../parking-garage-automation/login/Login";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Login component", () => {
  test("renders login form with username and password inputs", () => {
    render(<Login />);
    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("submits the form with valid credentials and redirects to modules page for role 1 or 2 user", async () => {
    const fakeToken = "fakeToken123";
    const fakeUser = {
      id: 1,
      username: "testuser",
      role: 1,
    };

    const initialState = {
      users: {
        loading: false,
        load: true,
        token: "",
        users: [],
      },
    };
    const store = mockStore(initialState);

    const loginThunkMock = jest.fn().mockResolvedValue({
      type: "login/fulfilled",
      payload: {
        token: fakeToken,
        user: fakeUser,
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    expect(loginThunkMock).toHaveBeenCalledWith({
      username: "testuser",
      password: "testpassword",
    });

    await waitFor(() => {
      expect(window.location.replace).toHaveBeenCalledWith("/modules");
    });
  });
});
