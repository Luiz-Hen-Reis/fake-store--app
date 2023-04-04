import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: 124rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: auto;

    @media ${theme.media.medium} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${theme.media.xlarge} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${theme.media.xxlarge} {
      grid-template-columns: repeat(4, 1fr);
    }
  `}
`;
