"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Globe, Wrench, Puzzle, Computer } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ProjectType = "web" | "tools" | "plugins" | "desktop";

const typeIcons: Record<ProjectType, React.ElementType> = {
  web: Globe,
  tools: Wrench,
  plugins: Puzzle,
  desktop: Computer,
};

type Project = {
  title: string;
  description: string;
  type: ProjectType[];
  image: string | null;
  tech: string[];
  link: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Chameleon",
    description:
      "An All-in-one Local Media Shapeshifter. Chameleon is a desktop application that allows users to convert, compress, and manage their local media files (images, videos, and audio) with ease. It supports a wide range of formats and provides a user-friendly interface for batch processing.",
    type: ["desktop"],
    image: "/projects/chamelleon_logo.png",
    tech: [
      "Go",
      "React",
      "TypeScript",
      "Vite",
      "NodeJS",
      "Wails v2",
      "TailwindCSS",
      "Shadcn UI",
      "FFMPEG",
    ],
    link: "https://github.com/achmadnp/chamelleon",
    featured: true,
  },
  {
    title: "Angkasa AI",
    description:
      "An AI-assisted trip-planning system. Give it a destination and a trip length, and it produces a full day-by-day itinerary: attractions, travel times between them, hotel/tour contacts, and practical info  by combining a deterministic data pipeline with LLM-driven clustering and generation.",
    type: ["web"],
    image: "/projects/angkasa_logo.png",
    tech: [
      "Go",
      "Python",
      "FastAPI",
      "NextJs",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "PostgreSQL",
      "Claude Haiku",
    ],
    link: "https://www.drafton.io/",
    featured: false,
  },
  {
    title: "Rearmoured",
    description:
      "Rearmour is a full-stack e-commerce storefront for premium outdoor gear — packs, tents, apparel, and accessories. It comes also with a custom-built admin dashboard for managing products, orders, and customers.",
    type: ["web"],
    image: "/projects/rearmoured_logo.png",
    tech: [
      "NextJs 16",
      "TypeScript",
      "TailwindCSS",
      "ShadCN",
      "MongoDB",
      "Framer Motion",
      "Zustand",
      "Stripe",
    ],
    link: "https://rearmoured.achmadnp.me",
    featured: true,
  },
  {
    title: "Peroot",
    description:
      "A lightweight Go application that acts as a messaging bridge between your online shop and WhatsApp Business.",
    type: ["tools"],
    image: null,
    tech: ["Go"],
    link: "https://github.com/achmadnp/peroot",
    featured: false,
  },
  {
    title: "Piegeon",
    description: "The effortless webhook-to-Telegram forwarder.",
    type: ["tools"],
    image: "/projects/piegeon_logo.png",
    tech: ["Go", "PostgreSQL", "Telegram Bot API"],
    link: "https://github.com/achmadnp/piegeon",
    featured: true,
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
            Projects i&apos;ve worked on
            <div className="ml-6 flex-1 h-px bg-border" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
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
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} snapshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground">
                            No image
                          </span>
                        </div>
                      )}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-primary">
                          {project.type.map((t) => {
                            const TypeIcon = typeIcons[t];
                            return <TypeIcon key={t} className="h-6 w-6" />;
                          })}
                          <span className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                            {project.type.join(" / ")}
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
