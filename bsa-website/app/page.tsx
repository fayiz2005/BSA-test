import SiteFooter from "./components/layout/SiteFooter";
import SiteHeader from "./components/layout/SiteHeader";
import HeroSlider from "./Home/HeroSlider";
import EventsSection from "./Home/EventsSection";
import TeamSection from "./Home/TeamSection";
import ContactSection from "./Home/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <SiteHeader />
      <HeroSlider />
      <EventsSection />
      <TeamSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
