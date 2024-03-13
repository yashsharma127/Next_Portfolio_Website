import { FC } from 'react';

interface TechCardProps {
  title: string;
  className: string;
  tech: { name: string; imageSrc: string }[];
}

const TechCard: FC<TechCardProps> = ({ title, className, tech }) => {
  return (
    <div className={`flex-1 flex flex-col gap-4 ${className} p-4 rounded-md shadow-lg`}>
      <div className="text-primary font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
        <div
          key={i}
          className="rounded-md bg-body p-2 hover:scale-125 transition-transform duration-300"
        >
            <img src={item.imageSrc} alt={item.name} className="w-10 h-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
