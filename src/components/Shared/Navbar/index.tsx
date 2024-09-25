import Image from "next/image";
import Link from "next/link";

import ThemeSwitch from "@/components/ThemeSwitch";
import ClientOnly from "../ClientOnly";

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 h-[75px] bg-gray-200 dark:bg-gray-800 shadow-md'>
      <div className='container mx-auto flex items-center justify-between px-4 py-4'>
        <div className='text-2xl font-bold text-black dark:text-white'>
          <Link href='/'>
            <Image src='/assets/logo.png' alt='Logo' width={100} height={100} />
          </Link>
        </div>
        <ClientOnly>
          <ThemeSwitch />
        </ClientOnly>
      </div>
    </nav>
  );
};

export default Navbar;
