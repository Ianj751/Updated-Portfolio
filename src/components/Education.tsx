import { GraduationCap, Calendar, LibraryBig } from "lucide-react";
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of North Texas",
      period: "2023 - Present",
      coursework: [
        "CSCE 3444 - Software Engineering",
        "CSCE 4350 - Fundamentals of Database Systems",
        "CSCE 3550 - Foundations of CyberSecurity",
      ],
    },
  ];

  return (
    <section
      id="education"
      /* className="py-20 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative" */
    >
      <div className="container mx-auto px-6 relative z-0">
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-surface-tonal-a10 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-surface-tonal-a0 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                <h4 className="text-lg font-medium mb-2 text-gray-200 flex items-center">
                  <LibraryBig className="w-5 h-5 mr-2" />
                  Relevant Coursework:
                </h4>
                <ul className="list-disc list-inside space-y-2">
                  {edu.coursework.map((coursework, idx) => (
                    <li key={idx} className="text-gray-300">
                      {coursework}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
