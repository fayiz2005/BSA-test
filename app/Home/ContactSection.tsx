import Container from "../components/layout/Container";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t py-14">
      <Container>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-1 text-zinc-600">Add official email + Instagram once confirmed.</p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="text-sm text-zinc-600">Email</div>
            <div className="mt-1 font-medium">bsa.ubc@email.com</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="text-sm text-zinc-600">Instagram</div>
            <div className="mt-1 font-medium">@bsaubc</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="text-sm text-zinc-600">Collaborations</div>
            <div className="mt-1 font-medium">Sponsors / Other clubs</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
