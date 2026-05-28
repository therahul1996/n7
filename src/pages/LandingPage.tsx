import { 
  Navbar, Hero, Solutions, CloudBanking, 
  Ticker, DigitalBanking, InsightsCaseStudies, Footer 
} from "../components/sections";
import { SectionDivider } from "../components/ui";

export default function LandingPage() {
  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <SectionDivider />
      <Solutions />
      <SectionDivider />
      <CloudBanking />
      <Ticker />
      <DigitalBanking />
      <InsightsCaseStudies />
      <Footer />
    </div>
  );
}
