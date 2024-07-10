import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CustomSelect from "./CustomSelect"; // Assuming this is the ComboBox component from your storybook
import Modal from "./Modal";
import dataSource from "../config";

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 15rem;
`;

const AddAssetButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState([]);
  const dispatch = useDispatch();
  const selectedChain = useSelector((state) => state.selectedChain);
  const [selectList, setSelectList] = useState([]);
  const selectAsset = (selectedAsset) => {
    setSelectedAsset(selectedAsset);
  };
  const handleAddAsset = (selectedAsset) => {
    dispatch({ type: "ADD_ASSET", payload: selectedAsset });
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Handle form submission here
    handleAddAsset(selectedAsset);
    handleCloseModal();
  };

  return (
    <>
      <Button
        onClick={async () => {
          setShowModal(true);
          const list = await dataSource.fetchAssets(selectedChain);
          setSelectList(list);
        }}
      >
        Add Asset
      </Button>
      {showModal && (
        <Modal header={"Add Asset"} handleCloseModal={handleCloseModal}>
          <FormContainer>
            <CustomSelect onSelect={selectAsset} options={selectList} />
            <Button onClick={handleSubmit}>Submit</Button>
          </FormContainer>
        </Modal>
      )}
    </>
  );
};

export default AddAssetButton;
