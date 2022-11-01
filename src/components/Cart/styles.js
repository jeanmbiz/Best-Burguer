import styled from "styled-components";

export const CartSyled = styled.div`
  background-color: var(--color-grey-0);
  min-width: 365px;
  margin-top: 2rem;
  height: 100%;

  .cartHeader {
    background-color: var(--color-primary);
    height: 65px;
    border-radius: 5px 5px 0px 0px;

    display: flex;
    align-items: center;

    h2 {
      color: var(--color-background);
      font-weight: 700;
      font-size: 1.125rem;
      margin-left: 15px;
    }
  }

  @media screen and (max-width: 370px) {
    min-width: 300px;
  }
`;
