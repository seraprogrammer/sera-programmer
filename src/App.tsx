import HeroSection from "./components/hero-section";
import { IndustriesSection } from "./components/industries-section";
import FooterSection from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";
import { Routes, Route } from "react-router-dom";
import { HeroHeader } from "./components/hero5-header";
import TeamMember from "./components/team";
import ContentSection from "./components/solution";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <HeroHeader />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <IndustriesSection />
              <FooterSection />
            </div>
          }
        />
        <Route path="/team" element={<TeamMember />} />
        <Route path="/solution" element={<ContentSection />} />
      </Routes>
    </ThemeProvider>
  );
}
