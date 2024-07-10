import styled from "styled-components";
import { useSelector } from "react-redux";
import DepositButton from "./DepositButton.jsx";
import WithdrawButton from "./WithDrawButton.jsx";

const AssetListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const AssetItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3rem;
`;

const ImgItem = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
`;

const ImgItemHeader = styled.div`
  width: 80px;
  color: rgb(105, 117, 132);
`;

const AssetItem = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const AssetItemHeader = styled(AssetItem)`
  color: rgb(105, 117, 132);
`;

const AssetList = () => {
  const assets = useSelector((state) => state.assets);

  return (
    <AssetListWrapper>
      <AssetItemWrapper>
        <ImgItemHeader>Icon</ImgItemHeader>
        <AssetItemHeader>Asset</AssetItemHeader>
        <AssetItemHeader>Balance</AssetItemHeader>
        <AssetItemHeader>Button</AssetItemHeader>
      </AssetItemWrapper>
      {assets.map((asset) => (
        <AssetItemWrapper key={asset.coingecko_id}>
          <ImgItem>
            <img src={asset.logo_URIs.png}></img>
          </ImgItem>
          <AssetItem>{asset.name}</AssetItem>
          <AssetItem>{asset.base}</AssetItem>
          <AssetItem>
            <DepositButton />
            <WithdrawButton></WithdrawButton>
          </AssetItem>
        </AssetItemWrapper>
      ))}
    </AssetListWrapper>
  );
};

export default AssetList;
