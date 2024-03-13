import Footer from "@/components/Footer/FooterSection";
import CardSection from "@/components/sections/CardSection";
import Education from "@/components/sections/Education";
import { Certifications } from "@/components/utils/Data";



export default function Certification() {
    return (
        <div className="flex flex-col gap-10 lg:px-10 ">
            <Education />
            <CardSection title="Certifications" data={Certifications} />
            <Footer />
        </div>
      );
  }