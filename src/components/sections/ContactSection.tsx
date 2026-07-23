"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary font-mono mb-4 text-sm tracking-widest">
            04. what&apos;s next?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-foreground">
            get in touch
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            I’m currently looking for a remote job or any new opportunities.
            Whether you have a project to discuss or just want to say hi, my
            inbox is open for all!
          </p>
          <Button
            size="lg"
            asChild
            className="px-8 py-6 text-lg hover:scale-105 transition-transform"
          >
            <a href="mailto:anaufalnp@gmail.com">Say Hello</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
