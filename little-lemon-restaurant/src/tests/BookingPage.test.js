import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./BookingPage"; // Assuming this is your component

test("Renders the Reserve Table heading and transitions to Choose Date", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  // Check if the "Reserve Table" heading is rendered
  const headingElement = screen.getByText("Reserve Table");
  expect(headingElement).toBeInTheDocument();

  // Simulate clicking the "Reserve" button
  const reserveButton = screen.getByRole("button", { name: "Reserve" });
  fireEvent.click(reserveButton);

  // Check if the new heading "Choose Date" is rendered
  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});

test("Initializes and updates available times correctly", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );

  // Simulate clicking the "Reserve" button
  const reserveButton = screen.getByRole("button", { name: "Reserve" });
  fireEvent.click(reserveButton);

  // Check if the dropdown options are rendered
  const timeOptions = screen.queryAllByRole("option");
  expect(timeOptions.length).toBeGreaterThan(0);

  // Simulate selecting an option in the dropdown
  const timeDropdown = screen.getByLabelText("Choose Time");
  fireEvent.change(timeDropdown, { target: { value: timeOptions[0].value } });

  // Ensure the selected option is correct
  expect(timeDropdown.value).toBe(timeOptions[0].value);
});