import HeroSection from "./components/HeroSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import ServicesSection from "./components/ServicesSection.tsx";
import ContactSection from "./components/ContactSection.tsx";
import FooterSection from "./components/FooterSection.tsx";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import "@fontsource/montserrat/900.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/500.css";
const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 900,
        },
        h2: {
            fontWeight: 700,
        },
        h3: {
            fontWeight: 500,
        }
    },
});
function App() {

  return (
      <ThemeProvider theme={theme}>
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
            <FooterSection />
        </>
      </ThemeProvider>
  )
}

export default App
