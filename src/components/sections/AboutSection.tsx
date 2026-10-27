"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";

const SKILLS = [
  {
    title: "Frontend",
    icon: "▹",
    points: [
      "Building full-stack web apps with Next.js, React.js & TypeScript",
      "Building enterprise-grade SPAs with Angular and reactive programming via RxJS",
      "Crafting responsive, accessible UIs with TailwindCSS & ShadCN",
      "State management with Zustand, React Query, NgRx, and Context API",
    ],
    tags: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "RxJS",
      "TailwindCSS",
      "ShadCN",
    ],
  },
  {
    title: "Backend",
    icon: "▹",
    points: [
      "RESTful & GraphQL APIs with Node.js/Express/NestJS, .NET C#, Go, and Java",
      "Database design and ORM integration with Prisma, Entity Framework & Hibernate",
      "Authentication flows — JWT, OAuth2, and session-based auth",
    ],
    tags: ["Node.js", "NestJS", "C# / .NET", "Go", "Java", "Prisma"],
  },
  {
    title: "DevOps & Cloud",
    icon: "▹",
    points: [
      "Containerising applications with Docker and orchestrating with Compose",
      "Building CI/CD pipelines with GitHub Actions",
      "Deploying to cloud platforms — Vercel, Azure, AWS, and VPS environments",
    ],
    tags: ["Docker", "GitHub Actions", "Vercel", "Azure", "AWS", "Linux"],
  },
  {
    title: "UI/UX & Design",
    icon: "▹",
    points: [
      "Designing user-friendly interfaces and prototypes in Figma",
      "Building and maintaining design systems and component libraries",
      "Translating design specs to pixel-perfect, interactive implementations",
    ],
    tags: ["Figma", "Design Systems", "Prototyping", "Wireframing"],
  },
  {
    title: "AI Engineering",
    icon: "▹",
    points: [
      "Integrating LLM APIs (OpenAI, Anthropic) into production web applications",
      "Running and fine-tuning local models with Ollama for private, offline inference",
      "Designing prompt engineering strategies and agentic workflows",
    ],
    tags: ["Ollama", "OpenAI API", "Anthropic", "Python"],
  },
  {
    title: "Databases",
    icon: "▹",
    points: [
      "Designing relational schemas and writing complex queries with PostgreSQL",
      "Modelling flexible document stores with MongoDB and Mongoose",
      "Optimising queries, indexing strategies, and connection pooling for scale",
    ],
    tags: ["PostgreSQL", "MongoDB", "Prisma", "Mongoose", "SQL"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 flex items-center">
            <span className="text-primary mr-4 font-mono text-xl">01.</span>
            what i do
            <div className="ml-6 flex-1 h-px bg-border" />
          </h2>

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-16 max-w-3xl">
            I&apos;m a Full-Stack developer who cares about the full picture,
            from a polished, accessible UI down to a well-structured API and a
            reliable deployment pipeline. I enjoy working across the stack,
            bridging design and engineering, and currently expanding into
            data-driven solutions and AI engineering.
          </p>

          {/* Skill cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {SKILLS.map((skill) => (
              <motion.div
                key={skill.title}
                variants={cardVariants}
                className="rounded-lg border border-border bg-card p-6 flex flex-col gap-4"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.title}
                </h3>

                <ul className="space-y-2 text-muted-foreground text-sm flex-1">
                  {skill.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 shrink-0">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
