import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const Posts = ({ posts }: any) => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main className="text-4xl text-center font-bold px-6">
        <h1>All Posts</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post: any, index: number) => (
            <PostCard
              userId={post.id}
              title={post.title}
              content={post.body}
              key={index}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
