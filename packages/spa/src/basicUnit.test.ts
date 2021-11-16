/**
 * @jest-environment node
 */
test("it works", () => {
  expect(1 + 1).toBe(2);
});

// Since this module doesn't import or export anything, it isn't a module. So
// we export nothing to make it a module, so that typescript doesn't complain
// about isolatedModules.
export {};
