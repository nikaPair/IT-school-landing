import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Typography from "../ui/Typography";
import Button from "../ui/Button";

const CoursesContainer = styled.div`
    width: 100%;
    padding: 2rem 0;
`;

const SectionTitle = styled(Typography)`
    text-align: center;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &:after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 80px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 2px;
    }
`;

const SectionSubtitle = styled(Typography)`
    text-align: center;
    max-width: 700px;
    margin: 0 auto 4rem auto;
`;

const CoursesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

const CourseCard = styled(motion.div)`
    background-color: white;
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: ${({ theme }) => theme.shadows.lg};
    }
`;

const CourseImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const CourseContent = styled.div`
    padding: 1.5rem;
`;

const CourseTitle = styled(Typography)`
    margin-bottom: 0.5rem;
`;

const CourseDescription = styled(Typography)`
    margin-bottom: 1.5rem;
    color: #666;
`;

const CourseDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
`;

const CourseDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const CourseActions = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CoursePrice = styled(Typography)`
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
`;

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.1 * i,
            duration: 0.5,
        },
    }),
};

const CoursesSection = () => {
    const courses = [
        {
            id: 1,
            title: "Frontend Development",
            description:
                "Learn to create modern, responsive websites using HTML, CSS, JavaScript, React, and other cutting-edge technologies.",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            duration: "6 months",
            level: "Beginner to Advanced",
            price: "$1,200",
        },
        {
            id: 2,
            title: "Backend Development",
            description:
                "Master server-side programming with Node.js, Python, databases, API development, and cloud deployment.",
            image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            duration: "7 months",
            level: "Intermediate",
            price: "$1,400",
        },
        {
            id: 3,
            title: "UX/UI Design",
            description:
                "Develop skills in user experience research, interface design, prototyping, and creating engaging digital products.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            duration: "5 months",
            level: "All Levels",
            price: "$1,100",
        },
    ];

    return (
        <Section id="courses" variant={Section.Variants.LIGHT}>
            <CoursesContainer>
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <SectionTitle variant={Typography.Variants.H2}>
                        Our Courses
                    </SectionTitle>
                    <SectionSubtitle variant={Typography.Variants.BODY1}>
                        Explore our comprehensive range of IT courses designed
                        to help you build in-demand skills and advance your
                        career in the technology industry.
                    </SectionSubtitle>
                </div>

                <CoursesGrid>
                    {courses.map((course, index) => (
                        <CourseCard
                            key={course.id}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}>
                            <CourseImage
                                src={course.image}
                                alt={course.title}
                            />
                            <CourseContent>
                                <CourseTitle variant={Typography.Variants.H4}>
                                    {course.title}
                                </CourseTitle>
                                <CourseDescription
                                    variant={Typography.Variants.BODY2}>
                                    {course.description}
                                </CourseDescription>
                                <CourseDetails>
                                    <CourseDetail>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16">
                                            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                                        </svg>
                                        <Typography
                                            variant={Typography.Variants.BODY2}>
                                            {course.duration}
                                        </Typography>
                                    </CourseDetail>
                                    <CourseDetail>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            viewBox="0 0 16 16">
                                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm.25 5.5a.5.5 0 0 1 .5.5v1.5h1.5a.5.5 0 0 1 0 1h-1.5v1.5a.5.5 0 0 1-1 0V8.5H6.25a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                        <Typography
                                            variant={Typography.Variants.BODY2}>
                                            {course.level}
                                        </Typography>
                                    </CourseDetail>
                                </CourseDetails>
                                <CourseActions>
                                    <CoursePrice
                                        variant={Typography.Variants.H6}>
                                        {course.price}
                                    </CoursePrice>
                                    <Button
                                        variant={Button.Variants.PRIMARY}
                                        size={Button.Sizes.SMALL}>
                                        Enroll Now
                                    </Button>
                                </CourseActions>
                            </CourseContent>
                        </CourseCard>
                    ))}
                </CoursesGrid>
            </CoursesContainer>
        </Section>
    );
};

export default CoursesSection;
