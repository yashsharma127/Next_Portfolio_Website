import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectsCardProps {
  title: string;
  src?: string;
  href?: string;
  techStack: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    <div className='hover:scale-125 transition-transform duration-300'>
    <Link target="_blank" href={href || '/'}>
      <div className="flex flex-col overflow-hidden gap-3 bg-black text-zinc-400 rounded-lg overflow-ellipsis">
        <Image
          src={`/projects/${src}`}
          alt="spotify"
          width={700}
          height={700}
          className="aspect-video object-cover"
        />
        <div className="flex flex-col px-4 py-2 h-24">
          <div className="flex font-bold">{title}</div>
          <div className="flex text-info text-xs">{techStack}</div>
        </div>
      </div>
    </Link>
    </div>
  );
};

export default ProjectsCard;
