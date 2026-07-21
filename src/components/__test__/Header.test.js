import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
it("Should render header component with a login button ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  // query
  // this one way find login button
  //const loginButton = screen.getByRole("button");

  // you have a multiple button but you want  specification button we can pass extra parameter

  const loginButton = screen.getByRole("button", { name: "Login" });

  // another way

  // const loginButton = screen.getByText("Login");

  // Assertion
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with a Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  // query
  const cartItems = screen.getByText("Cart - ( 0 items)");

  // asertion

  expect(cartItems).toBeInTheDocument();
});

it("Should render header component with a Cart Items ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  // query
  const cartItems = screen.getByText(/Cart/);

  // asertion

  expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>,
  );

  // query
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  // asertion

  expect(logoutButton).toBeInTheDocument();
});
