"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="h-screen flex flex-col justify-center px-10 md:px-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Alsherin Rajan
        </motion.h1>

        <h2 className="text-2xl mt-4 text-zinc-400">
          Product Marketer → Product Manager
        </h2>

        <p className="max-w-xl mt-6 text-zinc-500">
          Building user-focused products through research,
          strategy, experimentation and storytelling.
        </p>
      </section>

      <section className="px-10 md:px-24 py-40">
        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="space-y-8">

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Partner Portal Revamp
            </h3>

            <p className="text-zinc-400 mt-4">
              Collaborated with design and engineering teams
              to improve partner onboarding experience.
            </p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-3xl">
            <h3 className="text-2xl font-semibold">
              Event Experience Platform
            </h3>

            <p className="text-zinc-400 mt-4">
              Designed attendee journeys across MENA events.
            </p>
          </div>

        </div>
      </section>

      <section className="px-10 md:px-24 py-40">
        <h2 className="text-4xl font-bold mb-8">
          Contact
        </h2>

        <p>
          LinkedIn • Email • Resume
        </p>
      </section>

    </main>
  );
}