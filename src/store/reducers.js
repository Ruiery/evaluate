// store/reducers.js

import { assets } from "chain-registry/mainnet";

const initialAssets = assets.slice(0, 3).reduce((prev, curr) => {
  return [...prev, ...curr.assets];
}, []);

const initialState = {
  selectedChain: "osmosis",
  assets: initialAssets, // Will populate with initial assets later
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ASSET":
      return { ...state, assets: [...state.assets, ...action.payload] };
    case "SELECT_CHAIN":
      return { ...state, selectedChain: action.payload };
    // Other actions for different functionalities
    default:
      return state;
  }
};

export default reducer;
