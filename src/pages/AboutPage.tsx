import Education from "@/components/Education";
import ExperienceCard from "@/components/ExperienceCard";
import Skills from "@/components/Skills";
import { Mail, Github, Linkedin } from "lucide-react";

function AboutPage() {
  return (
    <>
      <div className="min-h-screen text-gray-50">
        <main className="container mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-2">Ian Jackson</h1>
            <p className="text-xl ">Software Engineer</p>
          </header>

          <section className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-4">
              <h2 className="text-2xl mb-4">About Me</h2>
              <p className=" ">
                Hey! I'm Ian Jackson, a passionate Computer Science student at
                the University of North Texas with a passion for all things
                Software Engineering. My journey in technology began with a
                curiosity about how things work and solving problems; this
                evolved into a love for coding and innovation. I've worked on
                various personal and school projects primarily in the realm of
                web and full-stack development. I'm eager to explore the endless
                possibilities in Computer Science and always open to new
                opportunities and discussions. Feel free to reach out on
                <a
                  href="https://www.linkedin.com/in/jackson-ian"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ian's LinkedIn profile (opens in new tab)"
                >
                  <span style={{ color: "#0a66c2" }}> LinkedIn </span>
                </a>
                or via email at
                <a href="mailto:ianj60184@gmail.com" target="_blank">
                  {" ianj60184@gmail.com "}
                </a>
              </p>
              <p className="">
                When I'm not coding, you can find me exploring new technologies,
                studying for a new certification, or enjoying a good book.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/IanJacksonFace.jpg"
                alt="Ian Jackson"
                width={400}
                height={400}
                className="rounded-full shadow-lg backdrop-blur-2xl"
              />
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 ">Experience</h2>
            <ExperienceCard />
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 ">Education</h2>
            <Education />
          </section>
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 ">My Skills</h2>
            <Skills />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 ">Get in Touch</h2>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:ianj60184@gmail.com"
                className="flex items-center space-x-2 bg-emerald-700  px-4 py-2 rounded-md hover:bg-emerald-800 transition duration-300"
              >
                <Mail />
                <span>Email Me</span>
              </a>
              <a
                href="https://github.com/Ianj751"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-800  px-4 py-2 rounded-md hover:bg-gray-900 transition duration-300"
              >
                <Github />
                <span>GitHub</span>
              </a>
              <a
                href="www.linkedin.com/in/ian-jackson-b67b39288"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-[#0a66c2]  px-4 py-2 rounded-md hover:bg-blue-800 transition duration-300"
              >
                <Linkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default AboutPage;
