import { FC } from 'react';
import Card from '../ui/Card';
import { ICertificateSectionCardData } from '../utils/Data';

interface CardSectionProps {
    title: string;
    version?: string;
    data: ICertificateSectionCardData[];
}

const CardSection: FC<CardSectionProps> = ({ title, version, data }) => {
    return (
        <section className="grid gap-5 m-10 md:p-0">
            <div className="text-xl font-bold text-highlight">{title}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                {data.map((card) => (
                    <Card
                        href={card.href}
                        key={card.id}
                        title={card.title}
                        src={card.src}
                        company={card.company}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
