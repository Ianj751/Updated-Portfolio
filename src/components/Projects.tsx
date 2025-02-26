import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <ProjectCard
        title="Spring Boot Ecommerce App"
        description="Built a an e-commerce application with modular components using Docker to containerize and integrate a PostgreSQL database"
        image="/ecomm.png"
        link="https://github.com/Ianj751/Spring-Ecommerce-App"
        tags={["Java", "Spring Boot", "Docker"]}
      />
      <ProjectCard
        title="JWKS Server"
        description="A Webserver with RESTful API endpoints that serves JSON Web Keys and JSON Web Tokens on successful authentication"
        image="/JWKSServer.png"
        link="https://github.com/Ianj751/JWKS-Server"
        tags={["Go", "SQLite", "AES", "REST API"]}
      />
      <ProjectCard
        title="HackUNT Website"
        description="A website used to display information for the annual hackathon organized by the student org Engineers United"
        image="/HackUNT.png"
        link="https:///hackunt.org"
        tags={["React TS"]}
      />

      <ProjectCard
        title="Real Time Chat App"
        description="A chat app that enables real-time communication using cloud storage with Firebase"
        image="/chat.png"
        link="https://github.com/Ianj751/Real-Time-Chat-App"
        tags={["React JS", "Firebase", "Cloud Firestore"]}
      />
      <ProjectCard
        title="Running Stats Predictor"
        description="A python application that uses data analysis and Machine Learning on a large dataset to determine likely statistics given certain parameters"
        image="/running.png"
        link="https://github.com/Ianj751/Running-Stats-Predictor"
        tags={["Python", "Numpy", "Pandas", "Scikit Learn", "Scipy"]}
      />
      <ProjectCard
        title="Weather App"
        description="A weather application that uses OpenWeather API and Google Custom Search Engine API to gather weather data about a given city"
        image="/WeatherApp.png"
        link="https://github.com/Ianj751/Basic-Weather-App"
        tags={["HTML", "CSS", "JS"]}
      />
      <ProjectCard
        title="Galaga Clone"
        description="A near replica of the 80s video game Galaga using Pygame"
        image="/galaga.png"
        link="https://github.com/Ianj751/Galaga-Style-Game"
        tags={["Python", "Pygame"]}
      />
    </>
  );
}

export default Projects;
