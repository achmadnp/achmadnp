"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ResumeDialog } from "@/components/resume-dialog";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ROTATING_TEXTS = [
  "I create visually pleasing interfaces for the web.",
  "I build things for the web.",
  "I craft fast, accessible experiences on the web.",
  "I containerize apps and ship them anywhere.",
  "I build CI/CD pipelines that just work.",
  "I ship scalable apps to the cloud.",
];

export function HeroSection() {
  const [displayText, setDisplayText] = React.useState("");
  const [textIndex, setTextIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [resumeOpen, setResumeOpen] = React.useState(false);

  React.useEffect(() => {
    const currentText = ROTATING_TEXTS[textIndex];

    if (!isDeleting && displayText === currentText) {
      const timeout = setTimeout(() => setIsDeleting(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setDisplayText(
          isDeleting
            ? currentText.slice(0, displayText.length - 1)
            : currentText.slice(0, displayText.length + 1),
        );
      },
      isDeleting ? 20 : 20,
    );

    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting]);

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full"
        >
          {/* Text content */}
          <div className="flex-1 max-w-2xl">
            <motion.p
              variants={item}
              className="text-primary font-mono mb-4 pl-1"
            >
              Hi, my name is
            </motion.p>
            <motion.h1
              variants={item}
              className="text-5xl sm:text-7xl font-bold tracking-tight text-foreground mb-4"
            >
              Achmad Naufal Prayitno.
            </motion.h1>
            <motion.h2
              variants={item}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-muted-foreground mb-8 h-26 sm:h-40 overflow-hidden"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  times: [0, 0.5, 0.5, 1],
                  ease: "linear",
                }}
                className="inline-block w-0.75 h-[0.85em] bg-muted-foreground ml-1 align-middle"
              />
            </motion.h2>
            <motion.p
              variants={item}
              className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              <span>
                I&apos;m a passionate Full-Stack web developer with hands-on
                experience in building web applications using React.js & Next.js
                with TypeScript, C#, .NET TailwindCSS, and Prisma, with UI/UX,
                Passionate about Data-Driven Solutions Currently learning AI
                Engineering
              </span>
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="group"
                variant={"destructive"}
              >
                <Link href="#work">
                  Check out my work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setResumeOpen(true)}
              >
                see my resume
              </Button>
            </motion.div>
          </div>

          {/* Profile picture */}
          <motion.div
            variants={item}
            className="shrink-0 flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden [mask-image:radial-gradient(circle,black_40%,transparent_90%)]">
              <Image
                src="/persphoto.png"
                alt="Achmad Naufal Prayitno"
                fill
                sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 18rem"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
    </section>
  );
}
