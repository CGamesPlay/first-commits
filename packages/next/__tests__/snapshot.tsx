import React from "react";
import renderer from "react-test-renderer";
import Index from "../pages/index";

it("renders homepage unchanged", () => {
  const tree = renderer.create(<Index />).toJSON();
  const foo: number = true;
  expect(tree).toMatchSnapshot();
});
