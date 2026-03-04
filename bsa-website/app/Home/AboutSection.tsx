import Container from "../components/layout/Container";

export default function AboutSection() {
  return (
    <section id="about" className="border-t py-14">
      <Container>
        <h2 className="text-2xl font-semibold">About BSA</h2>
        <p className="mt-1 text-zinc-600">Community, culture, connection.</p>

        <div className="mt-6 max-w-3xl space-y-4 text-zinc-700 leading-relaxed">
          <p>
            <span className="font-medium">Hello Bondhura!</span> Welcome to the Bangladeshi Students’ Association’s official website!
          </p>
          <p>
            The Bangladeshi Students’ Association (BSA) at UBC is a student-led organization dedicated to celebrating Bangladeshi culture, fostering meaningful connections, and creating a home away from home for students on campus. Our goal is to build a strong, inclusive community where members can embrace their heritage, share traditions, and form lasting friendships.
          </p>
          <p>
            Through cultural celebrations, social gatherings, professional development initiatives, and collaborative events, BSA strives to highlight the richness of Bangladeshi identity while welcoming students from all backgrounds to learn, participate, and connect. From vibrant festivals like <span className="font-medium">Pohela Boishakh</span> and <span className="font-medium">Boshonto Boron</span> to formal galas and community-focused networking initiatives like <span className="font-medium">Connect Three</span>, we aim to create memorable experiences that bring people together.
          </p>
          <p>
            At BSA, we believe in unity, diversity, and empowerment. Whether you are looking to reconnect with your roots, meet new friends, showcase your talents, or simply enjoy a cup of <span className="font-medium">chaa</span> and good conversation, there is a place for you here.
          </p>
        </div>
      </Container>
    </section>
  );
}