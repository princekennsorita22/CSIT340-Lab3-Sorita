import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="Aetherglow"
          description="Collaborated with a partner to develop an Android app for gaming gear and energy drink ordering, featuring rewards, order history, and customization."
          tech="Kotlin · XML · Android Studio"
          link="https://github.com/satriozzz/AetherGlow_1"
        />
        <ProjectCard
          year="2026"
          title="Budget Tracker"
          description="A desktop application developed with a team to manage personal budgets, track expenses, and generate financial reports."
          tech="Java · JavaFX · MySQL · XAMPP · IntelliJ IDEA"
          link="https://github.com/keithallenlariego/CSIT228-G12-OOP2-CAPSTONE-GROUP5"
        />
        <ProjectCard
          year="2026"
          title="My First React Project"
          description="A responsive web project built with React to explore modern frontend development."
          tech="React · JavaScript · HTML · CSS · VS Code"
          link="https://github.com/princekennsorita22/myfirstreactproject"
        />
        <ProjectCard
          year="2026"
          title="JavaFXAssignment"
          description="A collection of JavaFX interface projects featuring a food ordering system, number counter, and simple calculator."
          tech="Java · JavaFX · FXML · IntelliJ IDEA"
          link="https://github.com/princekennsorita22/JavaFXAssignment"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
