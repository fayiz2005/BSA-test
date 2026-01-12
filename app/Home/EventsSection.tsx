import Container from "../components/layout/Container";

const events = [
  { title: "Welcome Social", meta: "TBD", desc: "Meet people and get connected." },
  { title: "Cultural Night", meta: "TBD", desc: "Food, music, performances." },
  { title: "Study + Chill", meta: "TBD", desc: "Casual study session + snacks." },
];

export default function EventsSection() {
  return (
    <section id="events" className="py-14">
      <Container>
        <h2 className="text-2xl font-semibold">Upcoming events</h2>
        <p className="mt-1 text-zinc-600">Add real dates once the exec team shares them.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {events.map((e) => (
            <div key={e.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="text-sm text-zinc-600">{e.meta}</div>
              <div className="mt-1 text-lg font-semibold">{e.title}</div>
              <p className="mt-2 text-sm text-zinc-600">{e.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
