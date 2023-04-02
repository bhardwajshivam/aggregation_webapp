import { state } from "react";
import styled from "styled-components";

const WrapperHeader = styled.div`
  overflow: hidden;
  background: #5e2df5;
  padding: 20px 10px;
  display: flex;
  justify-content: flex-start;
  font-weight: 700;
  font-size: 1.5rem;
  color: #ffff;
`;

const Header = () => {
  return <WrapperHeader>Nitesh</WrapperHeader>;
};
export default Header;
