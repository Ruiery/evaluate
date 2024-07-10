// src/config.js

import ChainRegistryDataSource from "./data-sources/chainRegistryDataSource";
// import ChainRegistryClientDataSource from "./data-sources/chainRegistryClientDataSource";
// TypeError: Cannot read properties of undefined (reading 'from')
// 数据源报错，先隐藏

const dataSourceConfig = {
  type: "chainRegistry", // or 'chainRegistryClient'
};

let dataSource;

if (dataSourceConfig.type === "chainRegistry") {
  dataSource = new ChainRegistryDataSource();
} else if (dataSourceConfig.type === "chainRegistryClient") {
  // dataSource = new ChainRegistryClientDataSource();
}

export default dataSource;
