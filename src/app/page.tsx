import Cover from '@/components/Cover';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import { projectCard } from '@/components/utils/Data';
import Footer from '@/components/Footer/FooterSection';

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10 ">
        {/* <Hero /> */}
        <ProjectCardSection title="Blogs" data={projectCard} />
        <Footer />
      </div>
      
    </div>
  );
}
