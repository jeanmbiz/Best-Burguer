import styled from "styled-components";

export const HeaderStyled = styled.div`
  background-color: var(--color-grey-0);

  width: 100vw;
  min-height: 80px;

  box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);

  .mainContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;

    figure img {
      width: 160px;
    }

    div {
      border: 2px solid var(--color-grey-20);
      border-radius: 8px;
      background-color: white;
      width: 365px;
    }

    div input {
      width: 68%;
      height: 60px;
      padding: 0px 10px 0px 15px;
      background-color: var(--color-background);
      border: none;

      ::placeholder {
        color: var(--color-grey-20);
      }
    }

    div button {
      background-color: var(--color-primary);
      border: 2px solid var(--color-primary);
      border-radius: 8px;
      padding: 0px 20px;
      height: 40px;

      color: var(--color-background);
      font-weight: 500;
      font-size: 0.875rem;
      transition: 0.4s;

      &:hover {
        background-color: var(--color-primary-50);
        border: 2px solid var(--color-primary-50);
      }
    }
  }

  @media screen and (max-width: 560px) {
    .mainContainer {
      flex-direction: column;
    }

    div {
      max-width: 300px;
    }

    div button {
      max-width: 94px;
      padding: 0px;
      background-color: azure;
    }
  }
`;
