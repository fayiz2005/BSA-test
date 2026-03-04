import Container from "../components/layout/Container";
import { Instagram, Facebook, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="border-t py-14">
      <Container>
        <h2 className="text-2xl font-semibold">Contact</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Mail size={18} />
                Email
                </div>
                <div className="mt-1 font-medium">ubcbsa@gmail.com</div>
                </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Instagram size={18} />
                Instagram
            </div>
            <a
                href="https://www.instagram.com/ubcbsa/"
                target="_blank"
                className="mt-1 block font-medium text-blue-600 hover:underline"
            >
                @ubcbsa
            </a>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
            <div className="flex items-center gap-2 text-sm text-zinc-600">
                <Facebook size={18} />
                Facebook
            </div>
            <a
                href="https://www.facebook.com/ubcbsa/"
                target="_blank"
                className="mt-1 block font-medium text-blue-600 hover:underline"
            >
                UBC BSA
            </a>
            </div>
        </div>
      </Container>
    </section>
  );
}
