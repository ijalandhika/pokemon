import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { Providers } from "./provider";
import { useAppDispatch, useAppSelector } from "./hooks";
import { saveMonster } from "./features/savePokemon";

const TestComponent = () => {
  const pokemons = useAppSelector((state) => state.poketMonsterReducer.value);
  const dispatch = useAppDispatch();

  const onClickButton = (e) => {
    e.preventDefault();
    dispatch(saveMonster({ name: "testing", index: "0001" }));
  };

  return (
    <>
      <p>How many pokemons? {pokemons?.length ?? 0}</p>
      <button name="catcher" onClick={onClickButton}>
        Add new pokemons
      </button>
    </>
  );
};

describe("useHooks", () => {
  beforeEach(() => {
    render(
      <Providers>
        <TestComponent />
      </Providers>
    );
  });

  it("will have no pokemon at the first time", () => {
    expect(screen.getByText(/0/i)).toBeInTheDocument();
  });

  it("will get the pokemon when you are catch them", () => {
    const catchButton = screen.getByRole("button", {
      name: "Add new pokemons",
    });

    fireEvent(
      catchButton,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });
});
