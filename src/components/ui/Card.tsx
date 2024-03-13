import Image from 'next/image';
import { FC } from 'react';
import List from './List';
import { Code, History } from 'lucide-react';
import Link from 'next/link';

interface CardProps {
    title: string;
    src: string;
    href?: string;
    company: string
}

const Card: FC<CardProps> = ({
    title,
    src,
    href,
    company,
}) => {
    return (
        <div className="flex flex-col gap-3">
            <Link target="_blank" href="https://manavrachna.edu.in/">
            <div className='flex p-5 bg-black space-x-4 hover:scale-125 transition-transform border border-zinc-600 rounded-lg'>
                
                      <img className='h-16 w-16 mt-auto rounded-[5px]' src={src} /> 
                      <div>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                          {title} 
                        </h3>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          {company}
                        </p>
                        </div>
                    </div>
                  </Link>
        </div>
    );
};

export default Card;
