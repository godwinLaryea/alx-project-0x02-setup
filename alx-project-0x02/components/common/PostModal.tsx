import React, { FormEvent, useState } from "react";
import { PostProps, PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<PostProps>({
    id: 0,
    title: "",
    content: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
    setPost({
      id: 0,
      title: "",
      content: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md ">
        <h2 className="text-3xl text-center font-semibold">Create new Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-xl text-gray-700 font-semibold mb-2">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={post.title}
              onChange={handleChange}
              placeholder="Enter title of post"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="content"
            id="content"
            placeholder="Enter post content"
            rows={4}
            value={post.content}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-white font-semibold bg-red-500 rounded-lg cursor-pointer focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-sky-400 text-white font-semibold rounded-lg cursor-pointer hover:bg-sky-400 transition"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
