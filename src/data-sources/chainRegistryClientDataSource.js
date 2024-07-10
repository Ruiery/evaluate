// src/data-sources/chainRegistryClientDataSource.js

import DataSource from "./index";
import { ChainRegistryClient } from "@chain-registry/client";

class ChainRegistryClientDataSource extends DataSource {
  constructor(config) {
    super(config);
  }

  async fetchAssets(chain) {
    // Implement fetch logic from @chain-registry/client
    const client = new ChainRegistryClient({
      chainNames: ["osmosis"],
    });

    // chain info, assets and ibc data will be downloaded dynamically by invoking fetchUrls method
    await client.fetchUrls();
    // get chain data
    // const chain = client.getChain('osmosis');
    // get asset list
    const assetList = client.getChainAssetList(chain);
    // get ibc data
    // const ibcData = client.getChainIbcData('osmosis');
    // // get asset list (including ibc assets)
    // const generatedAssetList = client.getGeneratedAssetLists('osmosis');
    return assetList.assets;
  }
}

export default ChainRegistryClientDataSource;
