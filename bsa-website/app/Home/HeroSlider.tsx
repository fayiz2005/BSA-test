"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../components/layout/Container";

type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
};

const SLIDE_DURATION_MS = 10_000;

export default function HeroSlider() {
  const slides = useMemo<Slide[]>(
    () => [
      {
      src: "https://images.unsplash.com/photo-1592021482992-f83e6ef66dcb?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Bangladeshi Students’ Association at UBC",
      eyebrow: "Bangladeshi Students’ Association · UBC",
      title: "দেশের বাইরে দেশের বাড়ি",
      subtitle:
        "Home Away from Home — Hello Bondhura! A student-led community celebrating Bangladeshi culture and belonging at UBC.",
    },
    {
      src: "https://images.pexels.com/photos/7242659/pexels-photo-7242659.jpeg?_gl=1*ytibha*_ga*MTIwNzQ2NTIxMi4xNzY4MDkzMzA0*_ga_8JE65Q40S6*czE3NjgwOTMzMDMkbzEkZzEkdDE3NjgwOTQ3MTAkajMxJGwwJGgw",
      alt: "Students at a campus event",
      eyebrow: "Culture · Celebrations · Memories",
      title: "Celebrate together",
      subtitle:
        "From Pohela Boishakh and Boshonto Boron to cultural nights and formal galas — we bring the community together.",
    },
    {
      src: "https://images.unsplash.com/photo-1692639453905-6cf932458392?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Friends talking and connecting",
      eyebrow: "Connections that last",
      title: "Find your people",
      subtitle:
        "Make friends, share traditions, and feel at home — whether it’s your first week at UBC or your final year.",
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
      alt: "Students networking and collaborating",
      eyebrow: "Growth · Support · Networking",
      title: "Build beyond campus",
      subtitle:
        "Professional development, mentorship, and community-focused networking like Connect Three — for students of all backgrounds.",
    },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const goTo = (idx: number) => {
    setActiveIndex(((idx % slides.length) + slides.length) % slides.length);
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  // autoplay
  useEffect(() => {
    resetTimer();
    timerRef.current = setTimeout(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => resetTimer();
  }, [activeIndex, slides.length]);

  // keyboard nav
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        resetTimer();
        prev();
      }
      if (e.key === "ArrowRight") {
        resetTimer();
        next();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const slide = slides[activeIndex];

return (
  <section className="relative overflow-hidden">
    <div className="relative h-[420px] w-full select-none overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={activeIndex}
          src={slide.src}
          alt={slide.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </AnimatePresence>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Aligned text container */}
      <div className="absolute inset-0 z-10 flex items-center">
        <Container>
          <div className="max-w-xl text-left">
            <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white">
              {slide.eyebrow}
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {slide.title}
            </h1>

            <p className="mt-4 text-base text-white/85 md:text-lg">
              {slide.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#events"
                className="rounded-xl bg-red-500 px-5 py-3 text-sm font-medium text-white hover:bg-red-600 transition"
                onClick={resetTimer}
              >
                See events
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
                onClick={resetTimer}
              >
                Contact / Join
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Controls */}
      <button
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
        onClick={() => {
          resetTimer();
          prev();
        }}
      >
        ‹
      </button>

      <button
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-white hover:bg-black/70"
        onClick={() => {
          resetTimer();
          next();
        }}
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`h-2.5 w-2.5 rounded-full ${
              idx === activeIndex ? "bg-white" : "bg-white/40"
            }`}
            onClick={() => {
              resetTimer();
              goTo(idx);
            }}
          />
        ))}
      </div>
    </div>
  </section>
);

}
