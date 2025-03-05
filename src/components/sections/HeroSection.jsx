import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 6rem 0;
    width: 100%;

    @media (max-width: 1200px) {
        flex-direction: column;
        text-align: center;
        gap: 3rem;
    }
`;

const HeroContent = styled(motion.div)`
    flex: 1;
    max-width: 600px;

    @media (max-width: 1200px) {
        max-width: 100%;
        order: 2;
    }
`;

const HeroTitle = styled(Typography)`
    margin-bottom: 1.5rem;

    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const HeroSubtitle = styled(Typography)`
    margin-bottom: 2.5rem;
`;

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;

    @media (max-width: 1200px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const StatsContainer = styled.div`
    display: flex;
    gap: 2.5rem;
    margin-top: 4rem;

    @media (max-width: 1200px) {
        justify-content: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1.5rem;
        align-items: center;
    }
`;

const StatItem = styled.div`
    display: flex;
    flex-direction: column;
`;

const StatValue = styled(Typography)`
    color: ${({ theme }) => theme.colors.primary};
`;

const HeroImageContainer = styled(motion.div)`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative;

    @media (max-width: 1200px) {
        justify-content: center;
        order: 1;
        width: 100%;
        max-width: 500px;
    }
`;

const HeroImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.lg};
`;

const BackgroundDecoration = styled.div`
    position: absolute;
    top: -10%;
    right: -5%;
    width: 80%;
    height: 80%;
    background: rgba(67, 97, 238, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    z-index: -1;
`;

const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: 0.2,
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            delay: 0.4,
        },
    },
};

const HeroSection = () => {
    return (
        <Section
            id="hero"
            style={{
                background:
                    "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(33,33,33,0.95) 100%)",
                paddingTop: 0,
                paddingBottom: 0,
                width: "100%",
            }}>
            <HeroContainer>
                <HeroContent
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible">
                    <HeroTitle variant={Typography.Variants.H1} color="white">
                        Start your <span>IT</span> journey with us
                    </HeroTitle>
                    <HeroSubtitle
                        variant={Typography.Variants.SUBTITLE1}
                        color="#aaa"
                        gutterBottom>
                        Modern education in information technology for those who
                        want to acquire an in-demand profession and build a
                        successful career
                    </HeroSubtitle>

                    <ButtonGroup>
                        <Button
                            variant={Button.Variants.PRIMARY}
                            size={Button.Sizes.LARGE}>
                            Start Learning
                        </Button>
                        <Button
                            variant={Button.Variants.OUTLINE}
                            size={Button.Sizes.LARGE}>
                            Learn More
                        </Button>
                    </ButtonGroup>

                    <StatsContainer>
                        <StatItem>
                            <StatValue variant={Typography.Variants.H3}>
                                5000+
                            </StatValue>
                            <Typography
                                variant={Typography.Variants.CAPTION}
                                color="#aaa">
                                Graduates
                            </Typography>
                        </StatItem>
                        <StatItem>
                            <StatValue variant={Typography.Variants.H3}>
                                20+
                            </StatValue>
                            <Typography
                                variant={Typography.Variants.CAPTION}
                                color="#aaa">
                                Courses
                            </Typography>
                        </StatItem>
                        <StatItem>
                            <StatValue variant={Typography.Variants.H3}>
                                96%
                            </StatValue>
                            <Typography
                                variant={Typography.Variants.CAPTION}
                                color="#aaa">
                                Employment
                            </Typography>
                        </StatItem>
                    </StatsContainer>
                </HeroContent>

                <HeroImageContainer
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible">
                    <BackgroundDecoration />
                    <HeroImage
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt="IT School students"
                    />
                </HeroImageContainer>
            </HeroContainer>
        </Section>
    );
};

export default HeroSection;
