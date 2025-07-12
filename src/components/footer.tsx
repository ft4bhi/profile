import { Github, Linkedin } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo />
            <span className="font-bold">Abhiram P S</span>
          </div>
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abhiram P S. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/ft4bhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/abhiram-ps-9b744924b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
