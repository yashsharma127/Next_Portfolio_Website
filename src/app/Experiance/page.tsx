import Footer from '@/components/Footer/FooterSection';
import CardSection from '@/components/sections/CardSection';
import {
    backendCard,
    databaseCard,
    devopsCards,
    frontendCard,
    moreProjects,
    projectCard,
    Certifications,
  } from '@/components/utils/Data';

export default function Experiance() {
    return (
        <div className="flex flex-col gap-10 lg:px-10 ">
          <CardSection title="Certifications" data={Certifications} />
          <Footer />
        </div>
      );
  }