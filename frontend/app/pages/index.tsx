import { Suspense } from "react";
import { AllPosts } from "../components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { aboutQuery, allPostsQuery, bannerQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";
import { AllProjects } from "../components/Project";

export default async function HomePage() { 
    const [bannerData, aboutData] = await Promise.all([
        sanityFetch({ query: bannerQuery }),
        sanityFetch({ query: aboutQuery }),
    ]);

    const data = bannerData.data;
    const about = aboutData.data;

    return(
        <div className="w-full mt-[-75px]">
            <div className="relative w-full h-screen">                
                <img
                    src={data.backgroundImage.asset.url}
                    alt={data.backgroundImage.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="relative z-10 flex flex-col justify-center items-start text-left h-full text-white px-12">
                    <h1 className="text-4xl md:text-6xl font-bold">{data.title}</h1>
                    <p className="mt-4 text-lg max-full font-extralight">
                        {data.subtitle}
                    </p>
                    
                    <Link
                        href={data.ctaLink}
                        className="mt-8 inline-block bg-green-600 text-white font-light px-6 py-3 rounded hover:bg-green-800 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <section className="bg-white py-16" id="about">
                <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">                            
                    <div className="md:w-1/2 mb-10 md:mb-0 pr-12">
                        <p className="text-gray-400 mb-4">{about.title}</p>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">{about.subtitle}</h2>
                        <p className="text-gray-600 mb-6">
                            {about.content}
                        </p>
                        <Link
                            href={about.ctaLink}
                            className="mt-8 inline-block bg-green-600 text-white font-light px-6 py-3 rounded hover:bg-green-800 transition"
                        >
                            {about.ctaText}
                        </Link>
                    </div>
                
                    <div className="md:w-1/2">
                        <img
                            src={about.backgroundImage.asset.url}
                            alt={about.backgroundImage.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50" id="projects">
                <div className="w-full mt-2">                    
                    <h2 className="text-4xl font-bold text-gray-800 text-center">Recent Project</h2>
                </div>

                <div className="container mx-auto px-4">                    
                    <Suspense>{await AllProjects()}</Suspense>
                </div>
            </section>            

            <div className="w-full" id="blog">
                <Suspense>{await AllPosts()}</Suspense>
            </div>

            <section className="py-12 bg-gray-50" id="contact">
                <div className="w-full mt-2">
                    <h2 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h2>
                </div>

                <div className="container mx-auto px-10">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" name="name" required
                                className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2" />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" name="email" required
                                className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2" />
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea id="message" name="message" required
                                className="mt-1 block w-full bg-white border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2"></textarea>
                        </div>
                        
                        <div>
                            <button type="submit"
                                className="inline-block bg-green-600 text-white font-light px-6 py-3 rounded hover:bg-green-800 transition">
                                Send Message
                            </button>
                        </div>

                    </form>
                </div>
            </section>  
        </div>
    )
}