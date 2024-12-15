import React from 'react';
import Link from 'next/link';

const Navigation = () => {
    return (
        <>
            <div className="fixed top-0 h-full w-[300px] border-r border-solid border-black bg-white flex items-center justify-center">

                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/service">Service</Link></li>
                    <li><Link href="/project">Project</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;

