// src/data-sources/index.js

class DataSource {
  constructor(config) {
    this.config = config;
  }

  async fetchAssets() {
    throw new Error('Method "fetchAssets" must be implemented.');
  }
}

export default DataSource;
