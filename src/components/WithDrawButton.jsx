import styled from "styled-components";

const Button = styled.button`
  background-color: rgb(245, 247, 251);
  color: rgb(105, 117, 132);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
`;

const WithdrawButton = () => {
  return <Button>Withdraw</Button>;
};

export default WithdrawButton;
