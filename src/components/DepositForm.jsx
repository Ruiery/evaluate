import styled from "styled-components";

const DisplayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: gray;
  border-radius: 0.5rem;
  padding: 0.5rem;

  div {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: black;
  }
`;

const AmountDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
`;

const ImageDisplay = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-right: 1px solid gray;
`;

const ATOMDisplay = styled.div`
  width: 125px;
  border-left: 1px solid gray;
  padding: 0.5rem;
`;

const Input = styled.input`
  background: transparent;
  color: black;
  outline: none;
  flex: 1;
  padding: 0 0.5rem;
  border: 0px;
`;

const AmountButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const AmountButton = styled.button`
  background: gray;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  margin-right: 0.5rem;
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  background: gray;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const TransferButton = styled.button`
  width: 100%;
  background: black;
  color: white;
  padding: 0.5rem 0;
  border-radius: 0.75rem;
  margin-bottom: 0.5rem;
  &:hover {
    background: rgba(59, 130, 246, 0.8);
  }
`;

const CancelButton = styled.button`
  color: gray;
  width: 100%;
  padding: 0.5rem 0;
  border-radius: 0.75rem;
  &:hover {
    color: blue;
  }
`;

const DepositForm = ({ handleCloseModal }) => {
  return (
    <>
      <div>
        <DisplayContainer>
          <span>From Cosmos Hub</span>
          <span>To Osmosis</span>
        </DisplayContainer>
        <InputContainer>
          <InputWrapper>
            <div>
              <img
                aria-hidden="true"
                alt="Cosmos Hub"
                src="https://openui.fly.dev/openui/24x24.svg?text=🌌"
              />
            </div>
            <span>atom1xy5y...m6wwz9a</span>
          </InputWrapper>
          <span>→</span>
          <InputWrapper>
            <div>
              <img
                aria-hidden="true"
                alt="Osmosis"
                src="https://openui.fly.dev/openui/24x24.svg?text=🧪"
              />
            </div>
            <span>osmo1xy5y...w9a</span>
          </InputWrapper>
        </InputContainer>
      </div>
      <div>
        <DisplayContainer>
          <span>Select amount</span>
          <span>Available 2 ATOM</span>
        </DisplayContainer>
        <AmountDisplay>
          <ImageDisplay>
            <img
              aria-hidden="true"
              alt="ATOM"
              src="https://openui.fly.dev/openui/24x24.svg?text=⚛️"
            />
          </ImageDisplay>
          <Input value="2" />
          <ATOMDisplay>
            <span>ATOM ≈ $1,013</span>
          </ATOMDisplay>
        </AmountDisplay>
        <AmountButtonContainer>
          <AmountButton>Max</AmountButton>
          <AmountButton>1/2</AmountButton>
          <AmountButton>1/3</AmountButton>
        </AmountButtonContainer>
      </div>
      <TimeContainer>
        <img
          aria-hidden="true"
          alt="time"
          src="https://openui.fly.dev/openui/24x24.svg?text=⏱️"
        />
        <span style={{ marginLeft: "0.5rem" }}>Estimated time: 20 seconds</span>
      </TimeContainer>
      <TransferButton>Transfer</TransferButton>
      <CancelButton onClick={handleCloseModal}>Cancel</CancelButton>
    </>
  );
};

export default DepositForm;
