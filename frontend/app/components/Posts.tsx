import Link from "next/link";

import { sanityFetch } from "@/sanity/lib/live";
import { morePostsQuery, allPostsQuery } from "@/sanity/lib/queries";
import { Post as PostType, AllPostsQueryResult } from "@/sanity.types";
import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
import Avatar from "@/app/components/Avatar";
import { createDataAttribute } from "next-sanity";
import Image from "next/image";
import CoverImage from "./CoverImage";

const Post = ({ post }: { post: AllPostsQueryResult[number] }) => {
  const { _id, title, slug, excerpt, date, author, coverImage } = post;
  const attr = createDataAttribute({
    id: _id,
    type: "post",
    path: "title",
  });
  
  return (
    <article
      data-sanity={attr()}
      key={_id}
      className="border border-gray-200 rounded-sm p-6 bg-gray-50 flex flex-col justify-between transition-colors hover:bg-white relative"
    >
      <Link
        className="hover:text-brand underline transition-colors"
        href={`/posts/${slug}`}
      >
        <span className="absolute inset-0 z-10" />
      </Link>
      <div>
        <h3 className="text-2xl font-bold mb-4 leading-tight">{title}</h3>
        <div className="w-full">
          {
            coverImage &&
            <CoverImage image={coverImage} />
          }          
        </div>        
        <p className="line-clamp-3 mt-4 text-sm leading-6 text-gray-600 max-w-[70ch]">
          {excerpt}
        </p>
      </div>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">        
        <time className="text-gray-500 text-xs font-mono" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>

      <div className="w-full mt-5">
      {
          author && author.firstName && author.lastName && (
            <div className="flex items-center">
              <Avatar person={author} small={true} />
            </div>
          )
        }
      </div>
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div className="pt-20 pb-20 px-20 w-full">
    {heading && (
      <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-3xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="pt-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: any) => <Post key={post._id} post={post} />)}
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });

  if (!data || data.length === 0) {
    return <OnBoarding />;
  }

  return (
    <Posts
      heading="Recent Posts"
      subHeading={`${data.length === 1 ? "This blog post is" : `These ${data.length} blog posts`}`}
    >
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};
