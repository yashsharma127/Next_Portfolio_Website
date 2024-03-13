// import Link from 'next/link';
import { FC } from 'react';
// import Button from '../ui/Button';
// import { Instagram } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-5xl flex flex-col font-bold text-highlight ">
            Hello! I'm Yash Sharma
            <div className="text-xl font-thin flex text-zinc-300 justify-between items-center">
                A software developer who thrives on freelancing. 
                I enjoy the freedom it gives me to create tailor-made software solutions for my clients. 
                Beyond coding, I have a real knack for exploring the latest technologies and sharing my discoveries with others using my blog posts. 
                It's not just about writing code for me; it's about staying curious and engaged with what's new in the tech world. 
                Let's team up and bring your digital ideas to life while diving into the exciting realm of emerging technologies together!    
                {/* <Link
                    className="block md:hidden"
                    href="https://instagram.com/ezSnippet"
                    target='_blank'
                >
                    <Button variant="primary" sizes={'iconOnly'}>
                        <Instagram />
                    </Button>
                </Link> */}
            </div>
        </div>
    );
};

export default ProfileName;
