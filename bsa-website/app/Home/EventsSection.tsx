import Container from "../components/layout/Container";

// const events = [
//   { title: "Welcome Social", meta: "TBD", desc: "Meet people and get connected." },
//   { title: "Cultural Night", meta: "TBD", desc: "Food, music, performances." },
//   { title: "Study + Chill", meta: "TBD", desc: "Casual study session + snacks." },
// ];

// export default function EventsSection() {
//   return (
//     <section id="events" className="py-14">
//       <Container>
//         <h2 className="text-2xl font-semibold">Upcoming events</h2>
//         <p className="mt-1 text-zinc-600">Add real dates once the exec team shares them.</p>

//         <div className="mt-6 grid gap-4 md:grid-cols-3">
//           {events.map((e) => (
//             <div key={e.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
//               <div className="text-sm text-zinc-600">{e.meta}</div>
//               <div className="mt-1 text-lg font-semibold">{e.title}</div>
//               <p className="mt-2 text-sm text-zinc-600">{e.desc}</p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

export default function EventsSection() {
  return (
    <section id="events" className="py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Events
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            We host social, cultural, and academic events throughout the year.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="text-sm text-zinc-600">Next Event</div>
          <div className="mt-1 text-lg font-semibold text-zinc-900">
            To Be Announced
          </div>
          <p className="mt-2 text-sm text-zinc-600">
            Follow us on Instagram to stay updated on upcoming events and announcements.
          </p>
        </div>
      </Container>
    </section>
  );
}