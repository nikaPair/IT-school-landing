import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ButtonVariants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    OUTLINE: "outline",
    TEXT: "text",
};

const ButtonSizes = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
};

const StyledButton = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    transition: all ${({ theme }) => theme.transitions.fast};
    cursor: pointer;
    font-family: inherit;
    border: none;

    ${({ $variant, theme }) => {
        switch ($variant) {
            case ButtonVariants.PRIMARY:
                return `
          background-color: ${theme.colors.primary};
          color: white;
          
          &:hover {
            background-color: ${theme.colors.secondary};
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
            case ButtonVariants.SECONDARY:
                return `
          background-color: ${theme.colors.secondary};
          color: white;
          
          &:hover {
            opacity: 0.9;
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
            case ButtonVariants.OUTLINE:
                return `
          background-color: transparent;
          color: ${theme.colors.primary};
          border: 2px solid ${theme.colors.primary};
          
          &:hover {
            background-color: ${theme.colors.primary};
            color: white;
            transform: translateY(-2px);
            box-shadow: ${theme.shadows.md};
          }
        `;
            case ButtonVariants.TEXT:
                return `
          background-color: transparent;
          color: ${theme.colors.primary};
          padding: 0;
          
          &:hover {
            color: ${theme.colors.secondary};
            text-decoration: underline;
          }
        `;
            default:
                return "";
        }
    }}

    ${({ $size, $variant }) => {
        if ($variant === ButtonVariants.TEXT) {
            return "";
        }

        switch ($size) {
            case ButtonSizes.SMALL:
                return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `;
            case ButtonSizes.MEDIUM:
                return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `;
            case ButtonSizes.LARGE:
                return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `;
            default:
                return "";
        }
    }}
  
  ${({ $fullWidth }) =>
        $fullWidth &&
        `
    width: 100%;
  `}
  
  &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none !important;
        box-shadow: none !important;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.3);
    }
`;

const MotionButton = motion(StyledButton);

export const Button = ({
    children,
    variant = ButtonVariants.PRIMARY,
    size = ButtonSizes.MEDIUM,
    fullWidth = false,
    disabled = false,
    onClick,
    ...props
}) => {
    return (
        <MotionButton
            $variant={variant}
            $size={size}
            $fullWidth={fullWidth}
            disabled={disabled}
            onClick={onClick}
            whileHover={!disabled ? { scale: 1.02 } : {}}
            whileTap={!disabled ? { scale: 0.98 } : {}}
            {...props}>
            {children}
        </MotionButton>
    );
};

Button.Variants = ButtonVariants;
Button.Sizes = ButtonSizes;

export default Button;
