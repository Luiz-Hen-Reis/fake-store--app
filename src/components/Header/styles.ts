import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.mintCream};
    max-width: 124rem;
    padding: 0 ${theme.spacings.small};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    margin: auto;
    position: sticky;
    top: 0;
    z-index: 99;

    img {
      margin: ${theme.spacings.medium};
    }

    @media ${theme.media.medium} {
      margin: ${theme.spacings.small} auto;
    }

    @media ${theme.media.xlarge} {
      margin: ${theme.spacings.huge} auto;
    }
  `}
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    width: 50rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;

    input {
      flex: 2;
      height: 3rem;
      border-radius: ${theme.borderRadius};
      padding: ${theme.spacings.xsmall};
      outline: none;
      border: 2px solid ${theme.colors.night};
    }

    span {
      flex: 1;
      padding: ${theme.spacings.xsmall};
      margin: ${theme.spacings.medium} ${theme.spacings.xhuge};
      text-align: center;
      font-size: ${theme.spacings.small};
      border: 2px solid ${theme.colors.night};
      border-radius: ${theme.borderRadius};
      color: ${theme.colors.imperialRed};
      cursor: pointer;
    }
  `}
`;
