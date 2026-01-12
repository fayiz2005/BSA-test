import Container from "./Container";

const nav = [
  { label: "Events", href: "#events" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  return (
    
    <header className="sticky top-0 z-50 h-16 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8 overflow-hidden rounded-full border border-zinc-200">
              <div className="absolute inset-0 bg-emerald-600" />
              <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600" />
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold">Bangladesh Student Association</div>
              <div className="text-xs text-zinc-600">University of British Columbia</div>
            </div>
          </div>

          <nav className="hidden items-center gap-5 text-sm md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-zinc-700 hover:text-zinc-950">
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-zinc-900 px-3 py-2 text-white hover:opacity-90"
            >
              Join / Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="md:hidden rounded-lg bg-zinc-900 px-3 py-2 text-sm text-white hover:opacity-90"
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
}
