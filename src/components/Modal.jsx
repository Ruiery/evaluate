import styled from "styled-components";

const ModalMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.4); /* 透明度为40%的黑色 */
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  padding: 20px;
`;
const Container = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 28rem;
  margin: 0 auto;
  background: white;
  min-width: 20rem;
  min-height: 20rem;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  h2 {
    margin-top: 0px;
  }
`;

const CloseButton = styled.button`
  padding: 0px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: blue;
  }
`;
const Modal = ({ children, handleCloseModal, header }) => {
  // This is a static component, so we don't need any interactivity here.
  return (
    <ModalMask>
      <ModalContainer>
        <Container>
          <Header>
            <h2>{header}</h2>
            <CloseButton aria-label="Close" onClick={handleCloseModal}>
              <img
                aria-hidden="true"
                alt="close"
                src="https://openui.fly.dev/openui/24x24.svg?text=✖"
              />
            </CloseButton>
          </Header>
          {children}
        </Container>
        {/* Static content goes here */}
      </ModalContainer>
    </ModalMask>
  );
};

export default Modal;
