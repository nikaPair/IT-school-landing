import React from "react";
import styled from "styled-components";

const TypographyVariants = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    SUBTITLE1: "subtitle1",
    SUBTITLE2: "subtitle2",
    BODY1: "body1",
    BODY2: "body2",
    CAPTION: "caption",
    OVERLINE: "overline",
};

const getFontSize = (variant, theme) => {
    switch (variant) {
        case TypographyVariants.H1:
            return theme.typography.fontSizes["5xl"];
        case TypographyVariants.H2:
            return theme.typography.fontSizes["4xl"];
        case TypographyVariants.H3:
            return theme.typography.fontSizes["3xl"];
        case TypographyVariants.H4:
            return theme.typography.fontSizes["2xl"];
        case TypographyVariants.H5:
            return theme.typography.fontSizes.xl;
        case TypographyVariants.H6:
            return theme.typography.fontSizes.lg;
        case TypographyVariants.SUBTITLE1:
            return theme.typography.fontSizes.xl;
        case TypographyVariants.SUBTITLE2:
            return theme.typography.fontSizes.lg;
        case TypographyVariants.BODY1:
            return theme.typography.fontSizes.md;
        case TypographyVariants.BODY2:
            return theme.typography.fontSizes.sm;
        case TypographyVariants.CAPTION:
            return theme.typography.fontSizes.xs;
        case TypographyVariants.OVERLINE:
            return theme.typography.fontSizes.xs;
        default:
            return theme.typography.fontSizes.md;
    }
};

const getFontWeight = (variant, weight, theme) => {
    if (weight) {
        return theme.typography.fontWeights[weight];
    }

    switch (variant) {
        case TypographyVariants.H1:
        case TypographyVariants.H2:
        case TypographyVariants.H3:
            return theme.typography.fontWeights.bold;
        case TypographyVariants.H4:
        case TypographyVariants.H5:
        case TypographyVariants.H6:
            return theme.typography.fontWeights.semibold;
        case TypographyVariants.SUBTITLE1:
        case TypographyVariants.SUBTITLE2:
            return theme.typography.fontWeights.medium;
        case TypographyVariants.OVERLINE:
            return theme.typography.fontWeights.medium;
        default:
            return theme.typography.fontWeights.normal;
    }
};

const getLineHeight = (variant, theme) => {
    switch (variant) {
        case TypographyVariants.H1:
        case TypographyVariants.H2:
            return theme.typography.lineHeights.tight;
        case TypographyVariants.H3:
        case TypographyVariants.H4:
        case TypographyVariants.H5:
        case TypographyVariants.H6:
            return theme.typography.lineHeights.snug;
        default:
            return theme.typography.lineHeights.normal;
    }
};

const getElement = (variant) => {
    switch (variant) {
        case TypographyVariants.H1:
            return "h1";
        case TypographyVariants.H2:
            return "h2";
        case TypographyVariants.H3:
            return "h3";
        case TypographyVariants.H4:
            return "h4";
        case TypographyVariants.H5:
            return "h5";
        case TypographyVariants.H6:
            return "h6";
        case TypographyVariants.SUBTITLE1:
        case TypographyVariants.SUBTITLE2:
            return "h6";
        case TypographyVariants.BODY1:
        case TypographyVariants.BODY2:
            return "p";
        case TypographyVariants.CAPTION:
            return "span";
        case TypographyVariants.OVERLINE:
            return "span";
        default:
            return "p";
    }
};

const StyledTypography = styled.p`
    margin: 0;
    color: ${({ color, theme }) => color || "inherit"};
    font-size: ${({ variant, theme }) => getFontSize(variant, theme)};
    font-weight: ${({ variant, weight, theme }) =>
        getFontWeight(variant, weight, theme)};
    line-height: ${({ variant, theme }) => getLineHeight(variant, theme)};
    text-align: ${({ align }) => align || "inherit"};
    text-transform: ${({ variant }) =>
        variant === TypographyVariants.OVERLINE ? "uppercase" : "none"};
    letter-spacing: ${({ variant }) =>
        variant === TypographyVariants.OVERLINE ? "0.1em" : "normal"};
    margin-bottom: ${({ gutterBottom }) => (gutterBottom ? "0.5em" : "0")};
`;

export const Typography = ({
    variant = TypographyVariants.BODY1,
    weight,
    color,
    align,
    gutterBottom = false,
    children,
    ...props
}) => {
    const element = getElement(variant);

    return (
        <StyledTypography
            as={element}
            variant={variant}
            weight={weight}
            color={color}
            align={align}
            gutterBottom={gutterBottom}
            {...props}>
            {children}
        </StyledTypography>
    );
};

Typography.Variants = TypographyVariants;

export default Typography;
