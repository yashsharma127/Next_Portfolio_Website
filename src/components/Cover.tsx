import { FC } from 'react';
import ProfilePic from './cover/ProfilePic';
import ProfileName from './cover/ProfileName';
import Button from './ui/Button';
import { Github, Globe, Globe2, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
    return (
        <div className="flex rounded-lg w-full bg-no-repeat bg-cover">
            <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 w-full gap-2 md:gap-10">
                <ProfilePic />
                <div className="flex md:flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between items-center gap-5 ">
                        <ProfileName />
                        <div>
                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://www.linkedin.com/in/yash-sharma-368442226"
                            >
                                <Button variant="primary" sizes={'small'}>
                                    <Linkedin color="#0277b5" />
                                    <span className="hidden md:block">
                                        Linkedin
                                    </span>
                                </Button>
                            </Link>

                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://github.com/yashsharma127"
                            >
                                <Button variant="primary" sizes={'small'}>
                                    <Github color="#2a9d8f"/>
                                    <span className="hidden md:block">
                                        GitHub
                                    </span>
                                </Button>
                            </Link>

                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://instagram.com/"
                            >
                                <Button variant="primary" sizes={'small'}>
                                    <Instagram color="#b5179e"/>
                                    <span className="hidden md:block">
                                        Instagram
                                    </span>
                                </Button>
                            </Link>

                            <Link
                                className="hidden md:block"
                                target="_blank"
                                href="https://siuuu.hashnode.dev/"
                            >
                                <Button variant="primary" sizes={'small'}>
                                    <Globe2 color="#f77f00"/>
                                    <span className="hidden md:block">
                                        Hashnode
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
