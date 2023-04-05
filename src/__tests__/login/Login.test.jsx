import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from '../../app.js';
import { Login } from "../../parking-garage-automation/login/Login";
import LoginComponent from "../../parking-garage-automation/login/index.jsx";

describe("Login", () => {
  it("renders the login page", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginComponent />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  

});
