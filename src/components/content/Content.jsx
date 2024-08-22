import { H2 } from "../h2/h2";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
// eslint-disable-next-line react/prop-types
export const Content = ({ children, error }) => {
  return error ? (
    <Div>
      <H2>Ошибка</H2>
      <div>{error}</div>
    </Div>
  ) : (
    children
  );
};
