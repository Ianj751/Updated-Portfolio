import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-white">
          Have a question or want to work together? Feel free to reach out
          directly!
        </p>
      </div>

      <div className="max-w-2xl mx-auto ">
        <Card className="bg-surface-a10 text-white">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription className="text-surface-a50">
              Here are the ways you can reach me directly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-white" />
              <p>ianj60184@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-white" />
              <p>+1 (214) 536-1960</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-white" />
              <p>Dallas, Texas</p>
            </div>

            <div className="pt-4 border-t">
              <h3 className="text-sm font-medium mb-4">Connect with me</h3>
              <div className="flex gap-6">
                <a
                  href="https://github.com/Ianj751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:text-[#121e2f] transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/ian-jackson-b67b39288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:text-[#66a4e0] transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="pt-6">
              <Button className="w-full bg-primary-a10" asChild>
                <a href="mailto:ianj60184@gmail.com">Send Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
