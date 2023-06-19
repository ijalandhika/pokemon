import usePokemon from "./usePokemon";

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Providers } from "../redux/provider";
import { useAppDispatch } from "../redux/hooks";
import { saveMonster } from "../redux/features/savePokemon";

const TestComponent = () => {
  const pokemonData = {
    name: "fearow",
  };
  const { isOwned } = usePokemon(pokemonData);
  /**
   *
   * button --> dispatch new pokemon
   *
   * 1. render detail pokemon but not owned --> isOwned = false
   *
   * 2. fire event --> dispatch new pokemon
   *  --> isOwned = true
   *
   */

  const dispatch = useAppDispatch();

  const onClickButton = (e) => {
    e.preventDefault();
    dispatch(saveMonster({ name: "fearow", index: "0001" }));
  };

  return (
    <>
      <p>{isOwned ? "owned" : "not owned"}</p>
      <button name="addnew" onClick={onClickButton}>
        Add new pokemons
      </button>
    </>
  );
};

describe("useHooks", () => {
  let cont;
  beforeEach(() => {
    const { container } = render(
      <Providers>
        <TestComponent />
      </Providers>
    );
    cont = container;
  });

  it("will not owned", () => {
    expect(screen.getByText(/not owned/i)).toBeInTheDocument();
    expect(cont).toMatchSnapshot();
  });

  it("will owned the pokemon after catch", () => {
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

    expect(screen.getByText(/owned/i)).toBeInTheDocument();
  });
});
