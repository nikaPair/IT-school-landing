import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.layout.containerWidth};
    margin-right: auto;
    margin-left: auto;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    box-sizing: border-box;

    ${({ $fluid }) =>
        $fluid &&
        `
    max-width: 100%;
  `}

    ${({ theme }) => theme.mediaQueries.sm} {
        padding-right: 1rem;
        padding-left: 1rem;
    }
`;

export const Container = ({ children, fluid = false, ...props }) => {
    return (
        <StyledContainer $fluid={fluid} {...props}>
            {children}
        </StyledContainer>
    );
};

export default Container;
