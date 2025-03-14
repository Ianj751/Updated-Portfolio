import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Cloud,
  GitBranch,
  Terminal,
  Cpu,
  Workflow,
  LucideProps,
} from "lucide-react";

const SkillIcon = ({
  icon: Icon,
  color,
}: {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  color: string;
}) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Server,
    name: "Backend Development",
    tech: "Go, Python, Java, Spring Boot",
    description:
      "Creating robust server-side applications with focus on scalability and clean architecture.",
    color: "text-green-500",
  },
  {
    icon: Cloud,
    name: "Cloud Computing",
    tech: "AWS, Microsoft Azure, GCP",
    description:
      "Creating stable and scalable cloud architecture with optimal design",
    color: "text-blue-600",
  },
  {
    icon: Database,
    name: "Database Management",
    tech: "MongoDB, Postgresql, Cloud Firestore",
    description:
      "Designing and implementing efficient database schemas and queries for optimal data management.",
    color: "text-purple-500",
  },
  {
    icon: Code,
    name: "Frontend Development",
    tech: "React TS, HTML/CSS",
    description:
      "Building responsive and interactive user interfaces with modern React features with optimal performance.",
    color: "text-blue-500",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git, GitHub, Gitlab",
    description:
      "Managing code versions efficiently with Git and collaborating effectively through GitHub and Gitlab.",
    color: "text-orange-500",
  },
  {
    icon: Terminal,
    name: "Programming Languages",
    tech: "Go, C/C++, Java, TypeScript, Python, Rust",
    description:
      "Writing clean and maintainable code to enhance developing Experience",
    color: "text-yellow-500",
  },
  {
    icon: Cpu,
    name: "API Development",
    tech: "REST",
    description:
      "Designing and implementing efficient APIs for seamless data communication.",
    color: "text-red-500",
  },
  {
    icon: Workflow,
    name: "Agile Methodologies",
    tech: "Scrum, Kanban",
    description:
      "Working efficiently in agile environments with focus on continuous delivery.",
    color: "text-cyan-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-surface-tonal-a10 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg text-white font-semibold  group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
