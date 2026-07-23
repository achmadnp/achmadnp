"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Wrench, Puzzle } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectType = "web" | "tools" | "plugins";

const typeIcons: Record<ProjectType, React.ElementType> = {
  web: Globe,
  tools: Wrench,
  plugins: Puzzle,
};

type Project = {
  title: string;
  description: string;
  type: ProjectType;
  image: string;
  tech: string[];
  link: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "PsyConnect",
    description: "A thoughtfully designed mental health platform.",
    type: "web",
    image: "/projects/psyconnect.png",
    tech: [
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "Framer Motion",
    ],
    link: "https://psyconnect.co.in/",
    featured: true,
  },
  {
    title: "GetLifeGuard",
    description: "An E-Commerce platform for Self-Defense Keychain.",
    type: "web",
    image: "/projects/getlifeguard.png",
    tech: [
      "NextJs 14",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "Prisma",
      "Stripe",
    ],
    link: "https://getlifegard.vercel.app/",
    featured: true,
  },
  {
    title: "Journally",
    description:
      "A privacy-first digital journaling platform for calm self-reflection.",
    type: "web",
    image: "/projects/journally.png",
    tech: [
      "Next.js 14",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Better Auth",
    ],
    link: "https://journally-kv.vercel.app/",
    featured: true,
  },
  {
    title: "Velvi Matrimony",
    description:
      "A platform that redefines the way individuals find their life partners.",
    type: "web",
    image: "/projects/velvi-matrimony.png",
    tech: ["NextJs", "TypeScript", "TailwindCSS", "APIs"],
    link: "https://www.velvimatrimony.in/",
    featured: false,
  },
  {
    title: "Drafton",
    description: "The AI-powered platform that simplifies proposal creation.",
    type: "web",
    image: "/projects/drafton.png",
    tech: ["Open AI", "NextJs", "TypeScript", "TailwindCSS", "Prisma"],
    link: "https://www.drafton.io/",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 flex items-center">
            <span className="text-primary mr-4 font-mono text-xl">03.</span>
            projects i&apos;ve worked on
            <div className="ml-6 flex-1 h-px bg-border" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const TypeIcon = typeIcons[project.type];
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex"
                >
                  <Card className="flex flex-col w-full bg-card hover:-translate-y-2 transition-transform duration-300 border-border group hover:border-primary/50 relative overflow-hidden pt-0">
                    <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                      <Image
                        src={project.image}
                        alt={`${project.title} snapshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-primary">
                          <TypeIcon className="h-6 w-6" />
                          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                            {project.type}
                          </span>
                        </div>
                        <div className="flex gap-4">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors text-xl">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="after:absolute after:inset-0"
                        >
                          {project.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-4 flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-mono text-[10px] px-2 py-0.5 bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
