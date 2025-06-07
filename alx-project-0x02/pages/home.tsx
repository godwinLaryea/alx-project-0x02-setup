import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC<CardProps> = ({ title, content }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [post, setPost] = useState([
    {
      title: "Why Next JS?",
      content:
        "One of the primary benefits of Next. js is its ability to improve search engine optimization (SEO) significantly. Through server-side rendering and static site generation, the framework ensures that content is easily accessible and ready to be indexed by search engines.",
    },
  ]);

  const handleAddPost = (newPost: CardProps) => {
    setPost((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <main>
      <Header />
      <section className="px-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Contents</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-sky-400 font-semibold px-4 py-2 rounded-full text-white cursor-pointer"
          >
            Add New Post
          </button>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-4">
          {post.map(({ title, content }: CardProps, index: number) => (
            <Card title={title} content={content} key={index} />
          ))}
        </div>
      </section>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </main>
  );
};

export default Home;
