// src/data-sources/chainRegistryDataSource.js

import DataSource from "./index";
import { assets } from "chain-registry";

class ChainRegistryDataSource extends DataSource {
  async fetchAssets(chain) {
    // Implement fetch logic from chain-registry

    const assetList = assets.find(({ chain_name }) => chain_name === chain);
    return assetList.assets;
  }
}

export default ChainRegistryDataSource;
