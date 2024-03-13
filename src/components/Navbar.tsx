'use client';
import { Menu, User, X } from 'lucide-react';
import { FC } from 'react';
import Button from './ui/Button';
import { useContact, useMenu } from './Provider';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { setFormVisibility } = useContact();
    const { showMenu, showMenuVisibility } = useMenu();
    return (
        <nav className="flex sticky shadow-md top-0 bg-black z-20 bg-body p-5 text-info justify-between">
            <div>
                <Link href="/">
                <Button className='text-xl font-bold' >
                   Home <User size={18} />
                </Button>
                </Link>
            </div>

            <div className="flex items-center  gap-5 font-xl text-zinc-300 ">
                
                <Link href="/Certification">
                <Button className='text-xl font-bold' >
                   Certifications <User size={18} />
                </Button>
                </Link>

                <Link href="/Projects">
                <Button className='text-xl font-bold' >
                    Projects <User size={18} />
                </Button>
                </Link>

                <Link href="/Experiance">
                <Button className='text-xl font-bold'>
                    Experiance <User size={18} />
                </Button>
                </Link>

                <Link href="/">
                <Button className='text-xl font-bold' >
                    Resume <User size={18} />
                </Button>
                </Link>

                <button
                    onClick={() => showMenuVisibility(!showMenu)}
                    type="button"
                >
                    <Menu className="flex lg:hidden cursor-pointer hover:text-primary transition-colors" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

