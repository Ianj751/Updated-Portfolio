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
  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-lg flex items-center justify-center">
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Server,
    name: "Backend Development",
    tech: "Go, Python, Java Spring Boot, C# ASP.NET",
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
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="transition-all duration-700"
            >
              <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-slate-900 rounded-3xl shadow-2xl border border-green-900/30 overflow-hidden hover:shadow-emerald-900/40 transition-all duration-300">
                <div className="p-6 bg-gradient-to-r from-green-900 via-emerald-800 to-slate-900 text-white">
                  <div className="flex items-center mb-4">
                    <SkillIcon icon={skill.icon} color={skill.color} />
                    <div className="ml-4">
                      <h3 className="text-xl text-emerald-100 font-extrabold tracking-tight">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-emerald-200">{skill.tech}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900">
                  <p className="text-emerald-100 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-emerald-900/50 text-emerald-200 rounded-full text-sm font-medium border border-emerald-700 shadow-sm">
                      {skill.name.split(" ")[0]}
                    </span>
                    <span className="px-3 py-1 bg-emerald-900/30 text-emerald-200 rounded-full text-sm font-medium border border-emerald-800 shadow-sm">
                      {skill.tech.split(",")[0]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
