import { render, screen } from "@testing-library/react";

import App from "./App";

test("renders a component", () => {
  render(<App />);
  const el = screen.getByText(/Hello/i);
  expect(el).toBeInTheDocument();
});

test("snapshots a component", () => {
  expect(render(<App />).asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="App"
      >
        <h1>
          Hello, React!
        </h1>
        <img
          src="url:<rootDir>/static/logo192.png"
        />
      </div>
    </DocumentFragment>
  `);
});
