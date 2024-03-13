import { FC } from 'react';
import TechCard from './Card/TechCard';

interface TechStackProps {}

const TechStack: FC<TechStackProps> = ({}) => {
  return (
    <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3">
      <div className="text-xl font-medium mt-2 text-zinc-200 mb-5">
        What I know
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <TechCard
          title="Frontend"
          className=" "
          tech={[
            { name: 'HTML', imageSrc: '/tech/frontend/html.svg' },
            { name: 'CSS', imageSrc: '/tech/frontend/css.jpeg' },
            // Add more technologies with their image sources
          ]}
        />
        <TechCard
          title="Backend"
          className=" "
          tech={[
            { name: 'HTML', imageSrc: '/tech/frontend/html.svg' },
            { name: 'CSS', imageSrc: '/tech/frontend/css.jpeg' },
            // Add more technologies with their image sources
          ]}
        />
        <TechCard
          title="Database"
          className=" "
          tech={[
            { name: 'HTML', imageSrc: '/tech/frontend/html.svg' },
            { name: 'CSS', imageSrc: '/tech/frontend/css.jpeg' },
            // Add more technologies with their image sources
          ]}
        />
        <TechCard
          title="DevOps"
          className=" "
          tech={[
            { name: 'HTML', imageSrc: '/tech/frontend/html.svg' },
            { name: 'CSS', imageSrc: '/tech/frontend/css.jpeg' },
            // Add more technologies with their image sources
          ]}
        />
         
      </div>
    </div>
  );
};

export default TechStack;
