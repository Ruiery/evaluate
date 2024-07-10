// actions.js
export const ADD_ASSET = "ADD_ASSET";
export const SET_SELECTED_CHAIN = "SET_SELECTED_CHAIN";

export const addAsset = (asset) => ({
  type: ADD_ASSET,
  payload: asset,
});

export const setSelectedChain = (chain) => ({
  type: SET_SELECTED_CHAIN,
  payload: chain,
});
