/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Index, { links } from "./index";

describe("Index", () => {
  it("includes the link tag", () => {
    expect(links()).toEqual([{ rel: "stylesheet", href: "styles/index.css" }]);
  });

  it("render a heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: /first commit remix/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
