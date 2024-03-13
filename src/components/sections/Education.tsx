import Link from 'next/link';
import React from 'react';

const Education: React.FC = () => {
  return (
    <div className="container mx-auto py-8"  >
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Section */}
        <section className="col">
          <header className="title">
            <h2 className="text-white text-xl font-bold">EDUCATION</h2>
          </header>
          <div className="contents">
            <div className="flex p-5  w-full lg:ml-0   items-center ">
              <ol className='relative border-l border-gray-200 dark:border-gray-700'>
                <li className='ml-4 mt-4'>
                  <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                  <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                    September 2021 - present
                  </time>
                  <Link target="_blank" href="https://manavrachna.edu.in/">
                    <div className='flex flex-row space-x-2'>
                      <img className='h-10 w-10 mt-2 rounded-[5px]' src='/images/mr.png' /> 
                      <div>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                          Manav Rachna International Institute of Research & Studies 
                        </h3>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Bachelor's degree, Computer Science
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='ml-4 mt-4'>
                  <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                  <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                    April 2018 - May 2020
                  </time>
                  <Link target="_blank" href="https://ais.amity.edu/saket/">
                    <div className='flex flex-row space-x-2'>
                      <img className='h-10 w-12 mt-2 rounded-[5px]' src='/images/amity.png' /> 
                      <div>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                          Amity International School 
                        </h3>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Senior Secondary School
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="col">
          <header className="title">
              <h2 className="text-white text-xl font-bold">EXPERIANCE</h2>
            </header>
            <div className="contents">
              <div className="flex p-5  w-full lg:ml-0   items-center ">
                <ol className='relative border-l border-gray-200 dark:border-gray-700'>
                  <li className='ml-4 mt-4'>
                    <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                      September 2021 - present
                    </time>
                    <div className='flex flex-row space-x-2'>
                      <img className='h-10 w-10 mt-2 rounded-[5px]' src='' /> 
                      <div>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                          Manav Rachna International Institute of Research & Studies 
                        </h3>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Bachelor's degree, Computer Science
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className='ml-4 mt-4'>
                    <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                      September 2021 - present
                    </time>
                    <div className='flex flex-row space-x-2'>
                      <img className='h-10 w-10 mt-2 rounded-[5px]' src='' /> 
                      <div>
                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                          Amity International School 
                        </h3>
                        <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
                          Senior Secondary School
                        </p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Education;
