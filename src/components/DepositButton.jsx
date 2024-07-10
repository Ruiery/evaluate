import { useState } from "react";
import styled from "styled-components";
import DepositModal from "./DepositModal";

const Button = styled.button`
  background-color: rgb(245, 247, 251);
  color: rgb(105, 117, 132);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
`;

const DepositButton = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Deposit</Button>
      {showModal && (
        <DepositModal
          handleCloseModal={handleCloseModal}
          header={"Deposit ATOM"}
        ></DepositModal>
      )}
    </>
  );
};

export default DepositButton;
