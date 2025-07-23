import { Suspense } from "react";
import { AllPosts } from "../components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery, bannerQuery } from "@/sanity/lib/queries";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
    const { data } = await sanityFetch({ query: bannerQuery });    
    return(
        <div className="w-full">
            <div className="relative w-full h-screen">                
                <img
                    src={data.backgroundImage.asset.url}
                    alt={data.backgroundImage.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-black/50"></div>
                
                <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold">{data.title}</h1>
                    <p className="mt-4 text-lg md:text-2xl max-w-xl">
                        {data.subtitle}
                    </p>
                    
                    <Link
                        href={data.ctaLink}
                        className="mt-8 inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="w-full">
                <Suspense>{await AllPosts()}</Suspense>
            </div>
        </div>
    )
}