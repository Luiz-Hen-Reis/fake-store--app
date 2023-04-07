import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
    background-color: ${theme.colors.mintCream};
    padding: ${theme.spacings.medium};
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;  
    margin: ${theme.spacings.xsmall} 0;
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    
    img {
        mix-blend-mode: multiply;
        width: 8rem;
        height: 8rem;
    }
    
    button {
        all: unset;
        width: 3rem;
        height: 3rem;
        border: 1px solid ${theme.colors.night};
        display: flex;
    }
    `}
`;
export const RightSide = styled.div`
    ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.medium};
    
    button {
        all: unset;
        width: 3rem;
        height: 3rem;
        border: 1px solid ${theme.colors.night};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${theme.borderRadius};
    }

    span {
        margin: 0 ${theme.spacings.xsmall};
    }
    `}
`;

