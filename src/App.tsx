import { Box, Container } from "@mui/material";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { FeaturesSection } from "./components/sections/FeaturesSection";
import { FinalCtaSection } from "./components/sections/FinalCtaSection";
import { HeroSection } from "./components/sections/HeroSection";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(255,59,48,0.22), transparent 35%), #070707",
      }}
    >
      <Container maxWidth="lg">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <FinalCtaSection />
        <Footer />
      </Container>
    </Box>
  );
}

export default App;