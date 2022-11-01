import styled from "styled-components";

export const UlStyled = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  gap: 2rem;

  @media screen and (max-width: 700px) {
    flex-wrap: nowrap;
    flex-direction: row;
    overflow: scroll;
    width: 100%;
  }
`;

export const ProductsStyled = styled.li`
  width: calc(92% / 3);
  height: 350px;
  background-color: var(--color-background);
  border: 2px solid var(--color-grey-20);
  border-radius: 5px;
  max-width: 300px;

  figure {
    max-width: 100%;
    height: 150px;
    background-color: var(--color-grey-0);

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-height: 100%;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    margin-left: 20px;
    gap: 15px;
  }

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
  }

  h3 {
    font-size: 0.875rem;
    color: var(--color-grey-50);
    line-height: 17px;
  }

  h4 {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--color-primary);
  }

  button {
    width: 105px;
    height: 40px;

    border: 2px solid var(--color-primary);
    border-radius: 8px;
    background-color: var(--color-primary);

    color: var(--color-background);
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 17px;

    &:hover {
      border: 2px solid var(--color-primary-50);
      background-color: var(--color-primary-50);
    }
  }

  @media screen and (max-width: 1200px) {
    width: calc(92% / 2);
  }

  @media screen and (max-width: 950px) {
    width: 92%;
  }

  @media screen and (max-width: 700px) {
    min-width: 300px;
  }

  @media screen and (max-width: 340px) {
    min-width: 280px;
  }
`;
