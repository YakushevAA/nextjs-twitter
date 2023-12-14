'use client'
import { Post } from "@/lib/posts";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import SinglePost from "./single-post";
import SkeletonLoader from "../common/loading";
import FABCreateButton from "./fab-button";

const fetchPosts = async (pageParam: number, limit: number) => {
  const response = await fetch(`/api?page=${pageParam}&limit=${limit}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostFeed: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, 5),
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
  });

  if (isLoading) {
    return <div className="max-w-md mx-auto md:max-w-2xl"><SkeletonLoader /></div>;
  }

  if (isError) {
    return <div className="text-center text-red-500 p-4">Error loading posts</div>;
  }

  return (
    <div className="relative max-w-md mx-auto md:max-w-2xl">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts.map((post: Post) => (
            <SinglePost key={post.id} text={post.text} userName={post.creator} date={post.date}/>
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="bg-blue-500 text-white p-2 rounded m-4"
        >
          Load more
        </button>
      )}
      <FABCreateButton />
    </div>
  );
};

export default PostFeed;
