import './globals.css';
import type { Metadata } from 'next';
// import SideBar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';
import { ContactFormProvider, MenuProvider } from '@/components/Provider';
import { Toaster } from 'react-hot-toast';
import StarsCanvas from '@/components/Background/StarBackground';

export const metadata: Metadata = {
    title: 'Ez Snippet',
    description: 'Learning made EZ',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className='bg-black overflow-y-scroll overflow-x-hidden'>
                <MenuProvider>
                    <ContactFormProvider>
                        <ContactForm />
                        <Toaster />
                        <div className="flex"> 
                            <main className="flex-1 px-4 lg:px-12">
                                <Navbar />
                                {/* <script src="../bgvendor/snow.js"></script> */}
                                <StarsCanvas/>
                                {children}
                            </main>
                        </div>
                    </ContactFormProvider>
                </MenuProvider>
            </body>
        </html>
    );
}
