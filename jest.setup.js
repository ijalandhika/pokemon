import "@testing-library/jest-dom";

// mock dynamic components
jest.mock("next/dynamic", () => () => {
  const DynamicComponent = () => null;
  DynamicComponent.displayName = "LoadableComponent";
  DynamicComponent.preload = jest.fn();

  return DynamicComponent;
});

// mock next router
jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {},
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
  }),
}));
