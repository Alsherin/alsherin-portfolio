"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "01_decision_buddy",
    href: "/case-studies/decision-buddy",
    description: "Decision Buddy: An AI Decision making tool",
  },
  {
    title: "02_jobflow",
    href: "/case-studies/jobflow",
    description: "JobFlow: Chrome Extension for Job Tracking",
  },
  {
    title: "03_mena_market_study",
    href: "/case-studies/mena-market-study",
    description: "MENA Market Study: SaaS & Digital Products Opportunity (GCC Focus)",
  },
  {
  title: "04_gitex_booth",
  href: "/case-studies/gitex-booth",
  description: "Event strategy & demand generation funnel"
  },
];

const skills = [
  "Product Strategy",
  "User Research",
  "Product Marketing",
  "Go-To-Market",
  "AI Prototyping",
  "Vibe Coding",
  "Analytics",
  "Experimentation",
  "Customer Insights",
  "Figma",
  "Python",
  "Streamlit",
  "SQL",
];

export default function Home() {
  return (
    <main className="min-h-screen">

      <nav className="navbar">
  <a href="/">home</a>
  {" "}
  <a href="#about">about</a>
  {" "}
  <a href="#skills">skills</a>
  {" "}
  <a href="#projects">projects</a>
  {" "}
  <a href="#contact">contact</a>
  {" "}

    <a
    href="https://github.com/ALSHERIN"
    target="_blank"
    className="github-link"
  >
    GitHub ↗
    {" "}
  </a>

</nav>

      <div className="max-w-4xl mx-auto px-8">

        {/* HERO */}

<div className="hero-content">

  <p
        style={{
          color: "#64ffda",
          letterSpacing: "4px",
          marginBottom: "20px",
        }}
      >
       
      </p>

      <h1 className="hero-name">
        hi, i'm alsherin.
      </h1>



  <motion.h2
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}
    className="hero-subtitle"
  >
    i build, test and market products.
  </motion.h2>

  {/* <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    className="hero-description"
  >
    Building AI tools, productivity products and
    user experiences through experimentation,
    research and storytelling.
  </motion.p>*/}

</div>

        {/* ABOUT */}

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section"
        >
          <h2
  className="section-title"
  style={{ marginTop: "80px", marginBottom: "50px" }}
>
  
</h2>

          <p className="terminal-command">
            /about
          </p>

          <div className="content-block">

  

            <p>
              i'm curious about products, marketing, and the little 
              frustrations people accept as "just the way things are."
            </p>

            <p>
              outside work, you'll usually find me reading, doing yoga or 
              building small products to solve my own problems. 
              i enjoy validating ideas quickly, improving user experiences 
              through research, and asking, "why is this harder than it needs to be?"
            </p>

            <p className="highlight">
              for work, i'm an engineer-turned-marketer with 5 years of B2B marketing experience, 
              leading regional campaigns across the MENA region. i'm now working toward a career in 
              product management, where i can build products that solve meaningful user problems.
            </p>

          </div>

        </motion.section>

        {/* CASE STUDIES */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
           id="projects"
          className="section"
        >

          <p className="terminal-command">
            /case studies
          </p>

          <div className="project-grid">

            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
              >
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="project-card"
                >
                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                </motion.div>
              </Link>
            ))}

          </div>

        </motion.section>

        {/* SKILLS */}

        <motion.section
          initial={{ opacity: 0 }}
           id="skills"
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section"
        >

          <p className="terminal-command">
            /skills 
          </p>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div
                key={skill}
                className="skill-card"
              >
                {skill}
              </div>
            ))}

          </div>

        </motion.section>

        {/* CONTACT */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
           id="contact"
          className="section"
        >

          <p className="terminal-command">
            /contact
          </p>

          <div className="contact-links">

            <a
              href="https://www.linkedin.com/in/alsherin-r-72931887/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:rajanalsherin@gmail.com">
              Email
            </a>

          </div>

        </motion.section>

      </div>

    </main>
  );
  
}