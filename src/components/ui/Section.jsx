import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Container from "./Container";

const SectionVariants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    ACCENT: "accent",
    LIGHT: "light",
    DARK: "dark",
};

const StyledSection = styled.section`
    padding: ${({ theme, $padding }) => $padding || "4rem 0"};
    width: 100%;
    background-color: ${({ theme, $variant }) => {
        switch ($variant) {
            case SectionVariants.PRIMARY:
                return theme.colors.primary;
            case SectionVariants.SECONDARY:
                return theme.colors.secondary;
            case SectionVariants.ACCENT:
                return theme.colors.accent;
            case SectionVariants.LIGHT:
                return theme.colors.backgroundLight;
            case SectionVariants.DARK:
                return theme.colors.backgroundDark;
            default:
                return theme.colors.background;
        }
    }};
    color: ${({ theme, $variant }) => {
        switch ($variant) {
            case SectionVariants.PRIMARY:
            case SectionVariants.SECONDARY:
            case SectionVariants.ACCENT:
            case SectionVariants.DARK:
                return theme.colors.textLight;
            default:
                return theme.colors.text;
        }
    }};
`;

const MotionSection = motion(StyledSection);

const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2,
        },
    },
};

const Section = ({
    children,
    variant,
    padding,
    fluid = false,
    id,
    className,
    ...props
}) => {
    return (
        <MotionSection
            id={id}
            className={className}
            $variant={variant}
            $padding={padding}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={sectionVariants}
            {...props}>
            <Container fluid={fluid}>{children}</Container>
        </MotionSection>
    );
};

Section.Variants = SectionVariants;

export default Section;
