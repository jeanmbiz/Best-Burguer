import styled from "styled-components";

export const EmptyCartStyled = styled.div`
  height: 158px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;

  h2 {
    font-weight: 700;
    font-size: 1.125rem;
  }

  h3 {
    font-size: 0.875rem;
    color: var(--color-grey-50);
  }
`;
