"use client";

import { motion } from "framer-motion";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 flex items-center">
            <span className="text-primary mr-4 font-mono text-xl">02.</span>
            where i&apos;ve worked
            <div className="ml-6 flex-1 h-px bg-border" />
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-32 shrink-0 flex md:block border-b md:border-b-0 md:border-l border-border">
              {/* Tab list mockup */}
              <button className="px-4 tracking-widest py-3 text-md font-medium text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-primary/5 text-left w-full hover:bg-primary/10 transition-colors">
                BOSCH
              </button>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-1">
                Fullstack Software Engineer intern{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  @Robert Bosch Manufacturing Solutions
                </a>
              </h3>
              <p className="text-sm text-muted-foreground font-mono mb-6">
                Feb 2024 - Aug 2024
              </p>

              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Engineered and maintained responsive, high-performance web
                  interfaces using TypeScript, HTML, and SCSS on the Angular
                  framework, delivering polished user experiences across
                  multiple internal applications.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Designed and implemented robust backend services and RESTful
                  APIs with .NET and NestJS (Node.js), ensuring scalable
                  architecture and clean separation of concerns.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Owned database operations across MongoDB, PostgreSQL, and
                  MySQL — including schema design, query optimisation, and data
                  migrations — to support diverse application requirements.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">▹</span>
                  Drove application deployments to Azure DevOps cloud
                  environments using Docker containers, streamlining the release
                  pipeline and improving deployment reliability.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
