import Container from "./Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200">
      <Container>
        <div className="py-8 text-sm text-zinc-600">
          © {new Date().getFullYear()} Bangladesh Student Association at UBC
        </div>
      </Container>
    </footer>
  );
}
