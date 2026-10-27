"use client";

import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Menu, Github, Mail, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResumeDialog } from "@/components/resume-dialog";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const menuContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
};

const menuItem: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [resumeOpen, setResumeOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors duration-200"
            >
              A.
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-md font-medium transition-colors hover:text-foreground ${
                  isScrolled ? "text-muted-foreground" : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="outline" onClick={() => setResumeOpen(true)}>
              Resume
            </Button>
          </nav>

          <div className="md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-xl"
              >
                <SheetHeader className="border-b px-6 py-5">
                  <SheetTitle className="text-2xl font-bold tracking-tighter">
                    A.
                  </SheetTitle>
                </SheetHeader>

                <motion.nav
                  variants={menuContainer}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col px-4 py-2"
                >
                  {navLinks.map((link, index) => (
                    <motion.div key={link.name} variants={menuItem}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-baseline gap-4 rounded-lg px-3 py-4 transition-colors hover:bg-muted/60 active:bg-muted"
                      >
                        <span className="font-mono text-sm text-primary">
                          {String(index + 1).padStart(2, "0")}.
                        </span>
                        <span className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                          {link.name}
                        </span>
                        <ArrowUpRight className="ml-auto h-4 w-4 self-center text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>

                <SheetFooter className="border-t px-6 py-6 gap-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setResumeOpen(true);
                    }}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                  <div className="flex items-center justify-center gap-6">
                    <a
                      href="https://github.com/achmadnp"
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="mailto:anaufalnp@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </a>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
    </header>
  );
}
