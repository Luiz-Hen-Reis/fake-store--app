import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.champagne};
    z-index: 99;

    p {
      text-align: center;
      font-size: 1.6rem;
      padding-top: ${theme.spacings.medium};
    }
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${theme.spacings.medium};

    h1 {
      text-transform: uppercase;
      font-size: 4rem;
      color: ${theme.colors.night};
    }
  `}
`;

export const CloseBtn = styled.div`
  ${({ theme }) => css`
    background-color: transparent;
    position: relative;
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    span {
        position: absolute;
        width: 4rem;
        height: 0.6rem;
        background-color: black;

        &:nth-child(1) {
            transform: rotate(-45deg);
        }

        &:nth-child(2) {
            transform: rotate(45deg);
        }
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
  `}
`;
