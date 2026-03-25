import Image from "next/image";
import Container from "../components/layout/Container";

const team = [
    {
    name: "Faizah Ehsan & Doa Binte Rashid",
    role: "Presidents",
    image: "/teams/Presidents_Faizah Ehsan_Doa Binte Rashid.JPG",
  },

  {
    name: "Rifah Sanjida",
    role: "VP External",
    image: "/teams/VP_External_Rifah_Sanjida.PNG",
  },


  {
    name: "Ahnaf Amer",
    role: "VP Internal",
    image: "/teams/VP_Internal_Ahnaf_Amer.jpg",
  },

  {
    name: "Yuvraj Upadhyay",
    role: "VP Marketing & Communications",
    image: "/teams/VP_Marketing_&_Communications_Yuvraj Upadhyay.JPG",
  },

  {
    name: "Abeer Imtiaz",
    role: "Academic Director",
    image: "/teams/Academic_Director_Abeer Imtiaz.JPG",
  },
  {
    name: "Tanjila Titir & Najifa Lamiya",
    role: "Events & Logistics Directors ",
    image: "/teams/Events_&_Logistics_Directors_Tanjila Titir_&_Najifa Lamiya.JPG",
  },

  

  {
    name: "Tahsan Samin",
    role: "Technical Director",
    image: "/teams/Technical_Director_Tahsan_Samin.JPG",
  },

  {
    name: "Farraz Ahmed & Marshad Hossain",
    role: "Treasurers",
    image: "/teams/Treasures_Farraz_Ahmed_Marshad Hossain.JPG",
  },

  
];

export default function TeamSection() {
  return (
    <section id="team" className="border-t bg-zinc-50 py-14">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Executive Team
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Meet the students leading the organization this year.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-zinc-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}