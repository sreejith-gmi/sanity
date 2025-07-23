import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import { moreProjectQuery, allProjectQuery } from "@/sanity/lib/queries";
import { Post as PostType, AllPostsQueryResult } from "@/sanity.types";
import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
import Avatar from "@/app/components/Avatar";
import { createDataAttribute } from "next-sanity";
import Image from "next/image";
import CoverImage from "./CoverImage";

const Project = ({ project }: { project: AllPostsQueryResult[number] }) => {
  const { _id, title, slug, excerpt, date, author, coverImage } = project;
  const attr = createDataAttribute({
    id: _id,
    type: "project",
    path: "title",
  });
  
  return (
    // <article
    //   data-sanity={attr()}
    //   key={_id}
    //   className="border border-gray-200 rounded-sm p-6 bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative"
    // >
    //   <Link
    //     className="hover:text-brand underline transition-colors"
    //     href={`/posts/${slug}`}
    //   >
    //     <span className="absolute inset-0 z-10" />
    //   </Link>
    //   <div>
    //     <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
    //     <div className="w-full">
    //       {
    //         coverImage &&
    //         <CoverImage image={coverImage} />
    //       }          
    //     </div>        
    //     <p className="line-clamp-3 mt-4 text-sm leading-6 text-gray-600 max-w-[70ch]">
    //       {excerpt}
    //     </p>
    //   </div>
      
    //   <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">        
    //     <time className="text-gray-500 text-xs font-mono" dateTime={date}>
    //       <DateComponent dateString={date} />
    //     </time>
    //   </div>

    //   <div className="w-full mt-5">
    //   {
    //       author && author.firstName && author.lastName && (
    //         <div className="flex items-center">
    //           <Avatar person={author} small={true} />
    //         </div>
    //       )
    //     }
    //   </div>
    // </article>

    <div 
      data-sanity={attr()} 
      key={_id}
      className="bg-white shadow rounded-lg overflow-hidden"
    >
      <div className="w-full">
             {
               coverImage &&
               <CoverImage image={coverImage} />
             }
      </div> 

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2"> {excerpt}  </p>      
      </div>
    </div> 
  );
};

const Projects = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div className="pt-6 pb-20 px-7 w-full">
    {/* {heading && (
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-3xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )} */}
    <div className="pt-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  </div>
);

export const MoreProjects = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: moreProjectQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Projects heading={`Recent Project (${data?.length})`}>
      {data?.map((post: any) => <Project key={post._id} project={post} />)}
    </Projects>
  );
};

export const AllProjects = async () => {
  const { data } = await sanityFetch({ query: allProjectQuery });

  if (!data || data.length === 0) {
    return <OnBoarding />;
  }

  return (
    <Projects
      heading="Recent Project"
      subHeading={`${data.length === 1 ? "This Project is" : `These ${data.length} Project`}`}
    >
      {data.map((post: any) => (
        <Project key={post._id} project={post} />
      ))}
    </Projects>
  );
};
