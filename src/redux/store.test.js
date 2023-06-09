import { store } from "./store";

describe("Store", () => {
  let p;
  let pa;
  beforeEach(() => {
    const { getState } = store;
    const { poketMonsterReducer, pokemonApi } = getState();
    p = poketMonsterReducer;
    pa = pokemonApi;
  });

  it("Initial value is an empty array", () => {
    expect(p.value).toEqual([]);
  });

  it("will have a reducer to call the API ", () => {
    expect(pa.config.reducerPath).toEqual("pokemonApi");
  });
});
