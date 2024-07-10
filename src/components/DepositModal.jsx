import DepositForm from "./DepositForm";
import Modal from "./Modal";

const DepositModal = ({ handleCloseModal, header }) => {
  // This is a static component, so we don't need any interactivity here.
  return (
    <Modal handleCloseModal={handleCloseModal} header={header}>
      {/* Static content goes here */}
      <DepositForm handleCloseModal={handleCloseModal}></DepositForm>
    </Modal>
  );
};

export default DepositModal;
