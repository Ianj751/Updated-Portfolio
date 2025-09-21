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
              className="transition-all duration-700"
            >
              <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-slate-900 rounded-3xl shadow-2xl border border-green-900/30 overflow-hidden hover:shadow-emerald-900/40 transition-all duration-300">
                <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-slate-900 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-lg">
                      <GraduationCap className="w-7 h-7 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-extrabold tracking-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-emerald-200 text-lg font-medium">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-emerald-100 text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-emerald-300" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900">
                  <h4 className="text-emerald-300 font-semibold mb-4 text-xl flex items-center">
                    <LibraryBig className="w-5 h-5 mr-2" />
                    Relevant Coursework
                  </h4>

                  <ul className="list-disc list-inside space-y-2">
                    {edu.coursework.map((coursework, idx) => (
                      <li key={idx} className="text-emerald-100">
                        {coursework}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
