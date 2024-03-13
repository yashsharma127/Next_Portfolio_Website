import Footer from "@/components/Footer/FooterSection";
import MoreProjects from "@/components/sections/MoreProjects";
import ProjectCardSection from "@/components/sections/ProjectCardSection";
import { moreProjects, projectCard } from "@/components/utils/Data";

export default function Projects() {
    return (
      <div className="flex flex-col gap-10 lg:px-10 ">
        <ProjectCardSection title="Projects" data={projectCard} />
        <MoreProjects title="Live projects" data={moreProjects} />
        <Footer />
      </div>
    );
  }