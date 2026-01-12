import Container from "../components/layout/Container";

const roles = ["President", "VP Internal", "VP External", "Treasurer"];

export default function TeamSection() {
  return (
    <section id="team" className="border-t bg-zinc-50 py-14">
      <Container>
        <h2 className="text-2xl font-semibold">Executive team</h2>
        <p className="mt-1 text-zinc-600">Replace placeholders with names + roles.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {roles.map((role) => (
            <div key={role} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="text-sm text-zinc-600">{role}</div>
              <div className="mt-1 font-semibold">Name TBA</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
