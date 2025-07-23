import Link from "next/link";
import { settingsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Header() {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
  });

  return (
    // <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
    //   <div className="container py-6 px-2 sm:px-6">
    //     <div className="flex items-center justify-between gap-5">
    //       <Link className="flex items-center gap-2" href="/">
    //         <span className="text-lg sm:text-2xl pl-2 font-semibold">
    //           {settings?.title || "Testing...."}
    //         </span>
    //       </Link>

    //       <nav>
    //         <ul
    //           role="list"
    //           className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono"
    //         >
    //           <li>
    //             <Link href="/about" className="hover:underline">
    //               About
    //             </Link>
    //           </li>              
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </header>

    // <header className="bg-white shadow-md">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-16">
                    
    //       <div className="flex-shrink-0">
    //         <Link href="/" className="text-xl font-bold text-gray-800">MySite</Link>
    //       </div>
          
    //       <nav className="hidden md:flex space-x-8">
    //         <Link href="#home" className="text-gray-600 hover:text-gray-900">Home</Link>
    //         <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
    //         <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
    //         <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
    //       </nav>
          
    //       <div className="md:hidden">
    //         <button type="button" className="text-gray-800 focus:outline-none" id="mobile-menu-button">
    //           <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
    //               d="M4 6h16M4 12h16M4 18h16" />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="md:hidden hidden px-4 pb-4 space-y-2" id="mobile-menu">
    //     <Link href="#home" className="block text-gray-700 hover:text-gray-900">Home</Link>
    //     <Link href="#about" className="block text-gray-700 hover:text-gray-900">About</Link>
    //     <Link href="#projects" className="block text-gray-700 hover:text-gray-900">Projects</Link>
    //     <Link href="#contact" className="block text-gray-700 hover:text-gray-900">Contact</Link>
    //   </div>
    // </header>

    <nav className="bg-transparent relative z-20 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <ul className="flex space-x-14">
          <li><a href="#about" className="hover:text-green-600">About</a></li>
          <li><a href="#projects" className="hover:text-green-600">Projects</a></li>
          <li><a href="#blog" className="hover:text-green-600">Blog</a></li>
          <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
