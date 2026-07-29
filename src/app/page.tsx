import CompleteLookSection from "./components/landingPage/CompleteLookSection";
import DashboardAndPrivacySection from "./components/landingPage/DashboardAndPrivacySection";
import FinalCTAAndFooter from "./components/landingPage/FinalCTAAndFooter";
import Hero from "./components/landingPage/Hero";
import HowItWorksSection from "./components/landingPage/HowItWorksSection";
import MeetLucySection from "./components/landingPage/MeetLucySection";
import ProblemSection from "./components/landingPage/ProblemSection";
import StyleProfileSection from "./components/landingPage/StyleProfileSection";
import TheJourneySection from "./components/landingPage/TheJourneySection";
import VirtualTryOnSection from "./components/landingPage/VirtualTryOnSection";
export default function Home() {
  return (
    <div className="w-full bg-lucy-page selection:bg-lucy-accent selection:text-lucy-page">
      <Hero />
      <ProblemSection/>
      <MeetLucySection/>
      <HowItWorksSection/>
      <StyleProfileSection/>
      <CompleteLookSection/>
      <TheJourneySection/>
      <DashboardAndPrivacySection/>
      <FinalCTAAndFooter/>
      
      {/* Spacer to test the deep scroll transition */}
      <div className="relative z-10 w-full h-screen bg-lucy-page flex flex-col items-center justify-center border-t border-white/5">
        <span className="text-xs uppercase tracking-[0.3em] text-lucy-muted mb-4">Phase 01</span>
        <h2 className="font-serif text-4xl text-lucy-ivory">Start With You.</h2>
      </div>
    </div>
  );
}