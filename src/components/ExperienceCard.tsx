import { useState, useEffect } from "react";
import { Calendar, MapPin, Briefcase } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
};

const ExperienceCard = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experience: Experience = {
    title: "Software Engineer Intern",
    company: "nCino Inc.",
    location: "Wilmington, NC",
    period: "May 2025 - Dec 2025",
    description:
      "Building scalable web applications and leading development teams to create solutions that serve over 100,000 users daily.",
    skills: ["Angular", "TypeScript", "AWS", "Salesforce"],
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div
        className={`transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-green-900 via-emerald-800 to-slate-900 rounded-3xl shadow-2xl border border-green-900/30 overflow-hidden hover:shadow-emerald-900/40 transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-900 via-emerald-800 to-slate-900 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md shadow-lg">
                <Briefcase className="w-7 h-7 text-emerald-300" />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">
                  {experience.title}
                </h2>
                <p className="text-emerald-200 text-lg font-medium">
                  {experience.company}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-emerald-100 text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-300" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-300" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 bg-gradient-to-br from-slate-900 via-emerald-950 to-green-900">
            <p className="text-emerald-100 text-lg leading-relaxed mb-8">
              {experience.description}
            </p>
            <div>
              <h3 className="text-emerald-300 font-semibold mb-4 text-xl">
                Key Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1 bg-emerald-900/60 text-emerald-200 rounded-full text-base font-medium border border-emerald-700 shadow hover:bg-emerald-800/80 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
