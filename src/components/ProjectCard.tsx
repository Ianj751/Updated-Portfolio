import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  let index = 0;
  return (
    <motion.div
      key={(index += 1)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="!bg-transparent !border-none !shadow-none overflow-visible p-0 flex-1/2">
        <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-slate-900 rounded-3xl shadow-2xl border border-green-900/30 overflow-hidden hover:shadow-emerald-900/40 transition-all duration-300">
          <div className="relative aspect-video overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          <CardContent className="p-6 bg-gradient-to-r from-green-900 via-emerald-800 to-slate-900 text-white">
            <h3 className="font-extrabold text-2xl mb-1 tracking-tight">
              {title}
            </h3>
            <p className="text-sm text-emerald-200 mb-4 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-emerald-900/60 text-emerald-200 rounded-full text-xs font-medium border border-emerald-700 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:underline text-emerald-200"
            >
              <Github className="h-4 w-4 text-emerald-200" />
              View on GitHub
            </a>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}
