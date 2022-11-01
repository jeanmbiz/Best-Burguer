import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;
