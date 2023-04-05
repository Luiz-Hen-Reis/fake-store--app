import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    min-height: 40rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.mintCream};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    padding: ${theme.spacings.large};
    transition: ease .2s;

    &:hover {
        transform: translateY(-.5rem);
    }

    img {
      mix-blend-mode: multiply;
      width: 15rem;
      height: 15rem;
    }

    b {
        font-size: ${theme.font.sizes.medium};
    }

    h1 {
        font-size: ${theme.font.sizes.small};
        line-height: 1.2;
        margin-bottom: 2px;
    }

    p {
        font-size: 1.4rem;
    }
    }

    button {
        all: unset;
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.imperialRed};
        text-transform: uppercase;
        border: 1px solid ${theme.colors.imperialRed};
        padding: ${theme.font.sizes.xsmall};
        border-radius: ${theme.borderRadius};
        margin-top: 1rem;
        cursor: pointer;
        transition: ease .2s;

        &:hover {
            transform: translateY(-.5rem);
            box-shadow: ${theme.boxShadow};
            color: ${theme.colors.mintCream};
            background-color: ${theme.colors.imperialRed};
        }

        &:active {
            transform: translateY(-.2rem);
        }
    }
  `}
`;

export const ImgContainer = styled.div`
  ${({ theme }) => css`
    width: 15rem;
    height: 15rem;

    
  `}
`;
