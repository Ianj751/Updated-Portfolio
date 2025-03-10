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
      <Card className="!border-none overflow-hidden bg-surface-tonal-a10 flex-1/2  shadow-sm hover:shadow-xl raise">
        <div className="relative aspect-video">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-xl mb-2 text-gray-300">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:underline text-gray-300"
          >
            <Github className="h-4 w-4 text-gray-300" />
            View on GitHub
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
