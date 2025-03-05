import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import CoursesSection from "./components/sections/CoursesSection";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <CoursesSection />
                {/* Здесь будут добавлены другие секции */}
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
