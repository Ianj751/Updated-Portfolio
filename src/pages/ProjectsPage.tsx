import PageTransition from "@/components/PageTransition";
import Projects from "@/components/Projects";

function ProjectsPage() {
  return (
    <>
      <PageTransition>
        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <h2 className="text-5xl font-bold tracking-tighter sm:text-lg md:text-5xl mb-10 text-center text-gray-300">
              Some of My Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 py-6 md:py-12 lg:py-16">
              <Projects />
            </div>
          </div>
        </section>
      </PageTransition>
    </>
  );
}

export default ProjectsPage;
