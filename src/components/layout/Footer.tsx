import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              A.
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Building visually pleasing interfaces for the web.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/achmadnp"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:anaufalnp@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            {/* Add more social links if needed */}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} Achmad Naufal Prayitno. All rights
            reserved.
          </p>
          <p>Designed & Built with Next.js, Tailwind CSS and Shadcn UI.</p>
        </div>
      </div>
    </footer>
  );
}
