import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Typography from "../ui/Typography";

const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`;

const AboutContent = styled.div`
    max-width: 600px;

    @media (max-width: 1200px) {
        max-width: 100%;
        order: 2;
    }
`;

const AboutTitle = styled(Typography)`
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 80px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 2px;
    }
`;

const AboutDescription = styled(Typography)`
    margin-bottom: 2rem;
`;

const FeaturesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const FeatureItem = styled(motion.div)`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

const FeatureIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: rgba(67, 97, 238, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    flex-shrink: 0;
`;

const FeatureContent = styled.div``;

const AboutImageContainer = styled.div`
    position: relative;

    @media (max-width: 1200px) {
        order: 1;
        max-width: 500px;
        margin: 0 auto;
    }
`;

const AboutImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
`;

const ImageDecoration = styled.div`
    position: absolute;
    bottom: -30px;
    right: -30px;
    width: 60%;
    height: 60%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.1;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    z-index: -1;
`;

const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * i,
            duration: 0.5,
        },
    }),
};

const AboutSection = () => {
    const features = [
        {
            icon: "🎓",
            title: "Experienced Teachers",
            description:
                "Our teachers are practicing professionals with experience in leading IT companies.",
        },
        {
            icon: "💻",
            title: "Practical Approach",
            description:
                "Training is built on real projects and current technologies.",
        },
        {
            icon: "🚀",
            title: "Career Growth",
            description:
                "We help with employment and career development in the IT field.",
        },
        {
            icon: "🌐",
            title: "Modern Programs",
            description:
                "We regularly update our curricula in accordance with market requirements.",
        },
    ];

    return (
        <Section id="about" variant={Section.Variants.LIGHT}>
            <AboutContainer>
                <AboutContent>
                    <AboutTitle variant={Typography.Variants.H2}>
                        About Our School
                    </AboutTitle>
                    <AboutDescription
                        variant={Typography.Variants.BODY1}
                        gutterBottom>
                        IT School is a modern educational center specializing in training qualified specialists in the field of information technology. We offer intensive courses in the most in-demand areas of the IT industry.
                    </AboutDescription>
                    <AboutDescription
                        variant={Typography.Variants.BODY1}
                        gutterBottom>
                        Our mission is to make quality IT education accessible to everyone who seeks to master a new profession or improve their qualifications.
                    </AboutDescription>

                    <FeaturesList>
                        {features.map((feature, index) => (
                            <FeatureItem
                                key={index}
                                custom={index}
                                variants={featureVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}>
                                <FeatureIcon>{feature.icon}</FeatureIcon>
                                <FeatureContent>
                                    <Typography
                                        variant={Typography.Variants.H6}
                                        gutterBottom>
                                        {feature.title}
                                    </Typography>
                                    <Typography
                                        variant={Typography.Variants.BODY2}
                                        color="#666">
                                        {feature.description}
                                    </Typography>
                                </FeatureContent>
                            </FeatureItem>
                        ))}
                    </FeaturesList>
                </AboutContent>

                <AboutImageContainer>
                    <AboutImage
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="IT School team"
                    />
                    <ImageDecoration />
                </AboutImageContainer>
            </AboutContainer>
        </Section>
    );
};

export default AboutSection;
