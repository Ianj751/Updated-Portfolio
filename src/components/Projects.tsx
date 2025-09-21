import ProjectCard from "./ProjectCard";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
};

function Projects() {
  const projects: Project[] = [
    /*   {
      title: "Image Processing Application",
      description:
        "Create",
      image: "/ecomm.png",
      link: "https://github.com/Ianj751/Spring-Ecommerce-App",
      tags: ["Java", "Spring Boot", "Docker"],
    }, */
    {
      title: "JWKS Server",
      description:
        "A Webserver with RESTful API endpoints that serves JSON Web Keys and JSON Web Tokens on successful authentication",
      image: "/JWKSServer.png",
      link: "https://github.com/Ianj751/JWKS-Server",
      tags: ["Go", "SQLite", "AES Encryption", "REST API"],
    },
    {
      title: "HackUNT Website",
      description:
        "A website used to display information for the annual hackathon organized by the student org Engineers United",
      image: "/HackUNT.png",
      link: "https:///hackunt.org",
      tags: ["React", "TypeScript"],
    },
    {
      title: "Real Time Chat App",
      description:
        "A chat app that enables real-time communication using cloud storage with Firebase",
      image: "/chat.png",
      link: "https://github.com/Ianj751/Real-Time-Chat-App",
      tags: ["React JS", "Firebase", "Cloud Firestore"],
    },
    {
      title: "Running Stats Predictor",
      description:
        "A python application that uses data analysis and Machine Learning on a large dataset to determine likely statistics given certain parameters",
      image: "/running.png",
      link: "https://github.com/Ianj751/Running-Stats-Predictor",
      tags: ["Python", "Numpy", "Pandas", "Scikit Learn", "Scipy"],
    },
    {
      title: "Galaga Clone",
      description: "A near replica of the 80s video game Galaga using Pygame",
      image: "/galaga.png",
      link: "https://github.com/Ianj751/Galaga-Style-Game",
      tags: ["Python", "Pygame"],
    },
  ];

  return (
    <>
      {projects.map((p) => (
        <ProjectCard
          key={p.title}
          title={p.title}
          description={p.description}
          image={p.image}
          link={p.link}
          tags={p.tags}
        />
      ))}
    </>
  );
}

export default Projects;
