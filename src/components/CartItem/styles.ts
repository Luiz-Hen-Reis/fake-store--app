import styled, { css } from "styled-components";

export const Container = styled.div`
    ${({ theme }) => css`
    background-color: ${theme.colors.mintCream};  

    img {
        mix-blend-mode: multiply;
        width: 8rem;
        height: 8rem;
    }
    `}
`;
