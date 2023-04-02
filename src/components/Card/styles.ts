import styled, { css } from "styled-components";

export const Container = styled.article`
    ${({ theme }) => css`
        
    `}
`;

export const ImgContainer = styled.article`
    ${({ theme }) => css`
        width: 10rem;
        height: 10rem;

        img {
            width: inherit;
            height: inherit;
        }
    `}
`;