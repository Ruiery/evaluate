import "./App.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import AssetList from "./components/AssetList.jsx";
import AddAssetButton from "./components/AddAssetButton.jsx";
function App() {
  return (
    <Provider store={store}>
      <AssetList />
      <AddAssetButton />
    </Provider>
  );
}

export default App;
