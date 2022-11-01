import styled from "styled-components";

export const FullCartStyled = styled.ul`
  max-height: 320px;
  border-radius: 0px 0px 5px 5px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  overflow: auto;

  li {
    width: 95%;
    margin: 0 auto;
    height: 80px;
    display: flex;
    flex-direction: row;

    figure {
      background-color: var(--color-grey-20);
      border-radius: 5px;
      height: 100%;
      width: 80px;
      display: flex;
      justify-content: center;
    }

    figure img {
      width: 70px;
      height: 70px;
    }

    section {
      display: flex;
      justify-content: space-between;

      width: 77%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;

      h2 {
        font-weight: 700;
        font-size: 0.875rem;
      }

      h3 {
        font-size: 0.75rem;
        line-height: 16px;
        color: var(--color-grey-50);
      }
    }

    button {
      border: none;
      color: var(--color-grey-50);
      background-color: var(--color-grey-0);
      font-weight: 500;
      font-size: 0.75rem;
      line-height: 15px;
      height: 15px;
      margin-top: 15px;
      transition: 0.4s;

      &:hover {
        color: var(--color-grey-100);
        text-decoration: underline;
      }
    }
  }
`;

export const FooterCartStyled = styled.div`
  border-top: 2px solid var(--color-grey-20);
  height: 145px;
  width: 95%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;

    h2 {
      font-weight: 600;
      font-size: 0.875rem;
    }

    h3 {
      font-weight: 600;
      font-size: 0.875rem;
      color: var(--color-grey-50);
    }
  }

  button {
    width: 100%;
    height: 60px;

    border: 2px solid var(--color-grey-20);
    border-radius: 8px;

    font-weight: 600;
    font-size: 1rem;
    line-height: 19px;
    color: var(--color-grey-50);

    transition: 0.4s;

    &:hover {
      background-color: var(--color-grey-50);
      color: var(--color-grey-20);
    }
  }
`;
